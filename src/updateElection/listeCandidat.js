import React, { Component } from "react";
import { Card, CardBody,
    CardTitle, CardSubtitle , Button} from 'reactstrap';
import './election.css'
const axios = require("axios");



class Principale extends Component {
  constructor(props) {
    super(props);
    this.state = {
        election : [],
        liste : [],
        nameElection : '' 
      

    };
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
          election : result ,
          dateDebut : result[0].fin 
        })
        this.setState({
          nameElection : this.state.election[0].nom,
        })
        console.log(this.state.nameElection);         
        
        fetch("http://localhost:5000/lsteCandidat/" + this.state.nameElection)
      .then(res => res.json())
      .then(
        result => {
          console.log(this.state.nameElection);         
          console.log(result);
          this.setState({
            liste: result
          });
        },
        err => {
          console.log("err");
        }
      );
  
       
      },
      err => {
        console.log("err");
      }
    )
  }
  // componentDidMount= () => {
    
  //   fetch("http://localhost:5000/lsteCandidat/" + this.state.election.nom)
  //     .then(res => res.json())
  //     .then(
  //       result => {
  //         console.log(this.state.election);
          
  //         console.log(result);
  //         this.setState({
  //           liste: result
  //         });
  //       },
  //       err => {
  //         console.log("err");
  //       }
  //     );
  // };

  render() {
    
    console.log(this.props)

    return (
        <div>
        
        <div>
         {this.state.liste
          .map((p, i) => (
        <div class="card" style={{ width: 18 + "em" }}>
        <img class="card-img-top" src={p.image} alt="Card image cap" />
        <div class="card-body">
        <h5>Election : {p.election}</h5>
          <h5 class="card-title">{p.prenom} {p.nom}</h5>
          <h3 class="card-text">{p.dateDeNaissance}</h3>
        </div>
        </div>
      ))}
      </div>
      </div>


                )      
    
  }
}

export default Principale;