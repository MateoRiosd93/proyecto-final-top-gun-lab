import React, { Component } from 'react';
import {BASE_LOCAL_ENDPOINT} from '../constants';
import Search from './Search';
import ShowElements from './ShowElements';
import axios from 'axios';
import '../styles/Prizes.css';

class Prizes extends Component {

    state = {
        prizes: [],
        error: false,
        searchName:''
    }


    getPrizesDB = () => {
        axios.get(`${BASE_LOCAL_ENDPOINT}/prizes`)
        .then(response => {
            console.log(response.data)
            this.setState({
                prizes: response.data
             })
        })
        .catch(error => {
            this.setState({
                error: true
            })
        })
    }


    componentDidMount = () => {
        this.getPrizesDB();
    }

    searchNames = letter => {
        const searchName = letter;
        this.setState({
            searchName
        })
    }

    render() {
        const {prizes,searchName} = this.state;
        const prizesFilter = prizes.filter(prize => prize.name.toLowerCase().includes(searchName.toLowerCase()));
        return (
            <div className="container-prizes">
                <Search searchNames={this.searchNames}/>
                <div className="container-elements">
                    {
                        prizesFilter.map(({id, name, points, imgSrc }) =>
                                    <ShowElements
                                    key={id}
                                    name={name}
                                    imgSrc={imgSrc}
                                    points={points}
                                    />
                                  )
                    }
                </div>
            </div>
        )
    }
}


export default Prizes;