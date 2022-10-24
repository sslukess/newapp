import { ApolloClient, InMemoryCache, ApolloProvider, gql, HttpLink, ApolloLink, from } from '@apollo/client';


const spaceID = "izwehaslrkue";
const authToken = "_5yaLQCOpjlesv7jThXfhLw1rqybHx_ekNyaJjjgDs8";
const contentfulEndPoint = `https://graphql.contentful.com/content/v1/spaces/${spaceID}`;

const httpLink = new HttpLink({ uri: contentfulEndPoint });

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })

  return forward(operation)
});


export const client = new ApolloClient({
  link: from([authLink, httpLink]),
  cache: new InMemoryCache(),
});