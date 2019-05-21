import React ,{Component} from 'React';

class Loginb extends Component{
    render(){
        return(
            <span data-toggle="modal">
                <button id="iniciarSesion" data-toggle="modal" className="accederLogin cd-signin" data-toggle="tooltip" title="Iniciar sesión" data-placement="left">Iniciar sesión</button>
            </span>
        );
    }
}

export default Loginb;