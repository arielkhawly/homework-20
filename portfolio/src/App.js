import React from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Projects from "./pages/Projects"
import About from './pages/About'
import Home from './pages/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route absolute path="/">
          <Header />
          <Home />
          <Footer />
        </Route>
        <Route absolute path="/About">
          <Header />
          <About />
          <Footer />
         </Route>
        <Route absolute path="/Projects">
          <Header />
          <Projects />
          <Footer />
         </Route>
      </Switch>
  </Router>
  );
}

export default App;
