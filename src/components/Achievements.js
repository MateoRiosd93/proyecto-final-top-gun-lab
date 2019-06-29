import React, { Component } from "react";
import { BASE_LOCAL_ENDPOINT } from "../constants";
import Search from "./Search";
import axios from "axios";
import ShowAchievements from "./ShowAchievements";
import ModalEditAchievement from "./ModalEditAchievement";
import DeleteMessage from './DeleteMessage';
import "../styles/Achievements.css";

class Achievements extends Component {
  state = {
    achievements: [],
    isLoad: false,
    searchName: "",
    showModal: false,
    showDeleteMessage: false,
    idAchievement: "",
    error:""
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

  componentDidMount() {
    this.getAchievementsBD();
  }

  searchNames = letter => {
    const searchName = letter;
    this.setState({
      searchName
    });
  };

  handleShowModal = (id = null) => {
    const idAchievement = id;

    this.setState(prevState => ({
      ...prevState,
      showModal: !prevState.showModal,
      idAchievement
    }));
  };

  editAchievement = ( name, points ) => {
    const id = this.state.idAchievement;

    console.log('Componente Achievement');
    console.log(`name ${name}, points ${points}, id ${id}`);

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

    this.handleShowModal();
  };

  handleShowDeleteMessage = (id=null) => {
    const idAchievement = id
    this.setState(prevState => ({
      ...prevState,
      showDeleteMessage: !prevState.showDeleteMessage,
      idAchievement
    }))
  }

  deleteAchievement = () => {
    const {idAchievement:id} = this.state;

    axios.delete(`${BASE_LOCAL_ENDPOINT}achievements/${id}`)
    .then(() => {
      this.getAchievementsBD();
      console.log('achievement eliminado');
    })
    .catch(err => {
      this.setState({
        error: err.message
      });
    });
    this.handleShowDeleteMessage();
  }

  

  render() {
    const { achievements, searchName, showModal, showDeleteMessage, idAchievement } = this.state;
    const achievementsFilter = achievements.filter(achievement =>
      achievement.name.toLowerCase().includes(searchName.toLowerCase())
    );

    console.log(idAchievement);

    return (
      <div className="container-achievements">
        <div className="container-search-add">
          <Search
            searchNames={this.searchNames}
            mensaje="This is our Achievements!"
          />
        </div>
        {showModal && (
          <ModalEditAchievement
            handleShowModal={this.handleShowModal}
            editAchievement={this.editAchievement}
          />
        )}
        {
          showDeleteMessage && (<DeleteMessage 
            handleShowDeleteMessage={this.handleShowDeleteMessage}
            deleteAchievement={this.deleteAchievement}
                                />)
        }
        <ul className="list-achievements">
          {achievementsFilter.map(({ id, name, points }) => (
            <ShowAchievements
              key={id}
              name={name}
              points={points}
              handleShowModal={() => this.handleShowModal(id)}
              handleShowDeleteMessage={()=>this.handleShowDeleteMessage(id)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Achievements;