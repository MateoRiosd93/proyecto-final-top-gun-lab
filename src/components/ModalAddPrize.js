import React, { Component } from "react";

class ModalAddPrize extends Component {
  state = {
    newPrize: {
      name: "",
      description: "",
      points: "",
      imgSrc: ""
    }
  };

  handleChangeInputModal = (e, keyText) => {
    const value = e.target.value;
    this.setState(prevState => ({
      newPrize: {
        ...prevState.newPrize,
        [keyText]: value
      }
    }));
  };

  createPrize = e => {
    e.preventDefault();

    const prize = {
      name: this.state.newPrize.name,
      description: this.state.newPrize.description,
      points: this.state.newPrize.points,
      imgSrc: this.state.newPrize.imgSrc
    };

    this.props.createPrize(e, prize);
  };
  render() {
    return (
      <div className="modal">
        <div className="modal-container">
          <aside>
            <h2>You're adding a new Prize!</h2>
          </aside>
          <form className="modal-form" onSubmit={e => this.createPrize(e)}>
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
                Description <span>*</span>
              </label>
              <input
                type="text"
                name="description"
                onChange={e => this.handleChangeInputModal(e, "description")}
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

export default ModalAddPrize;
