import React, { Component } from 'react';
import Body from "./Components/Body.js";
import Footer from "./Components/Footer/Footer.js";
import Navbar from "./Components/Nav/Navbar.js";
import Register from "./Components/Register/Register.js";
import Login from "./Components/Login/Login.js";
import './App.css';
import Contact from "./pages/contact.js";
import ButtonPage from "./pages/buttonPage";
import Packages from "./pages/packageOverview";
import Clean from "./pages/package1Details";
import Delux from "./pages/package2Details";
import Ultimate from "./pages/package3Details";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Service from "./pages/scheduleService.js";
import backgroundMovie from "./background-movie.mp4";

class App extends Component {
  render() {
   return (
     <div className="App">
       <BrowserRouter>
         <div>
           <Navbar />
           <div className="container">
             <video playsInline autoPlay muted loop id="bgvid">
               <source src={backgroundMovie} type="video/mp4">< /source>
           </video>
             <Switch>
               <Route path="/" exact component={Body} />
               <Route path="/packageOverview" exact component={Packages} />
               <Route path="/package1Details" exact component={Clean} />
               <Route path="/package2Details" exact component={Delux} />
               <Route path="/package3Details" exact component={Ultimate} />
               <Route path="/contact" exact component={Contact}/>
               <Route path="/buttonPage" exact component={ButtonPage}/>
               <Route path="/login" exact component={Login} />
               <Route path="/register" exact component={Register} />
               <Route path="/service" exact component={Service}/>

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
