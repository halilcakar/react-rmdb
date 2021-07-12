import React from "react";

// Routing
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

// Styles
import { GlobalStyle } from "./GlobalStyle";

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/:movieId">
        <Movie />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
