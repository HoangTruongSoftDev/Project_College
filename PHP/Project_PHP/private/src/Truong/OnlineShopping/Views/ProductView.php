<?php
declare(strict_types=1);

/*
 * Project_PHP ProductView.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-03-30
 * (c) Copyright 2023 Hoang Truong 
 */

namespace Truong\OnlineShopping\Views;

use Truong\OnlineShopping\DAL\Models\ProductDTO;

/**
 * @TODO   Documentation
 *
 * @author Hoang Truong
 * @since  2023-03-30
 */
class ProductView {
    
    public static function generateProductPage(array $products) : string {
        ob_start();
        include PAGE_PATH."products.php";
        $output = ob_get_contents();
        ob_end_clean();
        return $output;
    }
    public static function generateProductDetailPage(ProductDTO $product) : string {
        ob_start();
        include PAGE_PATH."product.php";
        $output = ob_get_contents();
        ob_end_clean();
        return $output;
    }
}