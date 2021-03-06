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
  margin: 3vh;
  `}
  ${tab`
  font-size: 7vw;
  margin: 3vh;
  `}
  ${pc`
  margin: 60px;
  font-size: min(6vw, 100px);
  `}
`;

const RuleTitle = styled.p`
  color: #808080;
  ${sp`
  font-size: 16px;
  margin: 0 0 8px 0;
  `}
  ${tab`
  font-size: 24px;
  margin: 0 0 8px 0;
  `}
  ${pc`
  font-size: 32px;
  margin: 0 0 12px 0;
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
  border: solid #683bff 2px;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: #ffffff;
    color: #683bff;
  }
  ${sp`
  margin-top: 28px;
  height: 32px;
  width: 312px;
  font-size: 16px;
  border-radius: 16px;
  `}
  ${tab`
  margin-top: 36px;
  height: 48px;
  width: 448px;
  font-size: 24px;
  border-radius: 24px;
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
      isMegaEvolution: false,
      isSameStatus: false,
      isBeforeEvolution: false,
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
      this.state.isMegaEvolution,
      this.state.isSameStatus,
      this.state.isBeforeEvolution
    );
    console.log(pokemonList);
    this.props.history.push({
      pathname: "/quiz",
      state: { pokemonList: pokemonList, numQuestion: 0 },
    });
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
            label="メガシンカ・ゲンシカイキを含む"
            checked={this.state.isMegaEvolution}
            onClick={() => this.setRuleState("isMegaEvolution")}
          ></RuleButton>
          <br></br>
          <RuleButton
            label="同一種族値のポケモンを含む"
            checked={this.state.isSameStatus}
            onClick={() => this.setRuleState("isSameStatus")}
          ></RuleButton>
          <br></br>
          <RuleButton
            label="進化前のポケモンを含む"
            checked={this.state.isBeforeEvolution}
            onClick={() => this.setRuleState("isBeforeEvolution")}
          ></RuleButton>
        </RuleList>
        <Button onClick={() => this.startQuiz()}>スタート！</Button>
      </div>
    );
  }
}

export default Home;
