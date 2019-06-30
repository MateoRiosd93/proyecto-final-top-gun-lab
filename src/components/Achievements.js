import React, { Component } from "react";
import { BASE_LOCAL_ENDPOINT } from "../constants";
import Search from "./Search";
import axios from "axios";
import ShowAchievements from "./ShowAchievements";
import ModalEditAchievement from "./ModalEditAchievement";
import DeleteMessage from "./DeleteMessage";
import ModalAddAchievement from "./ModalAddAchievement";
import "../styles/Achievements.css";
import LoadMessage from "./LoadMessage";

class Achievements extends Component {
  state = {
    achievements: [],
    isLoad: false,
    searchName: "",
    showAddModal: false,
    showEditModal: false,
    showDeleteMessage: false,
    idAchievement: "",
    error: ""
  };

  getAchievementsBD = () => {
    axios
      .get(`${BASE_LOCAL_ENDPOINT}achievements`)
      .then(response => {
        this.setState({
          achievements: response.data
        });
      })
      .catch(error => {
        this.setState({
          isLoad: true
        });
      });
  };

  searchNames = letter => {
    const searchName = letter;
    this.setState({
      searchName
    });
  };

  handleShowEditModal = (id = null) => {
    const idAchievement = id;

    this.setState(prevState => ({
      ...prevState,
      showEditModal: !prevState.showEditModal,
      idAchievement
    }));
  };

  editAchievement = (name, points) => {
    const id = this.state.idAchievement;

    axios
      .put(
        `${BASE_LOCAL_ENDPOINT}achievements/${id}`,
        {
          name,
          points
        },
        {
          headers: { "Content-Type": "application/json" }
        }
      )
      .then(() => {
        this.getAchievementsBD();
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });

    this.handleShowEditModal();
  };

  handleShowDeleteMessage = (id = null) => {
    const idAchievement = id;
    this.setState(prevState => ({
      ...prevState,
      showDeleteMessage: !prevState.showDeleteMessage,
      idAchievement
    }));
  };

  deleteAchievement = () => {
    const { idAchievement: id } = this.state;

    axios
      .delete(`${BASE_LOCAL_ENDPOINT}achievements/${id}`)
      .then(() => {
        this.getAchievementsBD();
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
    this.handleShowDeleteMessage();
  };

  handleShowAddModal = () => {
    this.setState(prevState => ({
      ...prevState,
      showAddModal: !prevState.showAddModal
    }));
  };

  createAchievement = achievement => {
    const { name, points } = achievement;
    axios.post(
      `${BASE_LOCAL_ENDPOINT}achievements`,
      {
        name,
        points
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    )
    .then(() => this.getAchievementsBD())
    .catch(err => {
      this.setState({
        error: err.message
      });
    });

    this.handleShowAddModal();
  };

  componentDidMount() {
    this.getAchievementsBD();
  }

  render() {
    const {
      achievements,
      searchName,
      showAddModal,
      showEditModal,
      showDeleteMessage
    } = this.state;
    const achievementsFilter = achievements.filter(achievement =>
      achievement.name.toLowerCase().includes(searchName.toLowerCase())
    );

    if( achievements.length === 0 ){
      return (<LoadMessage/>)
    }

    return (
      <div className="container-achievements">
        <div className="container-search-add">
          <Search
            searchNames={this.searchNames}
            mensaje="This is our Achievements!"
          />
          <button className="buton-add" onClick={this.handleShowAddModal}>
            ADD
          </button>
        </div>
        {showAddModal && (
          <ModalAddAchievement 
            handleShowAddModal={this.handleShowAddModal} 
            createAchievement={this.createAchievement}
            />
        )}
        {showEditModal && (
          <ModalEditAchievement
            handleShowEditModal={this.handleShowEditModal}
            editAchievement={this.editAchievement}
          />
        )}
        {showDeleteMessage && (
          <DeleteMessage
            toggleModal={this.handleShowDeleteMessage}
            deleteElement={this.deleteAchievement}
          />
        )}
        <ul className="list-achievements">
          {achievementsFilter.map(({ id, name, points }) => (
            <ShowAchievements
              key={id}
              name={name}
              points={points}
              handleShowEditModal={() => this.handleShowEditModal(id)}
              handleShowDeleteMessage={() => this.handleShowDeleteMessage(id)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Achievements;
