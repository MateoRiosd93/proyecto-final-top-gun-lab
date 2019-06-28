import React, { Component } from "react";

import "../styles/Search.css";

class Search extends Component {
  handleInput = event => {
    const letter = event.target.value;
    this.props.searchNames(letter);
  };

  render() {
    const { mensaje } = this.props;
    return (
      <div className="container-search">
        <label className="label-search" htmlFor="search">
          {mensaje}
        </label>
        <input
          name="search"
          className="input-search"
          onChange={this.handleInput}
          ype="text"
          placeholder="Search..."
        />
      </div>
    );
  }
}

export default Search;
