import React, { Component } from "react";

import "../styles/ModalAddEmployee.css";

class ModalAddEmployee extends Component {
  state = {
    newEmployee: {
      name: "",
      job: "",
      area: "",
      points: "",
      imgSrc: ""
    }
  };

  handleChangeInputModal = (e, keyText) => {
    const value = e.target.value;
    this.setState(prevState => ({
      newEmployee: {
        ...prevState.newEmployee,
        [keyText]: value
      }
    }));
  };

  createEmployee = e => {
    e.preventDefault();

        const employee={
            name: this.state.newEmployee.name,
            job: this.state.newEmployee.job,
            area: this.state.newEmployee.area,
            points: this.state.newEmployee.points,
            imgSrc: this.state.newEmployee.imgSrc,
        }
        this.props.createEmployee(e, employee);
    }

    
  };

  render() {
    return (
      <div className="modal">
        <div className="modal-container">
          <aside>
            <h2>You're adding a new employee!</h2>
          </aside>
          <form className="modal-form" onSubmit={e => this.createEmployee(e)}>
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
                Job <span>*</span>
              </label>
              <input
                type="text"
                name="job"
                onChange={e => this.handleChangeInputModal(e, "job")}
                required
              />
            </div>

            <div className="modal-field-container">
              <label>
                Area <span>*</span>
              </label>
              <input
                type="text"
                name="area"
                onChange={e => this.handleChangeInputModal(e, "area")}
                required
              />
            </div>

            <div className="modal-field-container">
              <label>
                Points <span>*</span>
              </label>
              <input
                type="number"
                name="points"
                onChange={e => this.handleChangeInputModal(e, "points")}
                required
              />
            </div>

            <div className="modal-field-container">
              <label>
                URL image <span>*</span>
              </label>
              <input
                type="text"
                name="imgSrc"
                onChange={e => this.handleChangeInputModal(e, "imgSrc")}
                required
              />
            </div>
            <div className="modal-buttons-container">
              <button type="submit" className="button-confirm-add">
                Add
              </button>
              <button
                className="button-cancel-add"
                onClick={this.props.handleShowModal}
              >
                Cancel
              </button>
            </div>
          </form>
          <button
            className="close-modal-button"
            onClick={this.props.handleShowModal}
          >
            X
          </button>
        </div>
      </div>
    );
  }
}

export default ModalAddEmployee;