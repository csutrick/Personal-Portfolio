import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Navbar from "./components/Navbar";
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
        <Navbar />
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
