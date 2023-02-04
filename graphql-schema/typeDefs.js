"use strict";
/***escribir la definición de los tipos y consultas que tu API GraphQL va a soportar.
   * Esto es hecho en el lenguaje de esquema de GraphQL, y permite describir los datos
   *  y la estructura de tus consultas. ***/
const { gql } = require("apollo-server");
module.exports = gql `
  type Customer {
    _id: ID!
    name: String!
    email: String!
    phone: String!
    seat: Int!
    busId: ID!
  }

  type Bus {
    _id: ID!
    Total_Seat: Int!
    Empty_Seat: Int!
    Full_Seat: Int!
    Patent: String!
  }

  input CustomersInput {
    name: String!
    email: String!
    phone: String!
    seat: Int!
    busId: ID!
  }

  input BusesInput {
    Total_Seat: Int!
    Empty_Seat: Int!
    Full_Seat: Int!
    Patent: String!
  }

  type Query {
    customers: [Customer]!
    customer(id: ID!): Customer
    buses: [Bus]!
    bus(id: ID!): Bus
  }

  type Mutation {
    createCustomer(input: CustomersInput!): Customer!
    updateCustomer(id: ID!, input: CustomersInput!): Customer!
    deleteCustomer(id: ID!): Customer!

    createBus(input: BusesInput!): Bus!
    updateBus(id: ID!, input: BusesInput!): Bus!
    deleteBus(id: ID!): Bus!
  }
`;
