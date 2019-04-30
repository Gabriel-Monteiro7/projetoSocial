<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$data = json_decode(file_get_contents("php://input"));

include "database.php";
$user = $data->user;
$sql = "INSERT INTO user (id,nomeCompleto,senha,rg,cpf,cep,contato)
VALUES ($data->tamanho,'$user->nomeCompleto','$user->senha','$user->rg','$user->cpf','$user->cep','$user->contato')";
$qry = $conn->query($sql);
$conn->close();

?>