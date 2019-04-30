<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$data = json_decode(file_get_contents("php://input"));

include "database.php";
$problema = $data->problema;
$sql = "INSERT INTO problema (id, img, report, dataSalva, rua,cep, bairro, localidade, uf, descricao, estado, rg, tipoProblema)
VALUES ($data->tamanho,'$data->nome',$problema->report,'$problema->dataSalva','$problema->rua','$problema->cep','$problema->bairro',
'$problema->localidade','$problema->uf','$problema->descricao','$problema->estado','$problema->rg','$problema->tipoProblema')";
$qry = $conn->query($sql);
$conn->close();

?>