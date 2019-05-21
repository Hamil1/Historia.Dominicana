import React, {Component} from 'react';

class signedb extends Component{
    
    render(){
        return (
        <div>
            <span data-toggle="tooltip" className="agregarArticulo">
                <button id="agregarArticulo" data-target="#fullHeightModalBottom" data-toggle="modal" className="btn acceder cd-signin waves-effect waves-light" title="Agregar Articulo" data-placement="left"> <i className="fa fa-plus"></i></button>
            </span>
            <a id="cerrarSesion" className="cerrarSesion">Cerrar sesión</a>
        </div>
        );
    }
}

export default signedb;