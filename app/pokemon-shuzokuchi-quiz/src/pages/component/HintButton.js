import React from "react";

class HintButton extends React.Component {
  text() {
    const text = this.props.opened
      ? this.props.text.hint
      : this.props.text.label;
    const textList = text.split("\n");
    return textList.map((text, i) => <p key={i}>{text}</p>);
  }

  backgroundColor() {
    return this.props.opened ? "#dcdcdc" : "#683bff";
  }

  textColor() {
    return this.props.opened ? "#000000" : "#ffffff";
  }

  onClick() {
    this.props.openHint();
    this.props.incrementNumHint();
  }

  render() {
    const textDom = this.text();

    return (
      <button
        className="HintButton"
        style={{
          backgroundColor: this.backgroundColor(),
          color: this.textColor(),
        }}
        disabled={this.props.opened}
        onClick={() => this.onClick()}
      >
        {textDom}
      </button>
    );
  }
}

export default HintButton;
