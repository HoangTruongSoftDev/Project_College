<?php
declare(strict_types=1);

/*
 * Project_PHP login.php
 *
 * @author Hoang Truong (johnk)
 * @since 2023-04-09
 * (c) Copyright 2023 Hoang Truong
 */
if (isset($_SESSION["shoppingCartId"])) {
    unset($_SESSION["shoppingCartId"]);
}
if (isset($_SESSION["orderId"])) {
    unset($_SESSION["orderId"]);
}
if (isset($_SESSION["customerId"])) {
    unset($_SESSION["customerId"]);
}
unset($_SESSION["billingAddress"]);
unset($_SESSION["shippingAddress"]);
unset($_SESSION["SubTotal"]);
unset($_SESSION["displayForm"]);
?>
<!DOCtype html>
<html lang="en-CA">
<head>
    <script src="<?= WEB_PUBLIC_PATH.'js/login.js' ?>"></script>
    <script src="<?= WEB_PUBLIC_PATH.'js/jquery-3.6.3.js' ?>"></script>
    <link rel="stylesheet" type="text/css" href="<?= WEB_PUBLIC_PATH."css/login.css" ?>">
    <title>Login</title>
</head>
<body>
<main>
    <div class="center-div"><h1 style="color: white; font-size: 60px">Shopping Online</h1></div>
    <form id="loginForm" method="post">
        <h2>Login User</h2>
        <input type="hidden" name="action" value="login">
        <div>
            <label for="username">Username: </label>
            <input type="text" maxlength="32" name="username" id="username">
        </div>
        <div>
            <label for="passwordHash">Password: </label>
            <input type="password" maxlength="128" name="passwordHash" id="passwordHash">
        </div>
        <input type="submit" value="Login" name="login">
        <button type="button" id="redirectRegister">Register</button>
    </form>
</main>
</body>
</html>





