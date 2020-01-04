import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Events from "./components/pages/Events";
import About from "./components/pages/About";
import HowItWorks from "./components/pages/HowItWorks";
import NotFound from "./components/pages/NotFound";

import ContributorDetails from "./components/contributors/ContributorDetails";

import GithubState from "./context/github/GithubState";

const App = () => {
   useEffect(() => {
      // Initialize Materialize JS
      M.AutoInit();

      const slider = document.querySelector(".slider");
      M.Slider.init(slider, {
         indicators: false,
         height: 500,
         transition: 500,
         interval: 6000
      });
   });

   return (
      <GithubState>
         <div>
            <Navbar />
         </div>
         <div>
            <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/about" component={About} />
               <Route exact path="/events" component={Events} />
               <Route exact path="/howitworks" component={HowItWorks} />
               <Route
                  exact
                  path="/contributorDetails/:login"
                  component={ContributorDetails}
               />
               <Route component={NotFound} />
            </Switch>
         </div>
      </GithubState>
   );
};

export default App;
