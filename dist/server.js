import express from "express";
import { ApolloServer } from "apollo-server-express";
import { mongoConnect } from "./db/index.js";
import { busResolvers } from "./graphql-schema/busResolvers.js";
import { typeDefs } from "./graphql-schema/typeDefs.js";
import { customerResolvers } from "./graphql-schema/customerResolvers.js";
import { serverErrorHandler } from './utils/ErrorHandling/typesErrors/serverErrorHandler.js';
const app = express();
const port = 4000;
mongoConnect();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
app.get('/', (req, res) => res.send("Si somos tercos como mulas"));
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, {
//   swaggerUrl: 'http://localhost:4000/swagger.json'
// }));
app.get('/api-docs', (req, res) => res.redirect(`https://studio.apollographql.com/sandbox?endpoint=http%3A%2F%2Flocalhost%3A4000%2Fgraphql`));
app.get('/api-docs-render', (req, res) => res.redirect(`https://studio.apollographql.com/sandbox?endpoint=https%3A%2F%2Fbusesdatabaseapi.onrender.com%2Fgraphql`));
async function start() {
    const server = new ApolloServer({
        typeDefs: typeDefs,
        resolvers: [busResolvers, customerResolvers],
        introspection: true
    });
    await server.start();
    server.applyMiddleware({ app });
    app.use(serverErrorHandler);
    app.get('*', (req, res) => res.send("404 not found"));
    app.listen({ port }, () => {
        console.log(`GraphQL Server running at http://localhost:${port}${server.graphqlPath}`);
    });
}
start();
