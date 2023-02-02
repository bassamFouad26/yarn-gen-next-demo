import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: `https://caisy.io/api/v3/e/${process.env.CAISY_ID}/graphql`,
  headers: {
    "x-caisy-apikey": process.env.CAISY_API_KEY,
  },
  cache: new InMemoryCache(),
});
