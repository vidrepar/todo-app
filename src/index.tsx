import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  ApolloClient,
  ApolloLink, ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
  ServerError,
  ServerParseError,
  split
} from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { onError } from '@apollo/link-error';
import { GraphQLError } from 'graphql';

const uri = 'https://guided-gelding-12.hasura.app/v1/graphql';
const ws = 'ws://guided-gelding-12.hasura.app/v1/graphql';


export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(async (error) => {
      await handleGraphQLError(error);
    });
  }

  if (networkError) {
    handleNetworkError(networkError);
  }
});

export const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('token');

  operation.setContext(({ headers }: { headers: any }) => ({
    headers: {
      authorization: token ? `Bearer ${token}` : '',
      ...headers,
    }})
  );
  return forward(operation);
});

async function handleGraphQLError(error: GraphQLError) {
  // let errorMessage: string;

  switch (true) {
    default:
      // errorMessage = JSON.stringify(error);
      break;
  }
}

function handleNetworkError(error: Error | ServerError | ServerParseError) {
}

const httpLink = new HttpLink({ uri });

// @see https://github.com/Akryum/vue-cli-plugin-apollo/blob/a52696165732381787dafe6b8e694d4b30af4826/graphql-client/src/index.js#L187-L205
// @see https://github.com/apollographql/apollo-client/issues/3967
// TODO: This `token` solution is not good enough
const token = localStorage.getItem('token');
const wsLink = new WebSocketLink({
  uri: ws,
  options: {
    reconnect: true,
    timeout: 30000,
    connectionParams: {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  }
});

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

/**
 * @important The order of links is important
 * They may not trigger otherwise
 */
export const apolloClient = new ApolloClient({
  link: from([
    errorLink,
    authLink,
    splitLink,
  ]),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
