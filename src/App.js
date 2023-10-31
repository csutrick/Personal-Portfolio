import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Navbar from "./components/Navbar";
import About from "./components/About";
import Language from "./components/Language";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

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
          <Education />
          <Language />
          <Projects />
        </body>
        <Footer />
    </ApolloProvider>
  );
}

export default App;
