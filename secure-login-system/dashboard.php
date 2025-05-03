<?php
session_start();
if (!isset($_SESSION['user'])) {
  header("Location: index.html");
  exit;
}
?>
<h2>Welcome, <?php echo htmlspecialchars($_SESSION['user']); ?>!</h2>
<p>You are logged in.</p>
<a href="logout.php">Logout</a>
