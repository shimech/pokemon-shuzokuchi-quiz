import React from "react";
import styled from "styled-components";
import { TwitterShareButton, TwitterIcon } from "react-share";
import { maxNumQue } from "../utils.js";
import { sp, tab, pc } from "../media.js";

const url = "https://pokemon-shuzokuchi-quiz.firebaseapp.com";
const hashtags = ["ポケモン種族値クイズ"];

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

const Span = styled.span`
  display: inline-block;
  color: #00acee;
  position: relative;
  ${sp`
  font-size: 12px;
  margin-left: 8px;
  top: -12px;
  `}
  ${tab`
  font-size: 18px;
  margin-left: 12px;
  top: -10px;
  `}
  ${pc`
  font-size: 28px;
  margin-left: 24px;
  top: -28px;
  `};
`;

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: (props.location.state.numCorrect / maxNumQue) * 100,
      numHint: props.location.state.numHint,
    };
  }

  render() {
    const tweetContent = `ポケモン種族値クイズで${this.state.score}点を獲得しました！！ (ヒント使用回数: ${this.state.numHint})\n`;

    return (
      <div className="Result">
        <Title>あなたの点数は... {this.state.score}点！</Title>
        <div className="share-button">
          <TwitterShareButton
            url={url}
            hashtags={hashtags}
            title={tweetContent}
          >
            <TwitterIcon round />
          </TwitterShareButton>
          <Span>結果をツイートする</Span>
        </div>
        <a href="/">
          <Button>ホームに戻る</Button>
        </a>
      </div>
    );
  }
}

export default Result;
