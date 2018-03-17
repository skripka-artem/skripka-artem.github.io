<!DOCTYPE HTML>
<html>
<head>
<style>
.error {
color: #FF0000;
}
</style>
</head>
<body>

<?php

$emailErr =  $phone = "";
$email = $phone = "";

  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Invalid email format";
    }
  }

  if (empty($_POST["phone"])) {
    $phone = "";
  } else {
    $phone = test_input($_POST["phone"]);
    if (!preg_match("\d{3}-\d{3}-\d{4}$",$phone)) {
      $phoneErr = "Invalid phone";
    }
  }

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>

<p><span class="error">* required field.</span></p>
<form method="post" action="<?php echohtmlspecialchars($_SERVER["PHP_SELF"]);?>">
  E-mail: <input type="text" name="email">
  <span class="error">* <?php echo $emailErr;?></span>
  <br><br>
  phone: <input type="text" name="phone">
  <span class="error"><?php echo $phoneErr;?></span>
  <input type="submit" name="submit" value="Submit">
</form>

<?php
echo $email;
echo "<br>";
echo $phone;
?>

</body>
</html>
