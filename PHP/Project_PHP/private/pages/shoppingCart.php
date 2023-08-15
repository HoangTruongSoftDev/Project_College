<?php
declare(strict_types=1);

/*
 * Project_PHP shoppingCart.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-04-19
 * (c) Copyright 2023 Hoang Truong 
 */
use Truong\OnlineShopping\DAL\DAOs\ShoppingCartDAO;
use Truong\OnlineShopping\DAL\DAOs\ShoppingCartProductDAO;

if (isset($_SESSION["SubTotal"])) {
    unset($_SESSION["SubTotal"]);
}
unset($_SESSION["displayForm"]);
$shippingFee = 10.00;
$subTotal = $shippingFee;
$gst_tax = 0.00;
$qst_tax = 0.00;
$total = 0.00;
$sub_total_before_ship_tax = 0.00;
?>
<!DOCTYPE html>
<html lang="en-CA">
<head>
    <title> Your Cart </title>
    <script src="<?= WEB_PUBLIC_PATH.'js/shoppingCart.js' ?>" defer></script>
    <script src="<?= WEB_PUBLIC_PATH.'js/jquery-3.6.3.js' ?>" defer></script>
    <link rel="stylesheet" type="text/css" href="<?= WEB_PUBLIC_PATH."css/shoppingCart.css" ?>">
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
            $shoppingCartDTO = ShoppingCartDAO::dbSelectById((int) $_SESSION["shoppingCartId"]);
            if ($shoppingCart == null) {
                ?>
                    <h1> Your cart is empty </h1>
                    <?php
            }
            elseif ($shoppingCartDTO->getStatus()->value  == "ordered") {
                
                ?>
                <h1> Your cart is empty </h1>
                <?php
            }
            else {
            ?>
            <form id='shoppingCart' method="post">
            
            <input type='hidden' value='updateProductsFromCart' name='action'>
            <?php
            $sum_quantity = 0;
            foreach ($shoppingCart as $currentProductInCart) {
                $sum_quantity += $currentProductInCart->getQuantity();
                if ($currentProductInCart->getQuantity() == 0){
                    continue;
                }
                $subTotal += $currentProductInCart->getQuantity() * $currentProductInCart->getProductDTO()->getUnitPrice();
                $sub_total_before_ship_tax += $currentProductInCart->getQuantity() * $currentProductInCart->getProductDTO()->getUnitPrice();
//                try {
//                    $productInCart = ProductDAO::dbSelectById($currentProductInCart->getProductId());
//
//                } catch (Exception $e) {
//                    echo "Can not find Product with id: ".$currentProductInCart->getProductId();
//                }
//
                echo "
        <table border='1' cellpadding='5' cellspacing='0' style='width:100%; text-align:center;'>
            <caption><h1>".$currentProductInCart->getProductDTO()->getDisplayName()."</h1></caption>
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
        <input type='hidden' value='".$currentProductInCart->getProductDTO()->getId()."' name='productId_".$currentProductInCart->getProductDTO()->getId()."'>
        <div class='center-div'>
            <input type='submit' id='updateFromCart' value='Update the Quantity'>
            <input min='1' value='".$currentProductInCart->getQuantity()."' max='".$currentProductInCart->getProductDTO()->getAvailableQuantity()."' type='number' id='quantity_".$currentProductInCart->getProductDTO()->getId()."' name='quantity_".$currentProductInCart->getProductDTO()->getId()."'>
        
        ";
                ?>
                    <button id="deleteProductId_<?= $currentProductInCart->getProductId() ?>" onclick="deleteProduct(<?= $currentProductInCart->getProductId() ?>, event)">Remove The Product</button>
                </div>
                <?php
            }
            if ($sum_quantity == 0) {
                ?>
                <h1> Your cart is empty </h1>
                    <?php
            }
            else {
                $qst_tax = $subTotal*0.09975;
                $gst_tax = $subTotal*0.05;
                $total = $subTotal + $qst_tax + $gst_tax;
                $_SESSION["SubTotal"] = $total;
                ?>
                </form>
                <form id="subTotalForm">
                    <table border='1' cellpadding='5' cellspacing='0' style='width:100%; text-align:center;'>
                        <tbody>
                        <tr>
                            <td>SUBTOTAL:</td>
                            <input type="hidden" name="subTotalBeforeShipTax" value="<?= $sub_total_before_ship_tax ?>">
                            <td><?= number_format($sub_total_before_ship_tax, 2, ".", " ") ?>$</td>
                        </tr>
                        <tr>
                            <td>Shipping Fee:</td>
                            <input type="hidden" name="shippingFee" value="<?= $shippingFee ?>">
                            <td><?= number_format($shippingFee, 2, ".", " "); ?>$</td>
                        </tr>
                        <tr>
                            <td>GST (5%):</td>
                            <input type="hidden" name="gstTax" value="<?= $gst_tax ?>">
                            <td><?= number_format($gst_tax, 2, ".", " "); ?>$</td>
                        </tr>
                        <tr>
                            <td>QST (9.975%):</td>
                            <input type="hidden" name="qstTax" value="<?= $qst_tax ?>">
                            <td><?= number_format($qst_tax, 2, ".", " "); ?>$</td>
                        </tr>
                        <tr>
                            <td>TOTAL:</td>
                            <input type="hidden" name="total" value="<?= $total ?>">
                            <td><?= number_format($total, 2, ".", " "); ?>$</td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="right-div">
                        <input type="submit" value="Checkout">
                    </div>
                    
                </form>
                <?php
            }
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
