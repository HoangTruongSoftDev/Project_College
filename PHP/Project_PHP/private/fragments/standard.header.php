<?php
declare(strict_types=1);

/*
 * Project_PHP standard.header.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-04-23
 * (c) Copyright 2023 Hoang Truong 
 */
?>
<!DOCtype html>
<html lang="en-CA">
<head>
    <link rel="stylesheet" type="text/css" href="<?= WEB_PUBLIC_PATH."css/header.css" ?>">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Login Here</title>
</head>
<body>
        <nav class="menu-options">
            <ul>
                <li><a href="/Project_PHP/products"> <i class="fa fa-list" aria-hidden="true"></i> Product List</a></li>
                <li><a href="/Project_PHP/shoppingCart"><i class="fa fa-shopping-basket" aria-hidden="true"></i> Cart</a></li>
                <li><a href="/Project_PHP/order/confirmation"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i> Order</a></li>
                <li><a href="/Project_PHP/"><i class="fa fa-sign-out" aria-hidden="true"></i> Exit</a></li>
            </ul>
        </nav>
</body>
</html>

