import React from "react";
import "./index.css";
import { pokemonInformation, generateRandomId } from "../Utils.js";
import StatusRadar from "./component/StatusRadar.js";
import HintButton from "./component/HintButton.js";
import AnswerForm from "./component/AnswerForm";

const replaceEmptyString = (str, subStr) => (str === "" ? subStr : str);

const generateHintButtonTexts = (pokemon, hintType) => {
  var labelText = "ヒント: ";
  var hintText;
  if (hintType === "type") {
    labelText += "タイプ";
    hintText = `${pokemon.type1} ${pokemon.type2}`;
  } else if (hintType === "ability") {
    labelText += "とくせい";
    hintText =
      `${pokemon.ability1}` +
      "\n" +
      `${replaceEmptyString(pokemon.ability2, "-")}` +
      "\n" +
      `${replaceEmptyString(pokemon.special_ability, "-")}`;
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
    const nextId = generateRandomId();

    return (
      <div className="Quiz">
        <div className="title">
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
          </div>
          <AnswerForm pokemon={pokemon} nextId={nextId} />
        </div>
      </div>
    );
  }
}

export default Quiz;
