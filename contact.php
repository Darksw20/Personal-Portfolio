<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link rel="stylesheet" href="styles/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles/css/styles.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <title>Contact</title>
    <link rel="shortcut icon" href="styles/img/favicon.png" type="image/png" />
</head>
<body>
    <header style="float:left">
        <?php 
            require('navbar.php');
        ?>
    </header>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 subtitles">
                <h1>> Contact Me_</h1>
            </div>
        </div>
        <div class="row justify-content-between">
            <div class="col-sm-5 subtitles">
                <p>
                    If you have any question, please don`t hesitate to contact using form below...
                </p>
                <form>
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col">                      
                                <input type="text" class="form-control" placeholder="Name">                                   
                            </div> 
                            <div class="col">                  
                                <input type="email" class="form-control" placeholder="Email">             
                            </div>     
                        </div>            
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Title">
                    </div>
                    <div class="form-group">
                        <textarea type="text" class="form-control" placeholder="Message" rows="3"></textarea>
                    </div>
                    <div class="titles">
                        <button type="submit" >Send</button>       
                    </div>
                      
                </form>
            </div>
            <div class="col-sm-6 subtitles">
                <!--Google map-->
                <div id="map-container-google-1" class="z-depth-1-half map-container" style="height: 500px">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92132.68149420693!2d-103.4127372719223!3d20.637404204275555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDMxJzUwLjYiTiAxMDPCsDI5JzQ4LjQiVw!5e0!3m2!1ses-419!2smx!4v1549570733411" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
                <!--Google Maps-->
            </div>
            
        </div>
        
        
    </div>

    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
</body>
</html>