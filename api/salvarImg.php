<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


include "database.php";

$arquivo_tmp = $_FILES['arquivo']['tmp_name'];
$nome = $_FILES['arquivo']['name'];

$extensao = pathinfo($nome, PATHINFO_EXTENSION);

$extensao = strtolower($extensao);

// Somente imagens, .jpg;.jpeg;.gif;.png
// Aqui eu enfileiro as extensões permitidas e separo por ';'
// Isso serve apenas para eu poder pesquisar dentro desta String
if (strstr('.jpg;.jpeg;.gif;.png', $extensao)) {
    // Cria um nome único para esta imagem
    // Evita que duplique as imagens no servidor.
    // Evita nomes com acentos, espaços e caracteres não alfanuméricos
    $novoNome = uniqid(time()) . '.' . $extensao;
    
    // Concatena a pasta com o nome
    $destino = '../src/assets/image/imagens/'. $novoNome;
    // tenta mover o arquivo para o destino

    if (@move_uploaded_file($arquivo_tmp, $destino)) {
        echo json_encode($novoNome);
    }
} else
    echo 'Você poderá enviar apenas arquivos "*.jpg;*.jpeg;*.gif;*.png"<br />';
