<?php
declare(strict_types=1);

/*
 * Project_PHP products.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-03-23
 * (c) Copyright 2023 Hoang Truong 
 */

use Truong\OnlineShopping\DAL\DAOs\ProductDAO;

$available_products = array();
if (!empty($products)) {
    foreach ($products as $current_product) {
        if ($current_product->getAvailableQuantity() > 0){
            $available_products[] = $current_product;
        }
    }
}
if (isset($_SESSION["SubTotal"])) {
    unset($_SESSION["SubTotal"]);
}
unset($_SESSION["displayForm"]);
?>
<!DOCTYPE html>
<html lang="en-CA">
<head>
    <title> List Of Products </title>
    <script src="<?= WEB_PUBLIC_PATH.'js/products.js' ?>"></script>
    <script src="<?= WEB_PUBLIC_PATH.'js/jquery-3.6.3.js' ?>"></script>
    <link rel="stylesheet" type="text/css" href="<?= WEB_PUBLIC_PATH."/css/products.css" ?>">
</head>
<body>
<header>
    <?php
        require FRAGMENTS_PATH."standard.header.php";
    ?>
</header>
<main>
    <div class="center-div"><h1 style="color: black; font-size: 60px">Shopping Online</h1></div>
    <?php
    if (!isset($products)) {
        ?>
        <div class="center-div"><h1> The Products are not available</h1></div>
    <?php
    }
    else {
    
    
    ?>
    <form id='listOfProducts' method="post">
        <input type='hidden' value='addProductsToCart' name='action'>
        <?php
        foreach ($available_products as $product) {
            echo "
        <table border='1' cellpadding='5' cellspacing='0' style='width:100%; text-align:center;'>
            <caption><h1>".$product->getDisplayName()."</h1></caption>
            <thead>
                    <tr>
                        <th>Category</th>
                        <th>Description</th>
                    </tr>
            </thead>
            <tbody>
                    <tr>
                        <td> Product Name </td>
                        <td>".$product->getDisplayName()."</td>
                    </tr>
                    
                    <tr>
                        <td> Product Description </td>
                        <td>".$product->getDescription()."</td>
                    </tr>
                    
                    <tr>
                        <td> Product Image </td>
                        <td><img src='".$product->getImageUrl()."' style='height: 200px; width: 200px' alt='Image of ".$product->getDisplayName()."'></td>
                    </tr>
                    
                    <tr>
                        <td> Product Price </td>
                        <td> ".$product->getUnitPrice()." </td>
                    </tr>
                    
                    <tr>
                        <td> Available Quantity</td>
                        <td> ".$product->getAvailableQuantity()." </td>
                    </tr>
            </tbody>
        </table>
        
        <a id='productDetailLink' href='".WEB_ROOT_PATH."product?productId=".$product->getId()."'>View Details</a>
        <br>
        <input type='hidden' value='".$product->getId()."' name='productId_".$product->getId()."'>
        <input type='submit' id='addToCart' value='Add To Cart'>
        <input min='1' max='".$product->getAvailableQuantity()."' type='number' id='quantity_".$product->getId()."' name='quantity_".$product->getId()."'>
        
        ";
        }
    }
        ?>
    </form>
    
</main>
<footer>
    <?php
    require FRAGMENTS_PATH."standard.footer.php";
    ?>
</footer>
</body>

</html>

