import React ,{Component} from 'React';

class Loginb extends Component{

    googleLoginHandler = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(result => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            let token = result.credential.accessToken;
            // The signed-in user info.
            let user = result.user;
            // ...
          }).catch(error => {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // The email of the user's account used.
            let email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;
            // ...

            console.log(`Tenemos un error ${errorMessage}`);
          });
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