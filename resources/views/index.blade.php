<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor......
-->

<html>
    <head>
        <meta charset="UTF-8">
    <title>Historia Dominicana</title>
        <!--Css-->
        <link rel="stylesheet" type="text/css" href="css/Style.css">
        <link rel="stylesheet" type="text/css" href="css/modalLogin.css">
        <link rel="stylesheet" type="text/css" href="css/normalize.css">
        <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"> -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/reset.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
        <link rel="stylesheet" href="{{ url('css/modalLogin/modalLogin.css') }}" />
        <link rel="stylesheet" href="{{ url('css/alertify/alertify.css') }}" />
        <link rel="stylesheet" href="{{ url('css/alertify/themes/default.css') }}" />
        <link rel="stylesheet" href="{{ url('terceros/MDB_Free/css/mdb.min.css') }}" />

    </head>
    <body>
            <div>
                <div id="contenedorAcceder" class="contenedorAcceder">
                    <div id="botonesLogin" class="botonesLogin">
                        
                    </div>
                    <!-- <span data-toggle="modal"><button id="agregarArticulo" data-toggle="modal" class="btn acceder cd-signin" data-toggle="tooltip" title="Agregar Articulo" data-placement="left"> <i class="fa fa-plus"></i></button></span> -->
                </div>
            </div>
            <header>
                <div id="mostrarNav"></div>
                <nav id="menu"></nav>
            </header>
<!-- Full Height Modal Right -->
<div class="modal fade bottom" id="fullHeightModalBottom" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="display: none;" aria-hidden="true">
      
</div>
  <!-- Full Height Modal Right -->

<div class="cd-user-modal" id="modalLog"> <!-- this is the entire modal form, including the background -->

</div> <!-- cd-user-modal -->


        <div id="articulo">
            
        </div>
        <br>

        <?php
        // put your code here
        ?>
        <!--Todos los documentos JavaScript-->
        <!-- The core Firebase JS SDK is always required and must be listed first -->
        <script src="https://www.gstatic.com/firebasejs/6.0.2/firebase-app.js"></script>
          <!-- Add Firebase products that you want to use -->
        <script src="https://www.gstatic.com/firebasejs/6.0.2/firebase-auth.js"></script>
        <script src="https://www.gstatic.com/firebasejs/6.0.2/firebase-firestore.js"></script>

        <!-- TODO: Add SDKs for Firebase products that you want to use
            https://firebase.google.com/docs/web/setup#config-web-app -->
        <script>
            // Your web app's Firebase configuration
            var firebaseConfig = {
              apiKey: "AIzaSyDHy-d-9EUXw5ZvYh6PR4eyDMJxHjvFxC0",
              authDomain: "historia-dominicana-eaeb0.firebaseapp.com",
              databaseURL: "https://historia-dominicana-eaeb0.firebaseio.com",
              projectId: "historia-dominicana-eaeb0",
              storageBucket: "historia-dominicana-eaeb0.appspot.com",
              messagingSenderId: "836620723720",
              appId: "1:836620723720:web:d41d0d026b4bb8da"
            };
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
        </script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" type="text/javascript"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.13.0/umd/popper.min.js"></script>
        <!-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script> -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.0/TweenMax.min.js"></script>
        <script src="/js/Scrollmagic/ScrollMagic.js" type="text/javascript"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/jquery.ScrollMagic.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js"></script>
        <script src="/js/velocity.min.js" type="text/javascript"></script>
        <script src="/js/Scrollmagic/plugins/animation.velocity.js" type="text/javascript"></script>
        <script src="/js/alertify/alertify.js"></script>
        <script src="/js/modalLogin/modalLogin.js"></script>
        <script src="/terceros/ckeditor/ckeditor.js"></script>
        <script src="/terceros/MDB_Free/js/mdb.min.js"></script>
        <script src="/js/app.js" type="text/javascript"></script>
    </body>