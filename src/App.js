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
        <Route absloute path ='/' exact component={Home}>
          <Header />
          <Home />
          <Footer />
        </Route>
        <Route absolute path='/about' exact component={About}>
          <Header />
          <About />
          <Footer />
         </Route>
        <Route absolute path="/Projects" exact component={Projects}>
          <Header />
          <Projects />
          <Footer />
         </Route>
      </Switch>
  </Router>
  );
}

export default App;
