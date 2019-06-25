import React, { Component } from 'react'

export default class Search extends Component {

    handleInput = event => {
        const letter = event.target.value;
        this.props.searchNames(letter);
    }

    render() {
        return (
            <div className="container-search">
                <form action="">
                    <div className="container-info">
                        <label htmlFor=""></label>
                        <input onChange={this.handleInput} type="text" placeholder="Search"/>
                    </div>
                </form>
            </div>
        )
    }
}
