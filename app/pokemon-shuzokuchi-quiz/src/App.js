import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Quiz from "./Quiz";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/quiz/:id" component={Quiz} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
