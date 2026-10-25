<?php
$host ='localhost';
$dbname = 'student_db';
$username ='root';
$password ='';

try{
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->serAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "connection successful!";
}catch(PDOException $e){
    die("connection failed: ". $e->getMessage());
}
?>
