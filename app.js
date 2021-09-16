import { ApolloServer, gql } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
    Query: {
        hello: () => 'hello world',
    },
};

async function startApolloServer(typeDefs, resolvers) {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });
    await server.start();
    server.applyMiddleware({ app });
    await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));

    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);

    /*
    app.get('/robots.txt', (req, res) =>
        res.sendFile('robots.txt', {root: __dirname + ''})
    ); */

    app.get('/', (req, res) =>
        // TODO: server react production build
        //res.sendFile('index.html', {root: __dirname+'/../client/build'})
        res.send("TODO :(")
    );
}

startApolloServer(typeDefs, resolvers);
