const { RESTDataSource  } = require('apollo-datasource-rest');
const { gql } = require('apollo-server-lambda');

const DIRECTOR = gql`
  query MyQuery {
    getDirector(id: "1") {
      id
      nombre
      apellido
    }
  }
`;

class DirectorAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://XXXX.appsync-api.us-west-2.amazonaws.com';    // Your AppSync endpoint here
  }

  willSendRequest(request) {
    request.headers.set('x-api-key', 'XXXXX');                            // Your Api Key here
  }

  async getDirector({ id }) {
    const response = await this.post('graphql',`{"query": "query MyQuery {getDirector(id: ${id}) {id nombre apellido}}"}`);
    console.log(response)
    return response.data.getDirector;
  }
}

module.exports = DirectorAPI;
