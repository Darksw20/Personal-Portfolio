<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Home</title>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link rel="stylesheet" href="styles/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles/css/styles.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="shortcut icon" href="styles/img/favicon.png" type="image/png" />
  </head>
  <body>
  <header class="float-left">
      <?php 
        require('navbar.php');
      ?>
  </header>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-sm-6 titles">
          <h1>> Hi, I´m Ricardo Navarro_</h1>
          <h2>Android Developer / Front-End Developer / Tech Enthusiast</h2>
          <br>
          <button type="titles button" onclick="location.href='http://localhost/portafolio/contact.html'">
            Contact Me
          </button>
        </div> 
        <div class="titles">
          <img src="styles/img/cuervo.png" alt="cuervo">
        </div>         
      </div>
    </div>
     
    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>