import React, { Component } from "react";
import { BASE_LOCAL_ENDPOINT } from "../constants";
import ShowPrizes from "./ShowPrizes";
import axios from "axios";
import DeleteMessage from "./DeleteMessage";
import { Redirect } from "react-router-dom";
import ModalEditEmployee from "./ModalEditEmployee";

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
      showEditModal: false,
      redirect: false
    };
  }

  componentDidMount = () => {
    this.getEmployeeID();
    this.getPrizesBD();
  };

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
    .then(
      this.setState({
      redirect: true
    })
    )
    .catch(err => {
      this.setState({
        error: err.message
      });
    });
    this.handleShowDeleteMessage();
  }

  handleShowEditModal = () => {
    this.setState(prevState => ({
      ...prevState,
      showEditModal: !prevState.showEditModal
    }));
  }

  editEmployee = employee =>{
    const {employee:{id}} = this.state;
    const {name,
      job,
      area,
      imgSrc,
      points} = employee
    axios.put(`${BASE_LOCAL_ENDPOINT}employees/${id}`,
    {
      name,
      job,
      area,
      imgSrc,
      points
    }
    ).then(()=> this.getEmployeeID())
    .catch(error => {
      this.setState({
        error: error.message
      });
    });
    this.handleShowEditModal();
  }


  render() {
    const { prizes, showDeleteMessage , showEditModal , redirect} = this.state;
    const { name, job, area, imgSrc, points } = this.state.employee;
    const prizesFilter = prizes.filter(prizes => prizes.points <= points);
    const ShowPrizesFilter = prizesFilter.length === 0? false : true;
    const {from} = this.props.location.state || '/'
    return (
      <div className="container-employee-prizes">
        <div className="container-employee">
          <div className="container-date">
            <h1 className="name-employee">{name}</h1>
            <img className="img-employee" src={imgSrc} alt="employee"/>
            <p className="points-employee">
              <span className="start icon-star-full" />
              {points}
            </p>
          </div>
          <div className="container-date-work">
            <p className="area-employee">{area}</p>
            <p className="job-employee">{job}</p>
            <div className="container-butons">
              <button className="buton-employee-edit"
              onClick={this.handleShowEditModal}
              >EDIT</button>
              <button 
                className="buton-employee-delete"
                onClick={this.handleShowDeleteMessage}
                >DELETE</button>
            </div>
          </div>
        </div>
      {
        showEditModal && ( 
          <ModalEditEmployee
          handleShowEditModal={this.handleShowEditModal}
          editEmployee={this.editEmployee}
          />

        )
      }

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
        {
          redirect && (<Redirect to={from || '/employees'}/>)
        }
      </div>
    );
  }
}

export default  Employee;