import React, { Component } from "react";
import Inscription from "./inscriptionUsers";
import SignIn from "./signIn";
import './home.css'

class Principale extends Component {
  render() {
    return (
      <div className="principal">
        <h1>Vote</h1>
      <div className="formulaire" >
      <Inscription />
        <SignIn />
      </div>
      <div id="footer" className="card-footer text-muted">
    <h5> <i className="fab fa-linkedin-in"></i> : Reserviftourek@gmail.com </h5>
    <h5> Contact : 71 522 523</h5>
  </div>
        
      </div>
    );
  }
}

export default Principale;