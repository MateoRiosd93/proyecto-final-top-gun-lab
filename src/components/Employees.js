import React, { Component } from 'react';
import ShowEmployees from './ShowEmployees';
import { BASE_LOCAL_ENDPOINT } from '../constants';
import axios from 'axios';

import '../styles/Employees.css';

class Employees extends Component {
    state = {
        employees : [],
        isLoad: false
    }

    getEmployeesBD = () => {
        axios.get(`${BASE_LOCAL_ENDPOINT}/employees`)
        .then(response => {
            this.setState({
                employees : response.data
            })
        })
        .catch(error => {
            this.setState({
                isLoad : true
            })
        });
    }

    componentDidMount () {
        this.getEmployeesBD();
    }

    render() {
        const {employees} = this.state;
        return (
            <div className="div-employees">
                <form action="">
                    <div>
                        <label htmlFor=""></label>
                        <input type="text" placeholder="Search"/>
                    </div>
                </form>
                {
                    employees.map(({id,name,imgSrc,points}) =>
                        <ShowEmployees
                            key={id}
                            name={name}
                            imgSrc={imgSrc}
                            points={points}/>
                     )
                }
            </div>
        )
    }
}

export default Employees;
