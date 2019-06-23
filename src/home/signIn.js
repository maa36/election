import React, { Component } from "react";
import { push } from "react-router-redirect";

import {connect} from 'react-redux'
const axios = require("axios");

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirect: "principale",
      

    };
  }

  ChangeEmail = event => {
    this.setState({
      email: event.target.value
    });
  };
  ChangePassword = event => {
    this.setState({
      password: event.target.value
    });
    
    
    
  };
  ConfirmeCompte = (event) => {
     event.preventDefault();
    console.log("hey");
    


    axios
      .post(
        "http://localhost:5000/login/" +
          this.state.email +
          "/" +
          this.state.password,
        {}
      )
      .then(function(response) {
        if (response.data.length === 1) {
          const result = response.data[0];

          if (result.role != "admin") {
            console.log(result)
            const idf=result._id
            
            push(
              "/menu/"
              +
                idf +
                "/" +
                result.name 
            );
          } else {
            push("/admin");
          }
        } else {
          alert("verifier votre compte");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="sign-in">
        <div className="bloc-formulaire">
          <h3 className="mr-sm-2">Se Connecter</h3>

          <form>
            
              <label  className="mr-sm-2">
                Email :
              </label>
              <input
                type="email"
                onChange={this.ChangeEmail}
                name="email"
                id="exampleEmail"
                placeholder=""
              />
           
            <label className="mr-sm-2">
                Mot de passe :
              </label>
              <input
                type="password"
                onChange={this.ChangePassword}
                name="password"
                id="examplePassword"
                placeholder=""
              />
            
            <button className="buttonSignIn" onClick= {(event) => {this.ConfirmeCompte(event)
            }}>
              Connecter
            </button>
          </form>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addResrvation: newValue => {
      dispatch({ type: "CHANGE_RESRVATION", nouveauxUsers: newValue });
    },
    
  };
};
const Signin= connect(null,mapDispatchToProps)(SignIn)
export default Signin;