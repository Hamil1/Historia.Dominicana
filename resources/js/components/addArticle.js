import React, {Component} from 'react';

class AddArticle extends Component{
    render(){
        const colorWhite = {
            color: white
        };
        return(
            <div className="modal-dialog modal-full-height modal-bottom" role="document">
                {/* Content */}
                <div className="modal-content">
                {/* Header */}
                <div className="modal-header magenta">
                    <h4 className="modal-title w-100" id="myModalLabel">Agregar Articulo</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" style={colorWhite}>×</span>
                    </button>
                </div>
                {/* Body */}
                <div className="modal-body">
                    <textarea name="cuerpoArticulo" id="cuerpoArticulo" cols="30" rows="10"></textarea>
                </div>
                {/* Footer */}
                <div className="modal-footer">
                    <button type="button" className="btn botonRojo waves-effect waves-light" data-dismiss="modal">Cerrar</button>
                    <button type="button" className="btn botonMagenta waves-effect waves-light">Guardar cambios</button>
                </div>
                </div>
                {/* Content */}
            </div>
        );
    }
}

export default AddArticle;