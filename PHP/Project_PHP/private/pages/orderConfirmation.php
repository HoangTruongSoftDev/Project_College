<?php
declare(strict_types=1);

/*
 * Project_PHP orderConfirmation.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-04-26
 * (c) Copyright 2023 Hoang Truong 
 */

use Truong\OnlineShopping\DAL\DAOs\OrderDAO;
use Truong\OnlineShopping\DAL\DAOs\ShoppingCartProductDAO;

unset($_SESSION["displayForm"]);
$listOfOrders = OrderDAO::dbSelectByCustomerId($_SESSION["customerId"]);

?>
<!DOCTYPE html>
<html lang="en-CA">
<head>
    <title> Order Confirmation </title>
    <script src="<?= WEB_PUBLIC_PATH.'js/orderConfirmation.js' ?>"></script>
    <script src="<?= WEB_PUBLIC_PATH.'js/jquery-3.6.3.js' ?>"></script>
    <link rel="stylesheet" type="text/css" href="<?= WEB_PUBLIC_PATH."css/orderConfirmation.css" ?>">
</head>
<body>
<header>
    <?php
    require FRAGMENTS_PATH."standard.header.php";
    ?>
</header>
<main>
    
    <?php
    if ($listOfOrders == null) {
        ?>
            <h1> No Order has been placed </h1>
    <?php
    }
    else {
        
        ?>
        <br>
        <div class="right-div">
            <form method="post">
                <label for="category_order"> Status Order </label>
                <select name="category_order" id="category_order">
                    <option value="placed"> Placed </option>
                    <option value="cancelled"> Cancelled </option>
                </select>
                <button type="submit">Filter</button>
            </form>
        </div>
    
    <?php
    $filteredStatus = "placed";
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $status = $_POST["category_order"];
        if ($status == "placed") {
            $filteredStatus = "placed";
        } elseif ($status == "cancelled") {
            $filteredStatus = "cancelled";
        }
    }
    ?>
    <div class="center-div">
        <h1> Your <?php echo ($filteredStatus == "cancelled") ? " Cancelled " : " Placed "; ?> Orders </h1>
    </div>
        
        <?php
            foreach ($listOfOrders as $currentOrder) {
                if ($currentOrder->getStatus()->value != $filteredStatus) {
                    continue;
                }
                $listOfProductsInOrder = ShoppingCartProductDAO::dbSelectByShopppingCartId((int)$currentOrder->getShoppingCartId());
                if ($listOfProductsInOrder == null) {
                    ?>
                    <h1> There is no Products in Order </h1>
                        <?php
                }
                else {
                ?>
    <form id="orderedForm" method="post">
                        <div>
                            <div class="center-div">
                                <h1> Order ID: <?= $currentOrder->getId() ?> </h1>
                            </div>
                            <table border='1' cellpadding='5' cellspacing='0' style='width:100%; text-align:center;'>
                                <tbody>
                                    <tr>
                                        <th> Status </th>
                                        <td> <?= $currentOrder->getStatus()->value ?> </td>
                                    </tr>
                                    <tr>
                                        <th> Billing Address </th>
                                        <td> <?= $currentOrder->getBillingAddress() ?> </td>
                                    </tr>
                                    <tr>
                                        <th> Shipping Address </th>
                                        <td> <?= $currentOrder->getShippingAddress() ?> </td>
                                    </tr>
                                    <tr>
                                        <th> Date Placed </th>
                                        <td> <?= $currentOrder->getDatePlaced()->format("Y-m-d H:i:s") ?> </td>
                                    </tr>
                                    <tr>
                                        <th> Date Shipped </th>
                                        <td> <?= $currentOrder->getDateShipped()->format("Y-m-d H:i:s") ?> </td>
                                    </tr>
                                </tbody>
                            </table>
                    <?php
                    echo "<div class='center-div'>
                                <h2>List Of Ordered Products</h2>
                            </div>";
                    foreach ($listOfProductsInOrder as $product) {
                            if ($product->getQuantity() == 0) {
                                continue;
                            }
                        ?>
                            <table border='1' cellpadding='5' cellspacing='0' style='width:100%; text-align:center;'>
                                <tbody>
                                    <tr>
                                        <th>Product Name</th>
                                        <td><?= $product->getProductDTO()->getDisplayName() ?></td>
                                    </tr>
                                    <tr>
                                        <th>Product Image </th>
                                        <td><img src="<?= $product->getProductDTO()->getImageUrl() ?>" style='height: 200px; width: 200px' alt='Image of <?= $product->getProductDTO()->getDisplayName() ?>'></td>
                                    </tr>
                                    <tr>
                                        <th>Ordered Quantity</th>
                                        <td><?= $product->getQuantity() ?></td>
                                    </tr>
                                </tbody>
                            </table>
                        <?php
                    }
                        ?>
                        </div>
        <?php
        if ($filteredStatus == "placed") {
        ?>
            <div class="center-div">
                <button id='cancelOrder_"<?=$currentOrder->getId()?>' onclick='cancelOrderFunc(<?=$currentOrder->getId()?>, event)'> Cancel Order </button>
            </div>
                    <?php
                }
    
        }
            }
        ?>
    <?php
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
