import React from "react";
import "./index.css";
import { pokemonInformation, generateRandomId } from "../Utils.js";
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
  render() {
    const id = this.props.match.params.id;
    const pokemon = pokemonInformation[id];
    const nextId = generateRandomId(pokemonInformation);

    return (
      <div className="Quiz">
        <div className="quiz-title">
          <h1>このポケモンだ〜れだ？</h1>
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
          <AnswerForm pokemon={pokemon} nextId={nextId} />
          <div className="back-to-home">
            <a href="/">
              <button>ホームへ戻る</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
