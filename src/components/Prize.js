import React, { Component } from 'react'
import { BASE_LOCAL_ENDPOINT } from '../constants';
import axios from 'axios';

export default class Prize extends Component {
    constructor (props) {
        super(props);
        this.state = {
            prize : {
                name : '',
                points: '',
                imgSrc: '',
                description: '',
            },
            error : ''
        }
    }

    getPrizeID = () => {
        const {match:{params:{id}}} = this.props;
        axios.get(`${BASE_LOCAL_ENDPOINT}/prizes/${id}`)
            .then(response => {
                console.log(response);
                this.setState({
                    prize : response.data,
                    error : ''
                })
            })
            .catch(error => {
                this.setState({
                    error : error.message
                })
            })
    }

    componentDidMount = () => {
        this.getPrizeID();
    }

    render() {
        const {name,points,imgSrc,description} = this.state.prize;
        return (
            <div className="container-prize">
                <p> desde el prize : {name}</p>
                <img src={imgSrc} alt=""/>
                <p>description: {description}</p>
                <span>esto son los puntos: {points}</span>
            </div>
        )
    }
}
