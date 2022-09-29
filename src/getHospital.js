const { DataSource } = require('apollo-datasource');

const { RDSDataClient, ExecuteStatementCommand } = require("@aws-sdk/client-rds-data");
const { LambdaClient, InvokeCommand } = require("@aws-sdk/client-lambda");

const client = new RDSDataClient({ region: "us-west-2" }); 
const clientL = new LambdaClient({ region: "us-west-2" });

class HospitalAPI extends DataSource {

  async getHospital({ id }) {

    const params = {
      /** input parameters */
      secretArn: 'arn:aws:secretsmanager:us-west-2:XXXX:secret:rds-db-credentials/cluster-YYYYY/ZZZZ',  // Your secretARN here
      resourceArn: 'arn:aws:rds:us-west-2:XXXX:cluster:YYYY',                                           // Your resourceARN here
      database: 'db_serverless',                                                                        // Your DB name
      sql: 'SELECT * FROM Hospital WHERE id = :id',
      parameters: [
        { name: 'id', value: { doubleValue: +id } }
      ],
      formatRecordsAs:'JSON',
    };

    console.log('starting async query');
    const command = new ExecuteStatementCommand(params);
    const results = await client.send(command);
    console.log(results)
    console.log('async query finished');
    return JSON.parse(results.formattedRecords)[0];
  }
  
    async listHospital() {
    const input = {
      FunctionName: 'API_list',
      InvocationType: 'RequestResponse',
      Payload: '{"arguments": {"id": "1"},"info": {"fieldName": "listHospitals"}}',
    };
    const command = new InvokeCommand(input);
    const data = await clientL.send(command);
    console.log(data);
    return JSON.parse(Buffer.from(data.Payload));
  }  

}

module.exports = HospitalAPI;
