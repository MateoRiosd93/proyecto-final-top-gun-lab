import React, { Component } from 'react'
import { BASE_LOCAL_ENDPOINT } from '../constants';
import axios from 'axios';

export default class Employee extends Component {
    constructor (props) {
        super(props);
        this.state = {
            employee : {
                name : '',
                job : '',
                area : '',
                imgSrc : '',
                points : ''
            },
            error : ''
        }
    }

    getEmployeeID = () => {
        const {match:{params:{id}}} = this.props;
        axios.get(`${BASE_LOCAL_ENDPOINT}/employees/${id}`)
            .then(response => {
                console.log(response);
                this.setState({
                    employee : response.data,
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
        this.getEmployeeID();
    }

    render() {
        console.log(this.state);
        const {name,job,area,imgSrc,points} = this.state.employee;
        return (
            <div className="container-employee">
                <p> desde el empleado : {name}</p>
                <img src={imgSrc} alt=""/>
                <span>esto son los puntos: {points}</span>
                <p>area en la que trabaja: {area}</p>
                <p>cargo que ocupa: {job}</p>
            </div>
        )
    }
}
