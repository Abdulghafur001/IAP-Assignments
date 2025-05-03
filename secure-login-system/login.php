<?php
session_start();
require 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = $_POST["username"];
  $password = $_POST["password"];

  $stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username");
  $stmt->bindParam(':username', $username);
  $stmt->execute();
  $user = $stmt->fetch(PDO::FETCH_ASSOC);

  if ($user && password_verify($password, $user['password'])) {
    $_SESSION['user'] = $user['username'];
    setcookie("auth", session_id(), [
      'expires' => time() + 3600,
      'path' => '/',
      'secure' => false,
      'httponly' => true,
      'samesite' => 'Strict'
    ]);
    header("Location: dashboard.php");
    exit;
  } else {
    echo "Invalid username or password.";
  }
}
?>