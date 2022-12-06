import express, { Request, Response } from "express";
import next from "next";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import http from "http";
import { resolver } from "./resolver";
import fs from "fs";
import { makeExecutableSchema } from "@graphql-tools/schema";

const dev = process.env.NODE_ENV === "development";
const port = 4000;
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
  try {
    await app.prepare();
    const server = express();
    const httpServer = http.createServer(server);

    const typeDefs = fs.readFileSync("graphql/schema.graphql", {
      encoding: "utf8",
    });
    const apolloServer = new ApolloServer({
      schema: makeExecutableSchema({ resolvers: resolver, typeDefs }),
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });
    await apolloServer.start();

    server.use("/graphql", express.json(), expressMiddleware(apolloServer));
    server.get("*", (req: Request, res: Response) => {
      return handle(req, res);
    });
    server.listen(port, () => {
      console.log(`${port}で起動中`);
    });
  } catch (e) {
    console.error(e);
  }
})();
