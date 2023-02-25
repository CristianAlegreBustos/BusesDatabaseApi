import { ApolloClient, InMemoryCache,gql } from '@apollo/client';

export const GET_ALL_CUSTOMERS = gql`
  query {
    getAllcustomers {
      _id
      name
      email
      phone
      seat
    }
  }
`;
export const REGISTER_USER = gql`
  mutation RegisterUser($input: UserInput!) {
    registerUser(input: $input) {
      _id
      username
      email
    }
  }
`;

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // reemplaza con la URL de tu servidor GraphQL
  cache: new InMemoryCache()
});

export default client;
