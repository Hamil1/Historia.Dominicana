/*
 Project: HistoriaDominicana
 File: Script
 Created by Hamil on May 5, 2018 - 10:13:27 AM.
 */

 import React, {Component} from 'react';
 import ReactDOM from 'react-dom';
 import App from './components/Index';
 import {SceneFade} from './ScrollMagic';
 import axios from 'axios';
 import Menu from './components/Menu';

$(document).ready(function(){
    console.log("El documento 'Script' de Historia Dominicana está listo.");

    setTimeout(() => {//Tenemos que esperar a que ReactDom haga render para ponerle las Escenas a nuesta pagina :)
        SceneFade('div.desarrolloArticulo div.magic');
    }, 2000);//Para que nuestra Escena se cree al cargar la pagina

    CKEDITOR.replace('cuerpoArticulo');
    $('[data-toggle="tooltip"]').tooltip();

    $(document).on('unload load ready click', ()=>{
        SceneFade('div.desarrolloArticulo div.magic');
    });
    
    $(document).on('click','ul li a', function(){
        $('ul.menu li').removeClass("active");
        $(this).parent().addClass("active");
    });

    $(document).on('click','div#mostrarNav',function(){
        $('nav#menu').toggleClass('mostrar');
        $(this).toggleClass('cerrar');
    });

    $(document).on('click','button#iniciarSesion',function(){
        $.get('login', ((data)=>{
            $('div#modalLog').html(data);
            // setTimeout(()=>{
            //     $('li a#iniciarSesion').click();
            // }, 1000);
        }));
    });

    $(document).on('click','input[formulario="cd-signup"]',function(){
        var datos = $('#signup').serialize();
        datos += "&metodo=crearUsuario";
        if(validarEmail($('form#signup input[type="email"]').val())){
            $.ajax({
                type: "POST",
                url: "controladores/mainController.php",
                data: datos,
                dataType: "json"
            }).done(function(data){
                (data.option == 'error')?alertify.error(data.message):alertify.success(data.message);
            });
        }
    });

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            let user = firebase.auth().currentUser;

            if(user != null){
                alert(`Welcome ${user.email}`);
            }
        } else {
          // No user is signed in.
        }
      });
    
    $(document).on('click','input[formulario="cd-login"]',function(){
        var datos = $('form#login').serialize();
        datos += "&metodo=iniciarSesion";
        let email = document.getElementById('signin-email').value;
        let password = document.getElementById('signin-password').value;

        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            
            alert(`${errorMessage}`);
          });
    });

    $(document).on('click','a#cerrarSesion',function(){
        $.ajax({
            type: "POST",
            url: "controladores/mainController.php",
            data: "metodo=cerrarSesion",
            dataType: "json"
        }).done(function(data){
            $('div#botonesLogin').html(data.boton);
        });
    });

    ReactDOM.render(<Menu />, document.getElementById('menu'));

    ReactDOM.render(<App />, document.getElementById('articulo'));
});
