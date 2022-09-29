const {gql} = require('apollo-server-lambda');

const typeDefs = gql`
    type Director {
        id: ID!
        nombre: String!
        apellido: String!
    }
    
    type Hospital {
        id: ID!
        ubicacion: String!
        nombre: String!
        director_id: Int!
    }

    type Query {
        getHospital(id: ID!): Hospital
        listHospital: HospitalConnection
        getDirector(id: ID!): Director
    }

    type HospitalConnection {
        items: [Hospital]!
    }


`;

module.exports = typeDefs;


/*     type HospitalConnection {
    items: [Hospital]!
} */

//listHospital(): HospitalConnection
