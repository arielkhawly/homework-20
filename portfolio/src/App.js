import React, { Fragment } from 'react';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Projects from "./pages/Projects"

function App() {
  return (
    <Fragment>
      <Header />
      <Projects />
      <Footer />
    </Fragment>
  );
}

export default App;
