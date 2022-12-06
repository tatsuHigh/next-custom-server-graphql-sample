import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Helloworld = {
  __typename?: 'Helloworld';
  first?: Maybe<Scalars['String']>;
  second?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  helloworld?: Maybe<Helloworld>;
};

export type GetHelloWorldQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHelloWorldQuery = { __typename?: 'Query', helloworld?: { __typename?: 'Helloworld', first?: string | null, second?: string | null } | null };


export const GetHelloWorldDocument = gql`
    query getHelloWorld {
  helloworld {
    first
    second
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getHelloWorld(variables?: GetHelloWorldQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetHelloWorldQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHelloWorldQuery>(GetHelloWorldDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getHelloWorld', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;