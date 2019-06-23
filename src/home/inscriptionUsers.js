import React, {
    Component
} from 'react';

import './home.css'
import axios from "axios";
import InputMask from 'react-input-mask';




class Inscription extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            nom: '',
            password: "",
            prenom: '',
            mail: '',
            adresse: '',
            cin: 0,
            phone: 0

        })

    }
    changePrenon = (e) => {
        this.setState({
            prenom: e.target.value
        })
    };
    changeAdresse = (e) => {
        this.setState({
            adresse: e.target.value
        })
    };
    changeCIN = (e) => {
        this.setState({
            cin: e.target.value
        })
    };
    changeMail = (e) => {
        this.setState({
            mail: e.target.value
        })
    };
    changePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    };
    changeName = (e) => {
        this.setState({
            nom: e.target.value
        })
    };
    changePhone = (e) => {
        this.setState({
            phone: e.target.value
        })
    };
    AddData = () => {
     
        

        axios
            .post("http://localhost:5000/newListeElection", {
                "name": this.state.nom,"prenom": this.state.prenom,"CIN": this.state.cin,"password": this.state.password,"phone": this.state.phone,"email": this.state.mail,"adresse": this.state.adresse
            })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    render() {
        return ( < div className = "formSignIn" >
            <
            form onSubmit = {
                this.AddData
            } >
            <
            label > Nom < /label>  <
            input type = "text"
            id = "file"
            onChange = {
                this.changeName
            }
            pattern = "[A-Za-z]{3,}"
            required / >
            <
            label > Prenom < /label>  <
            input type = "text"
            onChange = {
                this.changePrenon
            }
            pattern = "[A-Za-z]{3,}"
            required / > <
            label > CIN < /label>  <
            InputMask onChange = {
                this.changeCIN
            }
            mask = "99999999"
            className = "InputMask"
            maskChar = " " pattern="[0-9]{8}"
            required / >
            <
            label > Mail < /label> <
            input type = "email"
            pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            onChange = {
                this.changeMail
            }
            required / > <
            label > Mot de passe < /label> <
            input type = "password"
            onChange = {
                this.changePassword
            }
            pattern = "(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
            required / > < label > Adresse < /label> <
            input type = "text"
            onChange = {
                this.changeAdresse
            }
            /> <
            label > Telephone < /label> <
            InputMask onChange = {
                this.changePhone
            }
            mask = "99 999 999"
            className = "InputMask"
            maskChar = " "
            required / >

            <
            button type = "submit"

            >
            ajouter < /button>  <
            /form >

            <
            /div>
        );
    }
}


export default Inscription;