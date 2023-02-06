import express from "express";
import { ApolloServer } from "apollo-server-express";
import { InMemoryLRUCache } from "@apollo/utils.keyvaluecache";
import { mongoConnect } from "./db/index.js";
import { busResolvers } from "./graphql-schema/busResolvers.js";
import { typeDefs } from "./graphql-schema/typeDefs.js";
import { customerResolvers } from "./graphql-schema/customerResolvers.js";
const app = express();
const port = 4000;
const server = new ApolloServer({
    typeDefs,
    resolvers: [busResolvers, customerResolvers],
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
