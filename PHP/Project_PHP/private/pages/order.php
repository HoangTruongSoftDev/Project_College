<?php
declare(strict_types=1);

/*
 * Project_PHP order.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-04-23
 * (c) Copyright 2023 Hoang Truong 
 */

use Truong\OnlineShopping\DAL\DAOs\ShoppingCartProductDAO;
?>
<!DOCTYPE html>
<html lang="en-CA">
<head>
    <title> Review Order </title>
    <script src="<?= WEB_PUBLIC_PATH.'js/order.js' ?>" defer></script>
    <script src="<?= WEB_PUBLIC_PATH.'js/jquery-3.6.3.js' ?>" defer></script>
    <link rel="stylesheet" type="text/css" href="<?= WEB_PUBLIC_PATH."/css/order.css" ?>">
</head>
<body>
<header>
    <?php
    require FRAGMENTS_PATH."standard.header.php";
    ?>
</header>
<main>
    <?php
    if (!isset($_SESSION["shoppingCartId"])) {
        
        ?>
        <h1> You Have Not Added Any Product Yet</h1>
        <?php
    }
    else {
        try {
            $shoppingCart = ShoppingCartProductDAO::dbSelectByShopppingCartId((int) $_SESSION["shoppingCartId"]);
            if ($shoppingCart == null) {
                throw new Exception("No product in Cart");
            }
            if (!isset($_SESSION["displayForm"])) {
                ?>
                <div class="header-form">
                    <h1>Verify User Information Before Checkout</h1>
                </div>
                
                <form id="loginForm" method="post">
                    <div>
                        <label for="username">Username: </label>
                        <input type="text" maxlength="32" name="username" id="username">
                    </div>
                    <div>
                        <label for="passwordHash">Password: </label>
                        <input type="password" maxlength="128" name="passwordHash" id="passwordHash">
                    </div>
                    <button type="submit">Verify</button>
                    <button id="cancel"> Cancel </button>
                </form>
                    <?php
            }
            elseif ($_SESSION["displayForm"] == "reviewShoppingCart") {
            
            ?>
                    <div class="header-form">
                        <h1>Review Products Before Checkout</h1>
                    </div>
                
            <form id='reviewShoppingCart' method="post">
                
                <?php
                foreach ($shoppingCart as $currentProductInCart) {
                    if ($currentProductInCart->getQuantity() == 0){
                        continue;
                    }

                    echo "
        <table>
            <caption><h2>".$currentProductInCart->getProductDTO()->getDisplayName()."</h2></caption>
            <thead>
                    <tr>
                        <th>Category</th>
                        <th>Description</th>
                    </tr>
            </thead>
            <tbody>
                    <tr>
                        <td> Product Name </td>
                        <td>".$currentProductInCart->getProductDTO()->getDisplayName()."</td>
                    </tr>
                    
                    <tr>
                        <td> Product Description </td>
                        <td>".$currentProductInCart->getProductDTO()->getDescription()."</td>
                    </tr>
                    
                    <tr>
                        <td> Product Image </td>
                        <td><img src='".$currentProductInCart->getProductDTO()->getImageUrl()."' style='height: 200px; width: 200px' alt='Image of ".$currentProductInCart->getProductDTO()->getDisplayName()."'></td>
                    </tr>
                    
                    <tr>
                        <td> Product Price </td>
                        <td> ".$currentProductInCart->getProductDTO()->getUnitPrice()." </td>
                    </tr>
                    
                    <tr>
                        <td> Quantity In Cart</td>
                        <td> ".$currentProductInCart->getQuantity()." </td>
                    </tr>
            </tbody>
        </table>
        ";
                }
                ?>
                <br>
                <button id="getBillingAddressForm">Next</button>
                <button id="cancel"> Cancel </button>
            </form>
            <?php
            }
            elseif ($_SESSION["displayForm"] == "reviewBillingAddress") {
                ?>
                <div class="header-form">
                    <h1>Billing Address</h1>
                </div>
            <form id='reviewBillingAddress' method="post">
                    <input type="text" id="billingAdress" name="billingAddress" maxlength="256">
                    <br/>
                    <button id="getShoppingCartForm">Previous</button>
                    <button type="submit" id="getShippingAddressFormAndSubmitBillingAddress">Next</button>
                    <button id="cancel"> Cancel </button>
            </form>
            
            <?php
            }
            elseif($_SESSION["displayForm"] == "reviewShippingAddress") {
                ?>
                <div class="header-form">
                    <h1>Shipping Address</h1>
                </div>
                <form id='reviewShippingAddress' method="post">
                    <input type="text" id="shippingAddress" name="shippingAddress" maxlength="256">
                    <br/>
                    <button id="getBillingAddressForm">Previous</button>
                    <button type="submit" id="getSummaryOrderAndSubmitShippingAddress">Next</button>
                    <button id="cancel"> Cancel </button>
                </form>
                
                <?php
            }
            elseif ($_SESSION["displayForm"] == "summaryOrder") {
                if (!isset($_SESSION["shippingAddress"]) || !isset($_SESSION["billingAddress"])) {
                    ?>
                    <h1>Missing the Billing Address or Shipping Address</h1>
                        <?php
                }
                else {
                    $shoppingCart = ShoppingCartProductDAO::dbSelectByShopppingCartId((int) $_SESSION["shoppingCartId"]);
                    ?>
                    
                    <div class="header-form">
                        <h1> Order Summary </h1>
                    </div>
                    <table border='1' cellpadding='5' cellspacing='0' style='width:100%; text-align:center;'>
                        <tbody>
                            <tr>
                                <td> Product </td>
                                <td> Quantity </td>
                            </tr>
                            <?php
                            foreach ($shoppingCart as $currentProductIncart) {
                                if ($currentProductIncart->getQuantity() > 0 ) {
                                    echo "<tr><td>".$currentProductIncart->getProductDTO()->getDisplayName()."</td>
                                      <td>".$currentProductIncart->getQuantity()."</td></tr>";
                                }
                            }
                            ?>
                        </tbody>
                    </table>
                    <br/>
                    <table border='1' cellpadding='5' cellspacing='0' style='width:100%; text-align:center;'>
                        <tbody>
                        <tr>
                            <td> Shipping Address </td>
                            <td> <?= $_SESSION["shippingAddress"] ?> </td>
                        </tr>
                        <tr>
                            <td> Billing Address </td>
                            <td> <?= $_SESSION["billingAddress"] ?> </td>
                        </tr>
                        <tr>
                            <td> Total </td>
                            <td> <?= number_format($_SESSION["SubTotal"], 2, ".", " "); ?>$ </td>
                        </tr>
                        </tbody>
                    </table>
                    <div id="button-order-summary">
                        <button id="getShippingAddressForm">Previous</button>
                        <button id="placeOrder">Place Order</button>
                        <button id="cancel"> Cancel </button>
                    </div>
                    
                        <?php
                }
                ?>
                
                    <?php
            }
        } catch (Exception $e) {
            ?>
            <h1> You Have Not Added Any Product Yet</h1>
            <?php
        }
        ?>
        
        <?php
    }
    ?>
</main>
<footer>
    <?php
    require FRAGMENTS_PATH."standard.footer.php";
    ?>
</footer>
</body>

</html>

