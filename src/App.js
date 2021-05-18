import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import AOS from "aos";

import Landing from "./pages/Landing";
import About from "./pages/About";
import Work from "./pages/Work";

import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cublc",
    });
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
      </Switch>
    </>
  );
}

export default App;
