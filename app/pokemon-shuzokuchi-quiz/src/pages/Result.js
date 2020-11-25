import React from "react";
import { maxNumQue } from "../utils.js";

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numCorrect: props.location.state.numCorrect,
    };
  }

  render() {
    return (
      <div className="Result">
        <h1 className="result-title">
          あなたの点数は... {(this.state.numCorrect / maxNumQue) * 100}点！
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
