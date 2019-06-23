
import React, { Component } from "react";

import { Card, CardBody,
  CardTitle, CardSubtitle , Button} from 'reactstrap';
  import { push } from "react-router-redirect";



class Candidat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liste : []
      
    };
  }
  componentDidMount = () => {
    
    fetch("http://localhost:5000/affichage")
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            liste: result
          });
        },
        err => {
          console.log("err");
        }
      );
  };
  updateElection = (e)=>{
    console.log(e.target.id)
    push('/update/' + e.target.id)
  }

  
 
  render() {
    return (
      <div className="admin">
      {this.state.liste
              .map((p, i) => (
                <div className="CardMenu">
      <Card key={i} className="cardmenu">
        
        <CardBody>
          <CardTitle>nom du Election : {p.nom}</CardTitle>
          <CardSubtitle>debut du Election : {p.debut} </CardSubtitle>
          <CardSubtitle>fin du Election : {p.fin} </CardSubtitle>
          <Button id={p._id} onClick={this.updateElection}>Paramétre</Button>

          
        </CardBody>
      </Card>
      </div>
       ))}
      
        
     
      </div>
    );
  }
}

export default Candidat;