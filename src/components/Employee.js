import React, { Component } from "react";
import { BASE_LOCAL_ENDPOINT } from "../constants";
import ShowPrizes from "./ShowPrizes";
import axios from "axios";
import DeleteMessage from "./DeleteMessage";
import { Redirect } from "react-router-dom";

import "../styles/Employee.css";
import "../fonts/style.css";

class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prizes: [],
      employee: {
        id:"",
        name: "",
        job: "",
        area: "",
        imgSrc: "",
        points: ""
      },
      error: "",
      showDeleteMessage: false,
      redirect: false
    };
  }

  getPrizesBD = () => {
    axios
      .get(`${BASE_LOCAL_ENDPOINT}prizes`)
      .then(response => {
        const prizes = response.data;
        this.setState({
          prizes
        });
      })
      .catch(error => {
        this.setState({
          error: error.message
        });
      });
  };

  getEmployeeID = () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    axios
      .get(`${BASE_LOCAL_ENDPOINT}employees/${id}`)
      .then(response => {
        this.setState({
          employee: response.data,
          error: ""
        });
      })
      .catch(error => {
        this.setState({
          error: error.message
        });
      });
  };

  handleShowDeleteMessage = () => {
    this.setState(prevState => ({
      ...prevState,
      showDeleteMessage: !prevState.showDeleteMessage
    }));
  };

  deleteEmployee = () => {
    const {employee:{id}} = this.state;
    console.log(id)
    axios.delete(`${BASE_LOCAL_ENDPOINT}employees/${id}`)
    .then(this.setState(prevState =>({
      ...prevState,
      showDeleteMessage: !prevState.showDeleteMessage,
      redirect: true
    })))
    .catch(err => {
      this.setState({
        error: err.message
      });
    });
    this.handleShowDeleteMessage();
  }

  componentDidMount = () => {
    this.getEmployeeID();
    this.getPrizesBD();
  };

  render() {
    const { prizes, showDeleteMessage , redirect} = this.state;
    const { name, job, area, imgSrc, points } = this.state.employee;
    const prizesFilter = prizes.filter(prizes => prizes.points <= points);
    const ShowPrizesFilter = prizesFilter.length === 0? false : true;
    if(redirect){
      return (
         <Redirect to="/employees"/>
      )
    }
    return (
      <div className="container-employee-prizes">
        <div className="container-employee">
          <div className="container-date">
            <h1 className="name-employee">{name}</h1>
            <img className="img-employee" src={imgSrc} alt="" />
            <p className="points-employee">
              <span className="start icon-star-full" />
              {points}
            </p>
          </div>
          <div className="container-date">
            <p className="area-employee">{area}</p>
            <p className="job-employee">{job}</p>
            <div className="container-butons">
              <button className="buton-employee-edit">EDIT</button>
              <button 
                className="buton-employee-delete"
                onClick={this.handleShowDeleteMessage}
                >DELETE</button>
            </div>
          </div>
        </div>
        {
          showDeleteMessage && (
            <DeleteMessage
            deleteElement={this.deleteEmployee}
            toggleModal={this.handleShowDeleteMessage}
            />
          )
        }
        {ShowPrizesFilter && (
          <div className="container-prizesFilter-title">
            <h1 className="title-prizes">Available Prizes </h1>
            <div className="container-prizesFilter">
              {prizesFilter.map(({ description, id, imgSrc, name, points }) => (
                <ShowPrizes
                  key={id}
                  description={description}
                  imgSrc={imgSrc}
                  name={name}
                  points={points}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default  Employee;