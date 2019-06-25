import React, { Component } from 'react';

import '../styles/Search.css';

export default class Search extends Component {

    handleInput = event => {
        const letter = event.target.value;
        this.props.searchNames(letter);
    }

    render() {
        return (
            <div className="container-search">
                <label
                    className="label-search"
                    htmlFor="search"> Do you want to search for an employee?
                </label>
                <input
                    name="search"
                    className="input-search"
                    onChange={this.handleInput}
                    ype="text"
                    placeholder="Search"/>
            </div>
        )
    }
}
