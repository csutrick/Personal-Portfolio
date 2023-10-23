import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
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
          <Experience />
          <Projects />
          <Contact />
        </body>
        <Footer />
    </ApolloProvider>
  );
}

export default App;
