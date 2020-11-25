import React from "react";
import Autosuggest from "react-autosuggest";
import { pokemonInformation } from "../../utils.js";

const pokemonNames = pokemonInformation.map((item) => item.name);

const getSuggestions = (value) =>
  pokemonNames.filter((name) => name.match(value));

const getSuggestionValue = (suggestion) => suggestion;

const renderSuggestion = (suggestion) => <div>{suggestion}</div>;

class AutoSuggestPokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      suggestions: [],
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
    this.props.updateAnswer(newValue);
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  clearInputValue() {
    this.setState({
      value: "",
    });
  }

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: "ポケモンを入力",
      value,
      onChange: this.onChange,
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default AutoSuggestPokemon;
