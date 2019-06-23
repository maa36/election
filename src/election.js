import React, { Component } from 'react';
// const node_xj = require("xls-to-json");
import axios from "axios";

import XLSX from 'xlsx';




class Election extends Component {
    constructor(props) {
        super(props);
        this.state=({
          //   file : "",
          
           file: null
        })
        
      }
      handleChange =(e)=> {
        this.setState({ file : e.target.files})
        
        
      };
     
      handleFile =() =>{
        console.log(this.state.file);
        
        axios
        .post("http://localhost:5000/newListeElection", {"name" : "this.state.file.path" } )
        .then(function(response) {
          console.log(response)
        })
        .catch(function(error) {
          console.log(error);
        });
    
      }
      
  render() {
    return (
      <div className="App">
      <h3>ajouter fichier </h3>
      <input type="file" id="file"  onChange={this.handleChange} id="file" />
      <button onClick={this.handleFile}>ajouter</button>
        
      </div>
    );
  }
}


export default  Election;
