import React, { Component } from 'react';
import {BASE_LOCAL_ENDPOINT} from '../constants';
import axios from 'axios';

class Prizes extends Component {

    state = {
        pirzes: [],
        error: false
    }


    getPrizesDB = () => {
        axios.get(`${BASE_LOCAL_ENDPOINT}/prizes`)
        .then(response => {
            console.log(response)
            
            // this.setState({
            //     pirzes: response.data
            // })
        })
        .catch(error => {
            this.setState({
                error: true
            })
        })
    }


    componentDidMount = () => {

    }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}


export default Prizes;