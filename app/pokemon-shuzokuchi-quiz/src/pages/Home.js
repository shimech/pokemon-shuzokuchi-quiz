import React from "react";
import styled from "styled-components";
import { sp, tab, pc } from "../media.js";
import { randomPokemonList } from "../utils.js";
import RuleButton from "./component/RuleButton";

const regionName = {
  kanto: "カントー",
  johto: "ジョウト",
  hoenn: "ホウエン",
  sinnoh: "シンオウ",
  unova: "イッシュ",
  kalos: "カロス",
  alola: "アローラ",
  galar: "ガラル",
};

const regionList = Object.keys(regionName);

const Title = styled.h1`
  color: #683bff;
  ${sp`
    font-size: 7vw;
  `}
  ${tab`
    font-size: 7vw;
  `}
  ${pc`
    margin: 60px 0;
    font-size: min(6vw, 100px);
  `}
`;

const RuleTitle = styled.p`
  color: #808080;
  margin: 0 0 12px 0;
  ${sp`
    font-size: 16px;
  `}
  ${tab`
  `}
  ${pc`
    font-size: 32px;
  `}
`;

const RuleList = styled.div`
  ${sp`
  `}
  ${tab`
  `}
  ${pc`
  `};
`;

const Button = styled.button`
  background-color: #683bff;
  color: #ffffff;
  border: solid #683bff 4px;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: #ffffff;
    color: #683bff;
  }
  ${sp`
    margin-top: 16px;
    height: 24px;
    width: 200px;
    font-size: 8px;
    border-radius: 12px;
  `}
  ${tab`
    height: 70px;
    width: 450px;
    font-size: 24px;
    border-radius: 35px;
  `}
  ${pc`
    margin-top: 8vh;
    height: 64px;
    width: 648px;
    font-size: 32px;
    border-radius: 32px;
  `}
`;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kanto: true,
      johto: true,
      hoenn: true,
      sinnoh: true,
      unova: true,
      kalos: true,
      alola: true,
      galar: true,
      isOnlyFinal: true,
      isRemoveSameStatus: true,
    };
  }

  setRuleState(key) {
    const newState = {};
    newState[key] = !this.state[key];
    this.setState(newState, () => {
      if (this.isNoRegionChecked()) this.allRegionChecked();
    });
  }

  isNoRegionChecked() {
    return regionList
      .map((region) => this.state[region])
      .every((item) => !item);
  }

  allRegionChecked() {
    const newState = {};
    regionList.map((region) => (newState[region] = true));
    this.setState(newState);
  }

  startQuiz() {
    const regionListSelected = regionList
      .map((region) => (this.state[region] ? regionName[region] : null))
      .filter((item) => item);
    const pokemonList = randomPokemonList(
      regionListSelected,
      this.state.isOnlyFinal,
      this.state.isRemoveSameStatus
    );
    console.log(pokemonList);
  }

  render() {
    return (
      <div className="Home">
        <Title>ポケモン種族値クイズ</Title>
        <RuleTitle>出題範囲</RuleTitle>
        <RuleList>
          <RuleButton
            label="カントー"
            checked={this.state.kanto}
            onClick={() => this.setRuleState("kanto")}
            region
          ></RuleButton>
          <RuleButton
            label="ジョウト"
            checked={this.state.johto}
            onClick={() => this.setRuleState("johto")}
            region
          ></RuleButton>
          <RuleButton
            label="ホウエン"
            checked={this.state.hoenn}
            onClick={() => this.setRuleState("hoenn")}
            region
          ></RuleButton>
          <RuleButton
            label="シンオウ"
            checked={this.state.sinnoh}
            onClick={() => this.setRuleState("sinnoh")}
            region
          ></RuleButton>
          <br></br>
          <RuleButton
            label="イッシュ"
            checked={this.state.unova}
            onClick={() => this.setRuleState("unova")}
            region
          ></RuleButton>
          <RuleButton
            label="カロス"
            checked={this.state.kalos}
            onClick={() => this.setRuleState("kalos")}
            region
          ></RuleButton>
          <RuleButton
            label="アローラ"
            checked={this.state.alola}
            onClick={() => this.setRuleState("alola")}
            region
          ></RuleButton>
          <RuleButton
            label="ガラル"
            checked={this.state.galar}
            onClick={() => this.setRuleState("galar")}
            region
          ></RuleButton>
          <br></br>
          <RuleButton
            label="同一種族値のポケモンを除く"
            checked={this.state.isRemoveSameStatus}
            onClick={() => this.setRuleState("isRemoveSameStatus")}
          ></RuleButton>
          <br></br>
          <RuleButton
            label="進化前のポケモンを含める"
            checked={!this.state.isOnlyFinal}
            onClick={() => this.setRuleState("isOnlyFinal")}
          ></RuleButton>
        </RuleList>
        <Button onClick={() => this.startQuiz()}>クイズを始める</Button>
      </div>
    );
  }
}

export default Home;
