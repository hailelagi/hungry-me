const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

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

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

// Basic Routing
app.get('/robots.txt', (req, res) => 
    res.sendFile('robots.txt', {root: __dirname}));
    
app.get('/', (req, res) =>
    res.sendFile('index.html', {root: __dirname+'/../client/public'}));
