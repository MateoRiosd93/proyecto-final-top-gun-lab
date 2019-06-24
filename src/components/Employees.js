import React, { Component } from 'react';
import ShowElements from './ShowElements';
import Search from './Search';
import { BASE_LOCAL_ENDPOINT } from '../constants';
import axios from 'axios';

import '../styles/Employees.css';

class Employees extends Component {
    state = {
        employees : [],
        isLoad: false,
        searchName:''
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

    searchNames = letter => {
        const searchName = letter;
        this.setState({
            searchName
        })
    }

    render() {
        const {employees,searchName} = this.state;
        const employeesFilter = employees.filter(employee => employee.name.toLowerCase().includes(searchName.toLowerCase()));
        return (
            <div className="container-employees">
                <Search searchNames={this.searchNames}/>
                <div className="container-elements">
                {
                    employeesFilter.map(({id,name,imgSrc,points}) =>
                        <ShowElements
                            key={id}
                            name={name}
                            imgSrc={imgSrc}
                            points={points}/>
                     )
                }
                </div>
            </div>
        )
    }
}

export default Employees;
