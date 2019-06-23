import React, { Component } from "react";
import InputMask from 'react-input-mask';
import './election.css'
const axios = require("axios");


class Principale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: '',
      prenom: '',
      mail: '',
      adresse: '',
      sexe : '',
      cin: 0,
      phone: 0,
      image : '',
      dateNaissance : new Date() ,
      election : [] ,
      dateDebut :""

    };
  }
  // handleName = (e) =>{
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }
  handleName = (e) =>{
    this.setState({
      nom : e.target.value
    })
  }
  handleSexe = (e) =>{
    this.setState({
      sexe : e.target.value
    })
  }
  handlePrenom = (e) =>{
    this.setState({
      prenom : e.target.value
    })
  }
  handleImage = (e) =>{
    this.setState({
      image : e.target.value
    })
  }
  handleCin = (e) =>{
    this.setState({
      cin : e.target.value
    })
  }
  handleAdresse = (e) =>{
    this.setState({
      adresse : e.target.value
    })
  }
  handlePhone = (e) =>{
    this.setState({
      phone : e.target.value
    })
  }
  handleMail = (e) =>{
    this.setState({
      mail : e.target.value
    })
  }
  handleNaissance = (e) =>{
    this.setState({
      dateNaissance : e.target.value
    })
  }
  
  AddCandidat = () => {
    axios
        .post("http://localhost:5000/candidatElection" , {
          "election" : this.state.election.nom,
            "nom" : this.state.nom,
            "prenom" : this.state.prenom,
            "cin" : this.state.cin,
            "phone" : this.state.phone,
            "adresse" : this.state.adresse,
            "mail" : this.state.mail,
            "sexe" : this.state.sexe,

            "dateDeNaissance" : this.state.dateNaissance,
            "image" : this.state.image
            
        })
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error);
        });

}
  componentDidMount = () => {
    const idElection = this.props.idElection
    fetch("http://localhost:5000/ElectionName/" + idElection )
    .then(res => res.json())
    .then(
      result => {
        console.log(result);
        console.log(typeof result[0].fin);
        
        this.setState({
          election : result[0] ,
          dateDebut : result[0].fin 

    
        })

      },
      err => {
        console.log("err");
      }
    )
  }


  render() {
    
    console.log(this.props)

    return (
      <div >
       <
            form onSubmit = {
                this.AddData
            } >
            <
            label > Nom < /label>  <
            input type = "text"
            id = "file"
            name = "nom"
            onChange = {
                this.handleName
            }
            pattern = "[A-Za-z]{3,}"
            required / >
            <
            label > Prenom < /label>  <
            input type = "text"
            name="prenom"
            onChange = {
                this.handlePrenom
            }
            pattern = "[A-Za-z]{3,}"
            required / > 
            <
            label > Image < /label>  <
            input type = "text"
            name="image"
            onChange = {
                this.handleImage
            }
            required / ><
            label > CIN < /label>  <
            InputMask onChange = {
                this.handleCin
            }
            mask = "99999999"
            name ="cin"
            className = "InputMask"
            maskChar = " " pattern="[0-9]{8}"
            required / >
            <
            label > Mail < /label> <
            input type = "email" name="mail" 
            pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            onChange = {
                this.handleMail
            }
            required / > 
            <
            label > sexe < /label> <
            input type = "text" name="sexe" 
            
            onChange = {
                this.handleSexe
            }
            required / ><
            label > Date de naissance < /label> <
            InputMask type = "date"
            name="dateNaissance"
            onChange = {
                this.handleNaissance
            }
            className = "InputMask"
            maskChar = " " pattern="[0-9]{8}"
            required / > < label > Adresse < /label> <
            input name="adresse" type = "text"
            onChange = {
                this.handleAdresse
            }
            /> <
            label > Telephone < /label> <
            InputMask 
            name="phone" onChange = {
                this.handlePhone
            }
            mask = "99 999 999"
            className = "InputMask"
            maskChar = " "
            required / >

            <
            button type = "submit"
            onClick={this.AddCandidat}
            >
            ajouter < /button >  <
            /form >
      
  </div>
        
    );
  }
}

export default Principale;