import React from "react";
import { pokemonInformation, generateRandomId } from "../Utils.js";

class Quiz extends React.Component {
  render() {
    const id = this.props.match.params.id;
    const nextId = generateRandomId();

    return (
      <div className="Quiz">
        <h1>クイズ {pokemonInformation[id].name}</h1>
        <a href={`/quiz/${nextId}`}>次へ</a>
      </div>
    );
  }
}

export default Quiz;
