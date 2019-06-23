import React, { Component } from "react";
import InputMask from 'react-input-mask';
import NewCandidat from './newCandidat'
import ListeCandidat from './listeCandidat'

import './election.css'
const axios = require("axios");


class Principale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowListe : false,
      ShowNew : true,

    };
  }
  showListeCandidat = ()=>{
    this.setState({
        ShowNew : false,
        ShowListe:true
    })
}
showNewCandidat = ()=>{
    this.setState({
        ShowNew :true,
        ShowListe : false
    })
}
  

  render() {
    
    
    return (
      <div >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <button className="nav-link" onClick={this.showNewCandidat}>Add Candidat </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={this.showListeCandidat}  >Listes</button>
          </li>
          
        </ul>
      </div>
    </nav>
    { this.state.ShowNew? <NewCandidat idElection={this.props.match.params.name}/>
    : null }
    { this.state.ShowListe? <ListeCandidat idElection={this.props.match.params.name}/>
    : null }
  </div>
        
    );
  }
}

export default Principale;