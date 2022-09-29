const { ApolloServer, gql } = require('apollo-server-lambda');


const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const HospitalAPI = require('./getHospital');
const DirectorAPI = require('./getDirector');

const server = new ApolloServer({ 
  typeDefs,
  resolvers,
  dataSources: () => ({
    hospitalAPI: new HospitalAPI(),
    directorAPI: new DirectorAPI(),
  }),
});

exports.graphqlHandler = server.createHandler();
