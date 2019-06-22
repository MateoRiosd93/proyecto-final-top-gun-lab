import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import ShowElements from './ShowElements';
import Search from './Search';
import Employee from './Employee';
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
            <div className="container-employees">
                <Search />
                <div className="container-elements">
                {
                    employees.map(({id,name,imgSrc,points}) =>
                    <NavLink key={id} to={`/employee/${id}`}>
                        <ShowElements
                                key={id}
                                name={name}
                                imgSrc={imgSrc}
                                points={points}/>
                    </NavLink>
                    )
                }
                </div>
            </div>
        )
    }
}

export default Employees;
