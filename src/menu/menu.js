import React, {
    Component
} from "react";
import './menu.css'

import Candidat from './candidat'



import axios from "axios";




class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: '',
            debutDate: new Date(),
            finDate: new Date(),
            etat : 'none',
            ShowCandidat : false,
            ShoweElection : true,


        };
    }
    showCandidat = ()=>{
        this.setState({
            ShowCandidat : true,
            ShoweElection : false
        })
    }
    showElection = ()=>{
        this.setState({
            ShoweElection :true,
            ShowCandidat : false
        })
    }
    changenom = (e) => {
        
        this.setState({
            nom: e.target.value
        })
        console.log(this.state.debutDate)
    };
    changedebut = (e) => {
        this.setState({
            debutDate: e.target.value
        })
    };
    changefin = (e) => {
        this.setState({
            finDate: e.target.value
        })
    };
    AddElection = () => {
        axios
            .post("http://localhost:5000/newElection", {
                nom : this.state.nom,
                debut: this.state.debutDate,
                fin: this.state.finDate
            })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    render() {
        
        return ( <
            div className = "menu" >
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <button className="nav-link" onClick={this.showElection}>Election </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={this.showCandidat}  >Candidature</button>
          </li>
          
        </ul>
      </div>
    </nav>

           { this.state.ShoweElection? <div className="newListe">
            <
            h3 > Hello {
                this.props.match.params.firstName
            } <
            /h3> 
            <div className="AddElection"><
            form >
            <
            label > Nom Election < /label>  <
            input type = "text"
            id = "file"
            onChange = {
                this.changenom
            }
            required / >
            <
            label > debut < /label>  <
            input type = "date"
            id = "file"
            onChange = {
                this.changedebut
            }
            required / >
            <
            label > fin < /label>  <
            input type = "date"
            id = "file"
            onChange = {
                this.changefin
            }
            required / >
            <
            button onClick = {
                this.AddElection
            } > Ajouter < /button> <
            /form>
            </div>
            </div> : null}
            { this.state.ShowCandidat? <Candidat className="candidat" />
        : null } <
            /div>
        );
    }
}



export default Menu;