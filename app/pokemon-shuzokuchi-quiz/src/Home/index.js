import React from "react";
import "./index.css";
import { pokemonInformation, generateRandomId } from "../Utils.js";

const startQuiz = quizId => (document.location.href = `/quiz/${quizId}?num=0`);
class Home extends React.Component {
  render() {
    const quizId = generateRandomId(pokemonInformation);

    return (
      <div className="Home">
        <div className="home-title">
          <h1>ポケモン種族値クイズ</h1>
        </div>
        <div className="start-quiz-button">
          <button onClick={() => startQuiz(quizId)}>クイズを始める</button>
        </div>
      </div>
    );
  }
}

export default Home;
