import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Contact from "./components/Contact";
import Header from './components/Header';
import Footer from './components/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
        <Header />
        <body>
          <Contact />
        </body>
        <Footer />
    </ApolloProvider>
  );
}

export default App;
