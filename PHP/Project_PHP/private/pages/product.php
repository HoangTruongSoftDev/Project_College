<?php
declare(strict_types=1);

/*
 * Project_PHP product.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-04-10
 * (c) Copyright 2023 Hoang Truong 
 */
if (isset($_SESSION["SubTotal"])) {
    unset($_SESSION["SubTotal"]);
}
unset($_SESSION["displayForm"]);
?>
<!DOCTYPE html>
<html lang="en-CA">
<head>
    <title> Product Detail </title>
    <script type="text/javascript" src="<?= WEB_PUBLIC_PATH.'js/product.js' ?>" defer></script>
    <script src="<?= WEB_PUBLIC_PATH.'js/jquery-3.6.3.js' ?>"></script>
    <link rel="stylesheet" type="text/css" href="<?= WEB_PUBLIC_PATH."/css/products.css" ?>">
</head>
<body>
<header>
    
    <?php
    require FRAGMENTS_PATH."standard.header.php";
    ?>
</header>
    <?php
    if (!isset($product)) {
        ?>
        <div class="center-div"><h1> The Product is not available</h1></div>
    
        <?php
    }
    else {
    ?>
    <div class="center-div"><h1> Product Detail</h1></div>
    
    <form id='productDetail'>
        <input type='hidden' value='addSingleProductToCart' name='action'>
        <?php
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
                        <td> Product ID </td>
                        <td>".$product->getId()."</td>
                    </tr>
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
        <input type='hidden' value='".$product->getId()."' name='requested_productId'>
        <div class='center-div'>
        <input type='submit' value='Add To Cart'>
        <input min='1' max='".$product->getAvailableQuantity()."' type='number' id='requested_quantity' name='requested_quantity'>
        
        
</div>
        
        ";}
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
