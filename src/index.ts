import { GraphQLClient } from 'graphql-request';
import { getSdk } from './sdk';

async function main() {
  const client = new GraphQLClient('https://countries.trevorblades.com/');
  const sdk = getSdk(client);
  const { continents } = await sdk.continents();
  
  console.log(`GraphQL data:`, continents);
}

main().catch(e => {
  console.error(e);
});
