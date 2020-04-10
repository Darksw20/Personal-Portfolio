<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link rel="stylesheet" href="styles/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles/css/styles.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet">
    <title>Skills</title>
    <link rel="shortcut icon" href="styles/img/favicon.png" type="image/png" />
</head>
<body>
<?php require 'claves.php' ?>
    <header style="float:left">
        <?php 
            require('navbar.php');
        ?>
    </header>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 subtitles">
                <h1>> Skills_</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-6 col-md-6 ">
                <div class="row listicons">
                    <ul class="list-inline">
                        <div class="list-inline-item micons">
                            <img width="80px" src="styles/img/Diseños-16.png">
                            <h6>Teamwork</h6>        
                        </div>
                        <div class="list-inline-item micons">
                            <img width="80px" src="styles/img/Diseños-17.png">
                            <h6>Leadership</h6>
                        </div>
                        <div class="list-inline-item micons">
                            <img width="80px" src="styles/img/Diseños-18.png">
                            <h6>Problem Solving</h6>
                        </div>
                        <div class="list-inline-item micons">
                            <img width="80px" src="styles/img/Diseños-19.png">
                            <h6>Critical thinking</h6>
                        </div>
                    </ul>
                </div>
                <div class="col-sm-6 subtitles">
                    <h2>Courses</h2>
                    <p>
                        Diseño de Aplicaciones Digitales| CETI
                        <br>
                        Guadalajara, México
                        <br>
                        05/17
                    </p>
                    <br>
                    <p> 
                        Diseño de Productos Digitales | CETI
                        <br>
                        Guadalajara, México
                        <br>
                        09/17
                    </p>
                </div>
                <div class="col-sm-6 subtitles">
                    <h2>Languages</h2>
                    <ul class="list-inline">
                        <div class="list-inline-item">
                            <div class="progress" data-percentage="<?php echo($s_esp) ?>">
                                <span class="progress-left">
                                    <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar"></span>
                                </span>
                                <div class="progress-value" style="margin:auto;">
                                    <div>
                                    <?php echo($t_esp) ?>%<br>
                                        <span>Español</span>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                        <div class="list-inline-item">
                            <div class="progress" data-percentage="<?php echo($s_eng) ?>">
                                    <span class="progress-left">
                                        <span class="progress-bar"></span>
                                    </span>
                                    <span class="progress-right">
                                        <span class="progress-bar"></span>
                                    </span>
                                    <div class="progress-value" style="margin:auto;">
                                        <div>
                                        <?php echo($t_eng) ?>%
                                            <br>
                                            <span>Ingles</span>
                                        </div>
                                    </div>
                            </div>  
                        </div>                    
                    </ul>
                </div>
            </div>
            <div class="col-xs-3 col-md-3 subtitles" style="align-items: center;">
                <div>
                    <h2>Programming languages</h2>
                </div>
                <div>
                    <ul class="list-inline">
                        <div class="list-inline-item">
                            <div class="progress" data-percentage="<?php echo($s_java) ?>">
                                <span class="progress-left">
                                    <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar"></span>
                                </span>
                                <div class="progress-value" style="margin:auto;">
                                    <div>
                                    <?php echo($t_java) ?>%<br>
                                        <span>JAVA</span>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div class="list-inline-item">
                            <div class="progress" data-percentage="<?php echo($s_c) ?>">
                                <span class="progress-left">
                                    <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar"></span>
                                </span>
                                <div class="progress-value" style="margin:auto;">
                                    <div>
                                    <?php echo($t_c) ?>%<br>
                                        <span>C/C++</span>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div class="list-inline-item">
                            <div class="progress" data-percentage="<?php echo($s_php) ?>">
                                <span class="progress-left">
                                    <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar"></span>
                                </span>
                                <div class="progress-value" style="margin:auto;">
                                    <div>
                                    <?php echo($t_php) ?>%<br>
                                        <span>PHP</span>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div class="list-inline-item">
                            <div class="progress" data-percentage="<?php echo($s_html) ?>">
                                <span class="progress-left">
                                    <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar"></span>
                                </span>
                                <div class="progress-value" style="margin:auto;">
                                    <div>
                                    <?php echo($t_html) ?>%<br>
                                        <span>HTML/CSS</span>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div class="list-inline-item">
                            <div class="progress" data-percentage="<?php echo($s_sql) ?>">
                                <span class="progress-left">
                                    <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar"></span>
                                </span>
                                <div class="progress-value" style="margin:auto;">
                                    <div>
                                    <?php echo($t_sql) ?>%<br>
                                        <span>SQL</span>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div class="list-inline-item">
                            <div class="progress" data-percentage="<?php echo($s_assembler) ?>">
                                <span class="progress-left">
                                    <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar"></span>
                                </span>
                                <div class="progress-value" style="margin:auto;">
                                    <div>
                                    <?php echo($t_assembler) ?>%<br>
                                        <span>Assembler</span>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </ul>
                </div>
                
            </div>
            <div class="col-xs-4 col-md-2 offset-md-1 subtitles">
                <div class="row">
                    <div>
                        <h2>Tools</h2>
                    </div>
                    <ul class="list-inline">
                        <div class="list-inline-item">
                            <div class="progress" data-percentage="<?php echo($s_git) ?>">
                                <span class="progress-left">
                                    <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar"></span>
                                </span>
                                <div class="progress-value" style="margin:auto;">
                                    <div>
                                    <?php echo($t_git) ?>%<br>
                                        <span>Git</span>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div class="list-inline-item">
                            <div class="progress" data-percentage="<?php echo($s_as) ?>">
                                <span class="progress-left">
                                    <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar"></span>
                                </span>
                                <div class="progress-value" style="margin:auto;">
                                    <div>
                                    <?php echo($t_as) ?>%<br>
                                        <span>Android Studio</span>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div class="list-inline-item">
                            <div class="progress" data-percentage="<?php echo($s_illustrator) ?>">
                                <span class="progress-left">
                                    <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar"></span>
                                </span>
                                <div class="progress-value" style="margin:auto;">
                                    <div>
                                    <?php echo($t_illustrator) ?>%<br>
                                        <span>Illustrator</span>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div class="list-inline-item">
                            <div class="progress" data-percentage="<?php echo($s_photoshop) ?>">
                                <span class="progress-left">
                                    <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar"></span>
                                </span>
                                <div class="progress-value" style="margin:auto;">
                                    <div>
                                    <?php echo($t_photoshop) ?>%<br>
                                        <span>Photoshop</span>
                                    </div>
                                </div>
                            </div>  
                        </div>
                        <div class="list-inline-item">
                            <div class="progress" data-percentage="<?php echo($s_office) ?>">
                                <span class="progress-left">
                                    <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar"></span>
                                </span>
                                <div class="progress-value" style="margin:auto;">
                                    <div>
                                    <?php echo($t_office) ?>%<br>
                                        <span>Office</span>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </ul>
                        
                </div>
             </div>   
        </div>
    </div>
    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
</body>
</html>