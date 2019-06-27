import React, { Component } from 'react'
import { BASE_LOCAL_ENDPOINT } from '../constants';
import ShowPrizes from './ShowPrizes';
import axios from 'axios';

import '../styles/Employee.css';

export default class Employee extends Component {
    constructor (props) {
        super(props);
        this.state = {
            prizes : [],
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

    getPrizesBD = () => {
        axios.get(`${BASE_LOCAL_ENDPOINT}/prizes`)
        .then(response => {
            const prizes =  response.data;
            this.setState({
                prizes
             });
        })
        .catch(error => {
            this.setState({
                error: error.message
            })
        });
    }

    getEmployeeID = () => {
        const {match:{params:{id}}} = this.props;
        axios.get(`${BASE_LOCAL_ENDPOINT}/employees/${id}`)
            .then(response => {
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
        this.getPrizesBD();
    }

    render() {
        const {prizes}  = this.state;
        const {name,job,area,imgSrc,points} = this.state.employee;
        const prizesFilter = prizes.filter(prizes => prizes.points <= points);
        const ShowPrizesFilter = prizesFilter.length === 0 ? false : true;
        return (
            <div className="container-employee-prizes">
                {/* <h1 className="title-employee">Hi, I'm the employee you want to see ...</h1> */}
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
                            <button className="buton-employee-edit">EDIT</button>
                            <button className="buton-employee-delete">DELETE</button>
                        </div>
                    </div>
                </div>
                {
                ShowPrizesFilter && (<div className="container-prizesFilter-title">
                    <h1 className="title-prizes">Estamos listos para mostrar los prizes</h1>
                    <div className="container-prizesFilter">
                        {
                        prizesFilter.map(({description,id,imgSrc,name,points}) =>
                            <ShowPrizes key={id}
                                        description={description}
                                        imgSrc={imgSrc}
                                        name={name}
                                        points={points}/>
                            )
                        }
                    </div>
                </div>)
                }
            </div>
        )
    }
}
