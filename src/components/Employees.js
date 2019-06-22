import React, { Component } from 'react';
import Mostrar from './Mostrar';
import { BASE_LOCAL_ENDPOINT } from '../constants';
import axios from 'axios';

import '../styles/Employees.css';

class Employees extends Component {
    state = {
        employees : [],
        isLoad: false
    }

    // getEmployeesBD = () => {
    //     console.log('consumiendo employees')
    //     console.log(BASE_LOCAL_ENDPOINT)
    //     axios.get(`${BASE_LOCAL_ENDPOINT}/employees`)
    //     .then(response => {
    //         this.setState({
    //             employees : response.employees
    //         })
    //         console.log();
    //     })
    //     .catch(error => {
    //         this.setState({
    //             isLoad : true
    //         })
    //     });
    // }

    componentDidMount () {
        console.log('componentWillMount')
        // this.getEmployeesBD();
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

    render() {
        const {employees} = this.state;
        return (
            <div className="div-employees">
                {
                    employees.map(({id,name,imgSrc,points}) =>
                        <Mostrar
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
