import React from "react";
import { maxNumQue } from "../utils.js";
import StatusRadar from "./component/StatusRadar.js";
import HintButton from "./component/HintButton.js";
import AnswerForm from "./component/AnswerForm.js";

const replaceEmptyString = (str, subStr) => (str === "" ? subStr : str);

const generateHintButtonText = (pokemon, hintType) => {
  let labelText = "ヒント\n";
  let hintText;
  if (hintType === "type") {
    labelText += "タイプ";
    hintText = `${pokemon.type[0]}\n${pokemon.type[1]}`;
  } else if (hintType === "ability") {
    labelText += "とくせい";
    hintText =
      `${pokemon.ability.normal[0]}` +
      "\n" +
      `${replaceEmptyString(pokemon.ability.normal[1], "-")}` +
      "\n" +
      `${replaceEmptyString(pokemon.ability.special, "-")}`;
  } else if (hintType === "region") {
    labelText += "地方";
    hintText = pokemon.region;
  }

  return {
    label: labelText,
    hint: hintText,
  };
};

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    const numQuestion = props.location.state.numQuestion;

    this.state = {
      numQuestion: numQuestion,
      numCorrect: 0,
      pokemonList: props.location.state.pokemonList,
      pokemon: props.location.state.pokemonList[numQuestion],
      hintType: false,
      hintAbility: false,
      hintRegion: false,
    };
  }

  openHint(hintKind) {
    const newState = this.state;
    newState[hintKind] = true;
    this.setState(newState);
  }

  incrementNumCorrect(callback) {
    this.setState(
      (state, props) => ({
        numCorrect: state.numCorrect + 1,
      }),
      () => callback()
    );
  }

  nextQuiz() {
    if (this.state.numQuestion < maxNumQue - 1) {
      const numQuestion = this.state.numQuestion + 1;
      const newState = {
        numQuestion: numQuestion,
        pokemon: this.state.pokemonList[numQuestion],
        hintType: false,
        hintAbility: false,
        hintRegion: false,
      };
      this.setState(newState);
    } else {
      const numCorrect = this.state.numCorrect;
      this.props.history.push({
        pathname: "/result",
        state: { numCorrect },
      });
    }
  }

  render() {
    return (
      <div className="Quiz">
        <div className="quiz-title">
          <h1>
            このポケモンだ〜れだ？ ({this.state.numQuestion + 1} / {maxNumQue})
          </h1>
        </div>
        <StatusRadar pokemon={this.state.pokemon} />
        <div className="content">
          <div className="hint-button">
            <div className="hint-button-type">
              <HintButton
                text={generateHintButtonText(this.state.pokemon, "type")}
                opened={this.state.hintType}
                openHint={() => this.openHint("hintType")}
              />
            </div>
            <div className="hint-button-ability">
              <HintButton
                text={generateHintButtonText(this.state.pokemon, "ability")}
                opened={this.state.hintAbility}
                openHint={() => this.openHint("hintAbility")}
              />
            </div>
            <div className="hint-button-region">
              <HintButton
                text={generateHintButtonText(this.state.pokemon, "region")}
                opened={this.state.hintRegion}
                openHint={() => this.openHint("hintRegion")}
              />
            </div>
          </div>
          <AnswerForm
            pokemon={this.state.pokemon}
            incrementNumCorrect={(callback) =>
              this.incrementNumCorrect(callback)
            }
            nextQuiz={() => this.nextQuiz()}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
