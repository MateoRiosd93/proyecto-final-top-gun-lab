import React, { Component } from 'react'

export default class ModalEditEmployee extends Component {

    state={
        name: "",
        job: "",
        area: "",
        imgSrc: "",
        points: ""
    }

    handlerInputEmployee = (e, keyText) => {
        const value = e.target.value
        this.setState({
            [keyText] : value
        })
    }

    editEmployee = e=> {
        e.preventDefault();

        const employee = {
            name: this.state.name,
            job: this.state.job,
            area: this.state.area,
            imgSrc: this.state.imgSrc,
            points: this.state.points
        }

        this.props.editEmployee(employee)

    }
    render() {
        return (
            <div className="modal">
            <div className="modal-container modal-achievement">
              <form action="" className="modal-form form-achievement" onSubmit={this.editEmployee}>
                    <h2 className="title-achievement">You are Editting an Employee!</h2>
                <div className="modal-field-container">
                  <label>
                    Name <span>*</span>
                  </label>
                  <input 
                    type="text" 
                    required
                    name="name"
                    onChange={(e) => this.handlerInputEmployee(e,"name")}
                    />
                </div>
                <div className="modal-field-container">
                  <label>
                    Job <span>*</span>
                  </label>
                  <input 
                    type="text" 
                    required
                    name="job"
                    onChange={(e) => this.handlerInputEmployee(e,"job")}
                    />
                </div>
                <div className="modal-field-container">
                  <label>
                    Area <span>*</span>
                  </label>
                  <input 
                    type="text" 
                    required
                    name="area"
                    onChange={(e) => this.handlerInputEmployee(e,"area")}
                    />
                </div>
                <div className="modal-field-container">
                  <label>
                    ImgSrc <span>*</span>
                  </label>
                  <input 
                    type="text"  
                    required 
                    name="imgSrc"
                    onChange={(e) => this.handlerInputEmployee(e,"imgSrc")}
                   />
                </div>
                <div className="modal-field-container">
                  <label>
                    Points <span>*</span>
                  </label>
                  <input 
                    type="text"  
                    required 
                    name="points"
                    onChange={(e) => this.handlerInputEmployee(e,"points")}
                   />
                </div>
                <button type="submit" className="button-confirm-add">Save</button>
              </form>
              <button
                className="close-modal-button close-achievement"
                onClick={() => this.props.handleShowEditModal()}
              >
                X
              </button>
            </div>
          </div>
        )
    }
}
