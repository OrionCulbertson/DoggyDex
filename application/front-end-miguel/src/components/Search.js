import React from "react";
import ReactDOM from "react-dom";
import SearchField from "./searchComponents/SearchField";
import SearchButton from "./searchComponents/SearchButton";
import "./searchComponents/SearchBoxStyles.css";

class SeachBar extends React.Component {
  state = {
    searchField: "Search",
    placeholder: "Enter search keyword...",
    buttonText: "Go!"
  };

  handleSearch = e => {
    this.setState({
      searchField: e.target.value
    });
  };



  render() {
    let { searchField, buttonText, placeholder } = this.state;
    return (
      <div className="SearchBox">
        <SearchField
          searchField={searchField}
          handleSearch={this.handleSearch}
          placeholder={placeholder}
        />
        <SearchButton buttonText={buttonText} />
      </div>
    );
  }
}

export default SeachBar;