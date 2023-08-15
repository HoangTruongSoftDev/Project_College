<?php
declare(strict_types=1);

/*
 * Project_PHP register.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-03-23
 * (c) Copyright 2023 Hoang Truong 
 */
if (isset($_SESSION["shoppingCartId"])) {
    unset($_SESSION["shoppingCartId"]);
}
if (isset($_SESSION["customerId"])) {
    unset($_SESSION["customerId"]);
}
if (isset($_SESSION["billingAddress"])) {
    unset($_SESSION["billingAddress"]);
}
if (isset($_SESSION["shippingAddress"])) {
    unset($_SESSION["shippingAddress"]);
}
if (isset($_SESSION["SubTotal"])) {
    unset($_SESSION["SubTotal"]);
}
unset($_SESSION["displayForm"]);
?>
<!DOCtype html>
<html lang="en-CA">
<head>
    <title>Register</title>
    <script src="<?= WEB_PUBLIC_PATH.'js/register.js' ?>"></script>
    <script src="<?= WEB_PUBLIC_PATH.'js/jquery-3.6.3.js' ?>"></script>
    <link rel="stylesheet" type="text/css" href="<?= WEB_PUBLIC_PATH."css/register.css" ?>">
</head>
<body>
<main>
    <div class="center-div"><h1 style="color: white; font-size: 60px">Shopping Online</h1></div>
    <form id="registerForm" method="post">
        <h1>Register here</h1>
        <input type="hidden" name="action" value="register">
        <div>
            <label for="username">Username: </label>
            <input type="text" maxlength="32" name="username" id="username">
        </div>
        <div>
            <label for="passwordHash">Password: </label>
            <input type="password" maxlength="128" name="passwordHash" id="passwordHash">
        </div>
        <div>
            <label for="repasswordHash">Re-enter Password: </label>
            <input type="password" maxlength="128" name="repasswordHash" id="repasswordHash">
        </div>
        <input type="submit" value="Register">
        <button type="button" id="redirectLogin">Back To Login</button>
    </form>
    
</main>
</body>
</html>