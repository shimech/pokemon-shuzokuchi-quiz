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
  font-size: 8px;
  height: 24px;
  width: ${(props) => (props.isRegion ? "72px" : "312px")};
  margin: 4px;
  border-radius: 4px;
  `}
  ${tab`
  font-size: 14px;
  height: 28px;
  width: ${(props) => (props.isRegion ? "100px" : "448px")};
  margin: 8px;
  border-radius: 4px;
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
