import React, { Component } from 'react'
import { BASE_LOCAL_ENDPOINT } from '../constants';
import axios from 'axios';

import '../styles/Employee.css';

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
                <div className="container-date">
                    <h1 className="name-employee">{name}</h1>
                    <img className="img-employee" src={imgSrc} alt=""/>
                    <p className="points-employee">{points}</p>
                </div>
                <div className="container-date">
                    <p className="area-employee">{area}</p>
                    <p className="job-employee">{job}</p>
                    <div className="container-butons">
                        <button className="buton-employee-edit">Edit</button>
                        <button className="buton-employee-delete">Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}
