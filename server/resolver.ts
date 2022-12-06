import { Resolvers } from "graphql/lib/generated/resolvers";
import { getHelloWorld } from "commonReq/requestHelloWorld";

export const resolver: Resolvers = {
  Query: {
    helloworld: async (_parent, _args, _context, _info) => {
      return { first: "hello", second: "world" };
    },
  },
};
