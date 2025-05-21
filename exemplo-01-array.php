<?php
$coco = "coco_verde";
$frutas = array('melancia','banana','abacaxi');
$frutas2 = ['morango','banana','uva'];
(string)$texto = "eu sou um texto";
array_push($frutas, $coco);


echo "tipo de dado: </br>" . gettype($frutas) . "</br> e: " . gettype($frutas2).PHP_EOL;
echo "<br>";
echo gettype($texto);
echo "<hr>";


echo "<br>";
print_r($frutas);
echo "<br>";
print_r($frutas2);
echo "<hr>";

?>
