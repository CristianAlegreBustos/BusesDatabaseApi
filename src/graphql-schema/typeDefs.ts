/***escribir la definición de los tipos y consultas que tu API GraphQL va a soportar.
 * Esto es hecho en el lenguaje de esquema de GraphQL, y permite describir los datos
 *  y la estructura de tus consultas. ***/
import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Customer {
    _id: ID
    name: String
    email: String
    phone: String
    seat: Int
  }

  type Bus {
    _id: ID!
    Total_Seat: Int!
    Empty_Seat: Int!
    Full_Seat: Int!
    Patent: String!
  }

  type Query {
    getAllcustomers: [Customer]
    getCustomerbyId(id: ID!): Customer
    getAllBuses: [Bus]!
    getBusesbyId(id: ID!): Bus
  }

  type Mutation {
    createCustomer(
      name: String
      email: String
      phone: String
      seat: Int
    ): Customer!
    updateCustomer(
      id: ID!
      name: String
      email: String
      phone: String
      seat: Int
    ): Customer!
    deleteCustomer(id: ID!): String!
    createBus(
      Total_Seat: Int
      Empty_Seat: Int
      Full_Seat: Int
      Patent: String
    ): Bus!
    updateBus(
      id: ID!
      Total_Seat: Int
      Empty_Seat: Int
      Full_Seat: Int
      Patent: String
    ): Bus!
    deleteBus(id: ID!): String!
  }
`;
