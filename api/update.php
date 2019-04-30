<?php
include "database.php";

$data = json_decode(file_get_contents("php://input"));

$sql = "UPDATE problema SET report = $data->report WHERE id = $data->id";
$qry = $conn->query($sql);
echo $qry;
$conn->close();
?>