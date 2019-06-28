import React, { Component } from "react";
import { BASE_LOCAL_ENDPOINT } from "../constants";
import Search from "./Search";
import axios from "axios";
import ShowAchievements from "./ShowAchievements";

import "../styles/Achievements.css";

class Achievements extends Component {
  state = {
    achievements: [],
    isLoad: false,
    searchName: ""
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

  render() {
    const { achievements, searchName } = this.state;
    const achievementsFilter = achievements.filter(achievement =>
      achievement.name.toLowerCase().includes(searchName.toLowerCase())
    );

    return (
      <div className="container-achievements">
        <div className="container-search-add">
          <Search
            searchNames={this.searchNames}
            mensaje="This is our Achievements!"
          />
        </div>
        <ul className="list-achievements">
          {achievementsFilter.map(({ id, name, points }) => (
            <ShowAchievements key={id} name={name} points={points} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Achievements;