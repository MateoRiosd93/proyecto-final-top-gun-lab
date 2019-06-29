import React, { Component } from "react";
import "../styles/ModalEditAchievements.css";

export default class ModalEditAchievement extends Component {
  state = {
      name: "",
      points: ""
  };

  handlerInputAchievement = (e, keyText) => {
      const value = e.target.value;
      this.setState({
              [keyText]: value
      })
      console.log(`name ${[keyText]}, ${value}`);
  }

//   handInput = evento =>{
//       const {name,value} = evento.target;
//       this.setState({
//           achievement:{
//               [name] : value
//           }
//       })
//       console.log(this.state);
//   }

  editAchievement = e => {

    console.log(this.state);
      e.preventDefault();
      
      const {name,points} = this.state;
      console.log(`campo: ${name}, valor: ${points}`);
      if(name === '' || points ===''){
        console.log('Entra al error');
      }else{
        this.props.editAchievement( name, points);
      }
  }

  render() {
    return (
      <div className="modal">
        <div className="modal-container modal-achievement">
          <form action="" className="modal-form form-achievement" onSubmit={this.editAchievement}>
                <h2 className="title-achievement">You are Editting an Achievement</h2>
            <div className="modal-field-container">
              <label>
                Name <span>*</span>
              </label>
              <input 
                type="text" 
                required
                name="name"
                onChange={(e) => this.handlerInputAchievement(e,"name")}
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
                onChange={(e) => this.handlerInputAchievement(e,"points")}
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
    );
  }
}
