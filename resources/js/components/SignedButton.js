import React, {Component} from 'react';

class SignedButton extends Component{
    constructor(){
        super();
        this.html = [];
    }

    componentWillMount(){
        this.html.push(
            
        );
    }
    render(){
        return (
        <div>
            <span data-toggle="tooltip" class="agregarArticulo">
                <button id="agregarArticulo" data-target="#fullHeightModalBottom" data-toggle="modal" class="btn acceder cd-signin waves-effect waves-light" title="Agregar Articulo" data-placement="left"> <i class="fa fa-plus"></i></button>
            </span>
            <a id="cerrarSesion" class="cerrarSesion">Cerrar sesión</a>
        </div>
        );
    }
}

export default SignedButton;