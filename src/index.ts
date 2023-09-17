import 'dotenv/config'
import Express from "express";
import { ApolloServer } from '@apollo/server';
import database from './db/index.js'
import exampleRouter from './routes/exampleRoute.js'
import bodyParser from "body-parser";
import cors from 'cors'
import { expressMiddleware } from "@apollo/server/express4";
//import  resolvers from './graphql/resolvers.js';
//import typeDefs from './graphql/schema.js';
const app = Express()
const PORT = 8080

const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];

const typeDefs = `
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;



const resolvers = {
    Query: {
        books: () => books,
    },
};


const start = async () => {
    database()
    app.use(bodyParser.json());
    app.use(cors());
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });
    await server.start();
    app.use("/graphql", expressMiddleware(server));
    app.listen(PORT, () => console.log(`\nServer is running on Port ${PORT}`));
};
start()

app.use('/',exampleRouter)