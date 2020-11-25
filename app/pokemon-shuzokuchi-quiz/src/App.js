import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.js";
import Quiz from "./pages/Quiz.js";
import Result from "./pages/Result.js";
import ErrorPage from "./pages/ErrorPage.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/quiz" component={Quiz} />
            <Route exact path="/result" component={Result} />
            <Route exact path="/error" component={ErrorPage} />
            <Route component={ErrorPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
