<?php
include "database.php";

$data = json_decode(file_get_contents("php://input"));

$op = $data->op;
$sql = "SELECT * FROM $op";

$result = $conn->query($sql);

if ($result->num_rows >= 0) {
    // output data of each row
     $data = array() ;
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);
} 
else {
    echo json_encode("erro");
}
$conn->close();
?>