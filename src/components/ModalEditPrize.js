import React, { Component } from 'react'
export default class ModalEditPrize extends Component {

    state={
        name: "",
        points: "",
        imgSrc: "",
        description: ""
    }

    handlerInputPrize = (e,keyText) =>{
        const value = e.target.value;
        this.setState({
            [keyText]:value
        })
    }


    editPrize = e => {
        e.preventDefault();

        const prize = {
            name: this.state.name,
            points: this.state.points,
            imgSrc: this.state.imgSrc,
            description:this.state.description
        }

        this.props.editPrize(prize);
    }

    render() {
        return (
            <div className="modal">
            <div className="modal-container modal-achievement">
              <form action="" className="modal-form form-achievement" onSubmit={this.editPrize}>
                    <h2 className="title-achievement">You are Editting an Employee!</h2>
                <div className="modal-field-container">
                  <label>
                    Name <span>*</span>
                  </label>
                  <input 
                    type="text" 
                    required
                    name="name"
                    onChange={(e) => this.handlerInputPrize(e,"name")}
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
                    onChange={(e) => this.handlerInputPrize(e,"points")}
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
                    onChange={(e) => this.handlerInputPrize(e,"imgSrc")}
                   />
                </div>
                <button type="submit" className="button-confirm-add">Save</button>
              </form>
              <button
                className="close-modal-button close-achievement"
                onClick={() => this.props.handlerShowEditModal()}
              >
                X
              </button>
            </div>
          </div>
        )
    }
}
