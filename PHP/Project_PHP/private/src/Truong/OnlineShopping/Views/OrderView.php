<?php
declare(strict_types=1);

/*
 * Project_PHP OrderView.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-04-23
 * (c) Copyright 2023 Hoang Truong 
 */

namespace Truong\OnlineShopping\Views;

/**
 * @TODO   Documentation
 *
 * @author Hoang Truong
 * @since  2023-04-23
 */
class OrderView {

    public static function generateOrderReViewPage() : string {
        ob_start();
        include PAGE_PATH."order.php";
        $order_page = ob_get_contents();
        ob_end_clean();
        return $order_page;
    }
    public static function generateOrderConfirmationPage() : string {
        ob_start();
        include PAGE_PATH."orderConfirmation.php";
        $order_page = ob_get_contents();
        ob_end_clean();
        return $order_page;
    }
}