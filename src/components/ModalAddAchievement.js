import React, { Component } from "react";
import "../styles/ModalAddAchievement.css";

export default class ModalAddAchievement extends Component {

    state={
        newAchievement:{
            name:'',
            points:''
        }
    }

    handleChangeInputModal = (e, keyText) => {
        const value = e.target.value;
        this.setState(prevState => ({
          newAchievement: {
            ...prevState.newAchievement,
            [keyText]: value
          }
        }));
    };


      createAchievement = e => {
          e.preventDefault();

          const achievement = {
              name: this.state.newAchievement.name,
              points: this.state.newAchievement.points
          }

          this.props.createAchievement(achievement);
      }


  render() {
    return (
      <div className="modal">
        <div className="modal-container add-achievement">
          <aside>
            <h2 className="add-achievement-title">You're adding a new Achievement!</h2>
          </aside>
          <form className="modal-form" onSubmit={e => this.createAchievement(e)}>
            <div className="modal-field-container">
              <label>
                Name <span>*</span>
              </label>
              <input
                type="text"
                name="name"
                onChange={e => this.handleChangeInputModal(e, "name")}
                required
              />
            </div>
            <div className="modal-field-container">
              <label>
                Points <span>*</span>
              </label>
              <input
                type="text"
                name="points"
                onChange={e => this.handleChangeInputModal(e, "points")}
                required
              />
            </div>
            <div className="modal-buttons-container">
              <button type="submit" className="button-confirm-add">
                Add
              </button>
              <button
                className="button-cancel-add"
                onClick={this.props.handleShowAddModal}
              >
                Cancel
              </button>
            </div>
          </form>
          <button
            className="close-modal-button"
            onClick={this.props.handleShowAddModal}
          >
            X
          </button>
        </div>
      </div>
    );
  }
}
