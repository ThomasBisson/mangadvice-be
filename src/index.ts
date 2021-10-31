import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import { DocumentNode } from 'graphql';
import { IResolvers } from '@graphql-tools/utils/Interfaces';

import gqlData from './graphql';

async function startApolloServer(
  typeDefs: string | DocumentNode | DocumentNode[] | string[] | undefined,
  resolvers:
    | IResolvers<any, any, Record<string, any>, any>
    | IResolvers<any, any, Record<string, any>, any>[]
    | undefined,
) {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve),
  );
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(gqlData.schema, gqlData.resolvers);
