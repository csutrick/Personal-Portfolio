import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='bg-red-400'>
        <h1 className='text-green-700'>Test</h1>
      </div>
    </ApolloProvider>
  );
}

export default App;
