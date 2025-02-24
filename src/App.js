import React from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Layout from "./components/layaout/Layout";

const App = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Contact />
    </Layout>
  );
};

export default App;
