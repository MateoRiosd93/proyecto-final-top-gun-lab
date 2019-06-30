import React, { Component } from "react";
import { BASE_LOCAL_ENDPOINT } from "../constants";
import axios from "axios";
import ModalEditPrize from "./ModalEditPrize";

import "../styles/Prize.css";

class Prize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prize: {
        id:"",
        name: "",
        points: "",
        imgSrc: "",
        description: ""
      },
      error: "",
      showEditModal: false
    };
  }

  getPrizeID = () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    axios
      .get(`${BASE_LOCAL_ENDPOINT}prizes/${id}`)
      .then(response => {
        console.log(response);
        this.setState({
          prize: response.data,
          error: ""
        });
      })
      .catch(error => {
        this.setState({
          error: error.message
        });
      });
  };
  
  handlerShowEditModal = () => {
    this.setState(prevState => ({
      ...prevState,
      showEditModal: !prevState.showEditModal
    }));
  }

  editPrize = prize => {
    const {prize:{id}} =this.state;

    const {name,
      points,
      imgSrc,
      description} = prize;

      axios.put(`${BASE_LOCAL_ENDPOINT}prizes/${id}`,
      {
        name,
        points,
        imgSrc,
        description
      }
      )
      .then(() => this.getPrizeID())
      .catch(error => {
        this.setState({
          error: error.message
        });
      });
      this.handlerShowEditModal();
  }

  componentDidMount = () => {
    this.getPrizeID();
  };


  render() {
    const { name, points, imgSrc, description } = this.state.prize;
    const { showEditModal } = this.state;
    return (
      <div className="container-prize-detail">
        {
          showEditModal &&  (
            <ModalEditPrize 
            handlerShowEditModal={this.handlerShowEditModal}
            editPrize={this.editPrize}
            />)
        }
        <h1 className="name-prize-detail"> {name} </h1>
        <img className="img-prize-detail" src={imgSrc} alt="" />
        <p className="description-prize-detaeil"> {description} </p>
        <span className="points-prize-detail">
          <span className="start icon-star-full" />
          {points}
        </span>
        <div className="container-butons-prize">
          <button 
            className="buton-prize-edit"
            onClick={this.handlerShowEditModal}
          >EDIT</button>
          <button className="buton-prize-delete">DELETE</button>
        </div>
      </div>
    );
  }
}

export default Prize;
