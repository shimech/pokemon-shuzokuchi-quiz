import React from "react";

const buttonColorObj = {
  before: "rgb(104, 59, 255)",
  after: "rgb(200, 200, 200)"
};

const textColorObj = {
  before: "rgb(255, 255, 255)",
  after: "rgb(0, 0, 0)"
};

class HintButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.textObj.label,
      backgroundColor: buttonColorObj.before,
      textColor: textColorObj.before,
      isHover: false,
      isDisabled: false
    };

    this.onClickEvent = this.onClickEvent.bind(this);
    this.onMouseEvent = this.onMouseEvent.bind(this);
  }

  onClickEvent() {
    this.setState({
      text: this.props.textObj.hint,
      backgroundColor: buttonColorObj.after,
      textColor: textColorObj.after,
      isDisabled: true
    });
  }

  onMouseEvent() {
    this.setState(
      {
        isHover: !this.state.isHover
      },
      () => {
        if (!this.state.isDisabled) {
          this.setState({
            backgroundColor: this.state.isHover
              ? "rgba(104, 59, 255, 0.8)"
              : buttonColorObj.before
          });
        }
      }
    );
  }

  render() {
    return (
      <button
        className="HintButton"
        style={{
          backgroundColor: this.state.backgroundColor,
          color: this.state.textColor
        }}
        onClick={this.onClickEvent}
        onMouseEnter={this.onMouseEvent}
        onMouseLeave={this.onMouseEvent}
        disabled={this.state.isDisabled}
      >
        {this.state.text.split("\n").map(str => (
          <p>{str}</p>
        ))}
      </button>
    );
  }
}

export default HintButton;
