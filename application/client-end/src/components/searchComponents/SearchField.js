import React from "react";
const SearchField = props => (
  <input
    type="text"
    name="search"
    className="form-control"
    onChange={props.handleSearch}
    value={props.searchField}
    placeholder={props.placeholder}
  />
);
export default SearchField;
