import React, {Component} from 'react';

class SignedButton extends Component{
    constructor(){
        this.html = [];
    }

    componentWillMount(){
        this.html.push(
        <span data-toggle="modal">
            <button id="iniciarSesion" data-toggle="modal" class="accederLogin cd-signin" data-toggle="tooltip" title="Iniciar sesión" data-placement="left">Iniciar sesión</button>
        </span>
        );
    }
    render(){
        return this.html;
    }
}

export default SignedButton;