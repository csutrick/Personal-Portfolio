import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Header from './components/Header';
import About from "./components/About";
import Bootcamp from "./components/Bootcamp";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
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
          <About />
          <Bootcamp />
          <Projects />
          <Contact />
        </body>
        <Footer />
    </ApolloProvider>
  );
}

export default App;
