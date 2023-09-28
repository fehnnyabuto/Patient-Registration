<!DOCTYPE html>
<html>
<head>
    <title>Patient Registration System</title>
    <link rel="stylesheet" type="text/css" href="indexstyle.css">
    <script src="indexscript.js"></script>
</head>
<body>
    <h1>Welcome to the Patient Registration System</h1>
    <form action="login.php" method="POST">
        <label for="username">Username (First Name):</label>
        <input type="text" id="username" name="username" required><br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br>

        <input type="submit" value="Login">
    </form>
    <a href="register.php">Create New Account</a>
</body>
</html>
