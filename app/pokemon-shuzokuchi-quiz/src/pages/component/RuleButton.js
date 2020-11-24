import React from "react";
import styled from "styled-components";
import { sp, tab, pc } from "../../media.js";

const Button = styled.button`
  background-color: ${(props) => (props.checked ? "#683bff" : "#dcdcdc")};
  color: ${(props) => (props.checked ? "#ffffff" : "#808080")};
  &:hover {
    opacity: 0.7;
  }
  ${sp`
  `}
  ${tab`
  `}
  ${pc`
  font-size: 20px;
  height: 40px;
  width: ${(props) => (props.isRegion ? "150px" : "648px")};
  margin: 8px;
  border-radius: 4px;
  `}
`;

class RuleButton extends React.Component {
  render() {
    return (
      <Button
        checked={this.props.checked}
        isRegion={this.props.region}
        onClick={this.props.onClick}
      >
        {this.props.label}
      </Button>
    );
  }
}

export default RuleButton;
