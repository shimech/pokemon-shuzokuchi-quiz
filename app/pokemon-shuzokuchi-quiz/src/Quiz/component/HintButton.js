import React from "react";

const buttonColorObj = {
  before: "rgba(104, 59, 255, 0.7)",
  after: "rgb(200, 200, 200)"
};

class HintButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.textObj.label,
      color: buttonColorObj.before
    };
  }

  render() {
    return (
      <button
        className="HintButton"
        style={{ background: this.state.color }}
        onClick={() =>
          this.setState({
            text: this.props.textObj.hint,
            color: buttonColorObj.after
          })
        }
      >
        {this.state.text.split("\n").map(str => (
          <p>{str}</p>
        ))}
      </button>
    );
  }
}

export default HintButton;
