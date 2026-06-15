<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mensagem = htmlspecialchars($_POST["mensagem"]);
    echo "<h1>Mensagem recebida!</h1>";
    echo "<p>" . $mensagem . "</p>";
}
?>
