import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Photo from "./components/Photo";
import "./App.css";

function App() {
  return (
    <div className="App ">
      <Router>
        <div className=" flex justify-between items-center bg-blue">
          <Header />
          <Nav />
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/photo/:id">
            <Photo />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
