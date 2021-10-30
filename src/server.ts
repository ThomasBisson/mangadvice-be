// require('dotenv');
import 'module-alias/register';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cookieParser from 'cookie-parser';
import consola from 'consola';

import auth from '@middlewares/auth';
import { MongodbConnection } from '@repositories/databases/mongodbConnection';
import { typeDefs, resolvers } from './graphql/schema';

const PORT = process.env.PORT || 4000;

// eslint-disable-next-line import/prefer-default-export
export const db: MongodbConnection | undefined = new MongodbConnection();

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  server.graphqlPath = 'graphql/api';
  await server.start();

  const app = express();
  app.use(cookieParser());
  app.use(auth);

  server.applyMiddleware({ app });

  app.listen({ port: PORT }, () => {
    consola.success(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`,
    );
  });
  return { server, app };
}

startApolloServer();
