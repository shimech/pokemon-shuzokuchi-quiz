import React from "react";
import "./index.css";
import { pokemonInformation, generateRandomId } from "../Utils.js";

class Home extends React.Component {
  render() {
    const quizId = generateRandomId(pokemonInformation);

    return (
      <div className="Home">
        <div className="home-title">
          <h1>ポケモン種族値クイズ</h1>
        </div>
        <div className="start-quiz-button">
          <a href={`/quiz/${quizId}?num=0`}>
            <button>クイズを始める</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
