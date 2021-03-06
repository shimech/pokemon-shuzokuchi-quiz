import React from "react";
import AutoSuggestPokemon from "./AutoSuggestPokemon.js";

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.childRef = React.createRef();
    this.state = {
      answer: "",
    };

    this.validateAnswer = this.validateAnswer.bind(this);
  }

  updateAnswer(value) {
    this.setState({
      answer: value,
    });
  }

  validateAnswer() {
    let message;
    let isCorrect;
    if (this.state.answer === this.props.pokemon.name) {
      message = "正解！！";
      isCorrect = true;
    } else {
      message = "不正解...";
      message += "\n";
      message += `(答え: ${this.props.pokemon.name})`;
      isCorrect = false;
    }

    alert(message);

    this.clearInputValue();

    if (isCorrect) {
      this.props.incrementNumCorrect(this.props.nextQuiz);
    } else {
      this.props.nextQuiz();
    }
  }

  clearInputValue() {
    this.setState({
      answer: "",
    });
    this.childRef.current.clearInputValue();
  }

  render() {
    return (
      <div className="AnswerForm">
        <div className="AnswerFormLabel">あなたの答え</div>
        <AutoSuggestPokemon
          updateAnswer={(value) => this.updateAnswer(value)}
          ref={this.childRef}
        />
        <button className="submit-button" onClick={this.validateAnswer}>
          解答
        </button>
      </div>
    );
  }
}

export default AnswerForm;
