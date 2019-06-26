import React, { Component } from 'react';
import ShowElements from './ShowElements';
import Search from './Search';
import Employee from './Employee';
import { BASE_LOCAL_ENDPOINT } from '../constants';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import ModalAddEmployee from './ModalAddEmployee';

import '../styles/Employees.css';

class Employees extends Component {
    state = {
        employees : [],
        isLoad: false,
        searchName:'',
        showModal: false,
        createEmployeeError:false
    }

    getEmployeesBD = () => {
        axios.get(`${BASE_LOCAL_ENDPOINT}/employees`)
        .then(response => {
            const employees = response.data.sort((elemento1,elemento2) => elemento2.points - elemento1.points);
            console.log(employees);
            this.setState({
                employees,
                createEmployeeError: false
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

    handleShowModal = e =>{
        this.setState(prevState =>({
            ...prevState,
            showModal: !prevState.showModal
        }))
    }


    createEmployee =  ( e, employee )  => {
        const {name, job, area, points, imgSrc} = employee;
        console.log(employee);
        axios.post(`${BASE_LOCAL_ENDPOINT}/employees`, {
            name,
            job,
            area,
            points,
            imgSrc
        }, {
            headers: { "Content-Type": "application/json"}
        })
        .then (() => {this.getEmployeesBD()} )
        .catch(() => {this.setState({createEmployeeError:true})})

        this.handleShowModal(e);
    }

    render() {
        const {employees,searchName, showModal} = this.state;
        const employeesFilter = employees.filter(employee => employee.name.toLowerCase().includes(searchName.toLowerCase()));
        return (
            <div className="container-employees">
                <div className="container-search-add">
                    <Search searchNames={this.searchNames}/>
                    <button className="buton-add" onClick={this.handleShowModal}> Add </button>
                </div>

                <div className="container-elements">
                {
                    showModal && (<ModalAddEmployee
                                    handleShowModal={this.handleShowModal}
                                    createEmployee={this.createEmployee}
                                    />)
                }
                {
                    employeesFilter.map(({id,name,imgSrc,points}) =>
                    <NavLink key={id} to={`/employees/${id}`}>
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
