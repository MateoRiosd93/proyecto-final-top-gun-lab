import React, { Component } from "react";
import { BASE_LOCAL_ENDPOINT } from "../constants";
import axios from "axios";

import "../styles/Prize.css";

class Prize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prize: {
        name: "",
        points: "",
        imgSrc: "",
        description: ""
      },
      error: ""
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

  componentDidMount = () => {
    this.getPrizeID();
  };

  render() {
    const { name, points, imgSrc, description } = this.state.prize;
    return (
      <div className="container-prize-detail">
        <h1 className="name-prize-detail"> {name} </h1>
        <img className="img-prize-detail" src={imgSrc} alt="" />
        <p className="description-prize-detaeil"> {description} </p>
        <span className="points-prize-detail">
          <span className="start icon-star-full" />
          {points}
        </span>
        <div className="container-butons-prize">
          <button className="buton-prize-edit">EDIT</button>
          <button className="buton-prize-delete">DELETE</button>
        </div>
      </div>
    );
  }
}

export default Prize;
