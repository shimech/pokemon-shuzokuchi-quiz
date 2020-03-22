import React from "react";
import AutoSuggestPokemon from "./AutoSuggestPokemon.js";

const validateAnswer = pokemon => {
  const answer = document.getElementsByClassName("react-autosuggest__input")[0]
    .value;
  var message;
  if (answer === pokemon.name) {
    message = "正解！！";
  } else {
    message = "不正解...";
    message += "\n";
    message += `(答え: ${pokemon.name})`;
  }

  alert(message);
};

class AnswerForm extends React.Component {
  render() {
    return (
      <div className="AnswerForm">
        <div className="AnswerFormLabel">あなたの答え</div>
        <form action={`/quiz/${this.props.nextId}`} method="get">
          <AutoSuggestPokemon />
          <button
            className="submit-button"
            onClick={() => validateAnswer(this.props.pokemon)}
          >
            解答
          </button>
        </form>
      </div>
    );
  }
}

export default AnswerForm;
