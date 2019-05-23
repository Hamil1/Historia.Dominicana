import React ,{Component} from 'React';

class Loginb extends Component{

    googleLoginHandler = ()=>{
        console.log(`Esta funcionando el login de google`);
    }
    render(){
        return(
            <span data-toggle="modal">
                <button id="googleButton" onClick={this.googleLoginHandler}><img src="/imagenes/googleButton.png" height="20"/>Sign in with Google</button>
                <button id="iniciarSesion" data-toggle="modal" className="accederLogin cd-signin" data-toggle="tooltip" title="Iniciar sesión" data-placement="left">Iniciar sesión</button>
            </span>
        );
    }
}

export default Loginb;