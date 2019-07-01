import React, { Component } from "react";
import { BASE_LOCAL_ENDPOINT } from "../constants";
import axios from "axios";
import ModalEditPrize from "./ModalEditPrize";
import { Redirect } from "react-router-dom";
import DeleteMessage from "./DeleteMessage";
import "../styles/Prize.css";

class Prize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prize: {
        id: "",
        name: "",
        points: "",
        imgSrc: "",
        description: ""
      },
      error: "",
      showEditModal: false,
      showDeleteModal: false,
      redirect: false
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
  };

  editPrize = prize => {
    const {
      prize: { id }
    } = this.state;

    const { name, points, imgSrc, description } = prize;

    axios
      .put(`${BASE_LOCAL_ENDPOINT}prizes/${id}`, {
        name,
        points,
        imgSrc,
        description
      })
      .then(() => this.getPrizeID())
      .catch(error => {
        this.setState({
          error: error.message
        });
      });
    this.handlerShowEditModal();
  };

  handlerShowDeleteModal = () => {
    this.setState(prevState => ({
      ...prevState,
      showDeleteModal: !prevState.showDeleteModal
    }));
  };

  deletePrize = async () => {
    const {
      prize: { id }
    } = this.state;

    try {
      await axios.delete(`${BASE_LOCAL_ENDPOINT}prizes/${id}`);
      this.props.history.push("/prizes");
    } catch (error) {
      this.setState({
        error: error.message
      });
    }
  };

  componentDidMount = () => {
    this.getPrizeID();
  };

  render() {
    const { name, points, imgSrc, description } = this.state.prize;
    const { showEditModal, redirect, showDeleteModal } = this.state;
    return (
      <div className="container-prize-detail">
        {showEditModal && (
          <ModalEditPrize
            handlerShowEditModal={this.handlerShowEditModal}
            editPrize={this.editPrize}
          />
        )}
        {showDeleteModal && (
          <DeleteMessage
            toggleModal={this.handlerShowDeleteModal}
            deleteElement={this.deletePrize}
          />
        )}
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
          >
            EDIT
          </button>
          <button
            className="buton-prize-delete"
            onClick={this.handlerShowDeleteModal}
          >
            DELETE
          </button>
        </div>
        {redirect && <Redirect push to="/prizes" />}
      </div>
    );
  }
}

export default Prize;
