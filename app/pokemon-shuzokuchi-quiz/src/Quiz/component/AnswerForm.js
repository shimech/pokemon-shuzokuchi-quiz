import React from "react";

const validateAnswer = (pokemon, nextId) => {
  const answer = document.getElementById("answer").value;
  var message;
  if (answer === pokemon.name) {
    message = "正解！！";
  } else {
    message = "不正解...";
    message += "\n";
    message += `(答え: ${pokemon.name})`;
  }

  document.location.href = `/quiz/${nextId}`;
  alert(message);
};

class AnswerForm extends React.Component {
  render() {
    return (
      <div className="AnswerForm">
        <div className="AnswerFormLabel">
          <p>あなたの答え</p>
        </div>
        <input id="answer" className="input-form" type="text"></input>
        <button
          className="submit-button"
          onClick={() => validateAnswer(this.props.pokemon, this.props.nextId)}
        >
          解答
        </button>
      </div>
    );
  }
}

export default AnswerForm;
