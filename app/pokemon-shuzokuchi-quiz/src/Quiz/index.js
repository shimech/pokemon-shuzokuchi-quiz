import React from "react";
import "./index.css";
import {
  maxNumQue,
  getQueryString,
  pokemonInformation,
  generateRandomId
} from "../Utils.js";
import StatusRadar from "./component/StatusRadar.js";
import HintButton from "./component/HintButton.js";
import AnswerForm from "./component/AnswerForm.js";

const replaceEmptyString = (str, subStr) => (str === "" ? subStr : str);

const generateHintButtonTexts = (pokemon, hintType) => {
  var labelText = "ヒント" + "\n";
  var hintText;
  if (hintType === "type") {
    labelText += "タイプ";
    hintText = `${pokemon.type[0]}` + "\n" + `${pokemon.type[1]}`;
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
    hint: hintText
  };
};
class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numQue: parseInt(getQueryString(window.location).num_que),
      numAns: parseInt(getQueryString(window.location).num_ans)
    };

    if (!this.isCorrectUrl()) {
      this.props.history.push("/error");
    } else if (this.state.numQue === maxNumQue) {
      this.props.history.push(
        `/result?num_que=${this.state.numQue}&num_ans=${this.state.numAns}`
      );
    }
  }

  isCorrectUrl() {
    return (
      this.state.numQue >= 0 &&
      this.state.numAns >= 0 &&
      this.state.numQue >= this.state.numAns &&
      this.state.numQue <= maxNumQue
    );
  }

  render() {
    const id = this.props.match.params.id;
    const pokemon = pokemonInformation[id];
    const nextId = generateRandomId(pokemonInformation);

    return (
      <div className="Quiz">
        <div className="quiz-title">
          <h1>
            このポケモンだ〜れだ？ ({this.state.numQue + 1} / {maxNumQue})
          </h1>
        </div>
        <StatusRadar id={id} />
        <div className="content">
          <div className="hint-button">
            <div className="hint-button-type">
              <HintButton textObj={generateHintButtonTexts(pokemon, "type")} />
            </div>
            <div className="hint-button-ability">
              <HintButton
                textObj={generateHintButtonTexts(pokemon, "ability")}
              />
            </div>
            <div className="hint-button-region">
              <HintButton
                textObj={generateHintButtonTexts(pokemon, "region")}
              />
            </div>
          </div>
          <AnswerForm
            pokemon={pokemon}
            nextId={nextId}
            numQue={this.state.numQue}
            numAns={this.state.numAns}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
