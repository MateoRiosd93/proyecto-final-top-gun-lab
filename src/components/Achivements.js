import React, { Component } from 'react';
import { BASE_LOCAL_ENDPOINT } from '../constants';
import Search from './Search';
import ShowElements from './ShowElements';
import axios from 'axios';

export default class Achivements extends Component {
    state = {
        achievements:[],
        isLoad: false,
        searchName:''
    }

    getAchievementsBD = () => {
        axios.get(`${BASE_LOCAL_ENDPOINT}/achievements`)
        .then(response => {
            this.setState({
                achievements : response.data
            })
        })
        .catch(error => {
            this.setState({
                isLoad : true
            })
        });
    }

    componentDidMount () {
        this.getAchievementsBD();
    }

    searchNames = letter => {
        const searchName = letter;
        this.setState({
            searchName
        })
    }

    render() {
        const {achievements,searchName} = this.state;
        const achievementsFilter = achievements.filter(achievement => achievement.name.toLowerCase().includes(searchName.toLowerCase()));

        return (
            <div className="container-employees">
                <Search searchNames={this.searchNames}/>
                <div className="container-elements">
                {
                    achievementsFilter.map(({id,name,points}) =>
                        <ShowElements
                            key={id}
                            name={name}
                            points={points}/>
                     )
                }
                </div>
            </div>
        )
    }
}
