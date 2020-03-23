import React from "react";
import "./index.css";
import { maxNumQue, getQueryString } from "../Utils.js";

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numQue: parseInt(getQueryString(window.location).num_que),
      numAns: parseInt(getQueryString(window.location).num_ans)
    };

    if (!this.isCorrectUrl()) {
      this.props.history.push("/error");
    }
  }

  isCorrectUrl() {
    return (
      this.state.numQue >= 0 &&
      this.state.numAns >= 0 &&
      this.state.numQue >= this.state.numAns &&
      this.state.numQue <= maxNumQue
    );
  }

  render() {
    return (
      <div className="Result">
        <h1 className="result-title">
          あなたの点数は... {(this.state.numAns / this.state.numQue) * 100}点！
        </h1>
        <div className="back-to-home">
          <a href="/">
            <button>ホームへ戻る</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Result;
