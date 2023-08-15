<?php
declare(strict_types=1);

/*
 * Project_PHP ShoppingCartView.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-04-19
 * (c) Copyright 2023 Hoang Truong 
 */

namespace Truong\OnlineShopping\Views;

/**
 * @TODO   Documentation
 *
 * @author Hoang Truong
 * @since  2023-04-19
 */
class ShoppingCartView {
     public static function generateShoppingCartPage() : string {
         ob_start();
         include PAGE_PATH."shoppingCart.php";
         $generatedHtml = ob_get_contents();
         ob_end_clean();
         return $generatedHtml;
     }
}