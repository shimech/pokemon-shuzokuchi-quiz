import React from "react";
import AutoSuggestPokemon from "./AutoSuggestPokemon.js";

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numQue: this.props.numQue,
      numAns: this.props.numAns
    };

    this.validateAnswer = this.validateAnswer.bind(this);
  }

  validateAnswer() {
    const answer = document.getElementsByClassName(
      "react-autosuggest__input"
    )[0].value;
    var message;
    if (answer === this.props.pokemon.name) {
      message = "正解！！";
      this.setState(state => ({
        numAns: state.numAns + 1
      }));
    } else {
      message = "不正解...";
      message += "\n";
      message += `(答え: ${this.props.pokemon.name})`;
    }

    this.setState(state => ({
      numQue: state.numQue + 1
    }));

    alert(message);
  }

  render() {
    return (
      <div className="AnswerForm">
        <div className="AnswerFormLabel">あなたの答え</div>
        <form action={`/quiz/${this.props.nextId}`} method="get">
          <AutoSuggestPokemon />
          <button className="submit-button" onClick={this.validateAnswer}>
            解答
          </button>
          <input type="hidden" name="num_que" value={this.state.numQue}></input>
          <input type="hidden" name="num_ans" value={this.state.numAns}></input>
        </form>
      </div>
    );
  }
}

export default AnswerForm;
