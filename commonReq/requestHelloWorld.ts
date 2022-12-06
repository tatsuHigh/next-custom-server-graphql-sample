import { getSdk, GetHelloWorldQuery } from "../graphql/lib/generated/client";
import { GraphQLClient } from "graphql-request";

export const getHelloWorld = async (
  client: GraphQLClient
): Promise<GetHelloWorldQuery> => {
  const sdk = getSdk(client);
  const res = await sdk.getHelloWorld();
  return res;
};
