
require("dotenv").config();
const { ApolloServer } = require("apollo-server-express");
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';
const express = require("express");
const { mongoConnect } = require("./db/index");
const typeDefs = require("./graphql-schema/typeDefs");
const busResolvers = require("./graphql-schema/busResolvers");
const customerResolvers = require("./graphql-schema/customerResolvers");
const { GraphQLInt } = require("apollo-server");

const app = express();
const port = 4000;

const server = new ApolloServer({
  typeDefs,
  busResolvers,
  customerResolvers,
  cache: new InMemoryLRUCache(),
});

mongoConnect(() => {
server.start().then(() => {
  server.applyMiddleware({ app });

  app.listen({ port }, () => {
    console.log(`GraphQL Server running at http://localhost:${port}${server.graphqlPath}`);
  });
});
});
