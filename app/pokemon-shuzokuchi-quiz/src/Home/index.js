import React from "react";
import "./index.css";
import { generateRandomId } from "../Utils.js";

const startQuiz = quizId => (document.location.href = `/quiz/${quizId}`);
class Home extends React.Component {
  render() {
    const quizId = generateRandomId();

    return (
      <div className="Home">
        <div className="title">
          <h1>ポケモン種族値クイズ</h1>
        </div>
        <div className="start-quiz-button">
          <button variant="contained" onClick={() => startQuiz(quizId)}>
            クイズを始める
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
