import React, { Component } from 'react';
import Body from "./Components/Body.js";
import Footer from "./Components/Footer/Footer.js";
import Navbar from "./Components/Nav/Navbar.js";
import './App.css';
import Contact from "./pages/contact.js";
import ButtonPage from "./pages/buttonPage";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar />
            <div className="container">
              <Switch>
                <Route path="/" exact component={Body} />
                <Route path="/contact" exact component={Contact}/>
                <Route path="/buttonPage" exact component={ButtonPage}/>
              </Switch>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
