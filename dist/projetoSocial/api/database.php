<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

//localhost root projetosocial
$servername = "sql113.epizy.com"; //sql113.epizy.com epiz_23967150 yNe8L2bjokYqs epiz_23967150_projetosocial
$username = "epiz_23967150";
$password = "yNe8L2bjokYqs";
$dbname = "epiz_23967150_projetosocial";
$conn = new mysqli($servername, $username, $password, $dbname);
mysqli_set_charset($conn, "utf8");
?>
