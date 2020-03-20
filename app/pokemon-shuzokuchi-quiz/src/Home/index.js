import React from "react";
import { generateRandomId } from "../Utils.js";

class Home extends React.Component {
  render() {
    const quizId = generateRandomId();

    return (
      <div className="Home">
        <h1>ポケモン種族値クイズ</h1>
        <a href={`/quiz/${quizId}`}>クイズを始める</a>
      </div>
    );
  }
}

export default Home;
