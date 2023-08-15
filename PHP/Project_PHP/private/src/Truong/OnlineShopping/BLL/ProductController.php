<?php
declare(strict_types=1);

/*
 * Project_PHP ProductController.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-03-30
 * (c) Copyright 2023 Hoang Truong 
 */

namespace Truong\OnlineShopping\BLL;

use Truong\OnlineShopping\DAL\DAOs\ProductDAO;
use Truong\OnlineShopping\DAL\Models\ProductDTO;
use Truong\OnlineShopping\Views\ProductView;

/**
 * @TODO   Documentation
 *
 * @author Hoang Truong
 * @since  2023-03-30
 */
class ProductController {
    
    /**
     * @throws \Exception
     */
    public static function getDetailProductPage(): void {
        try {
            if ( !isset($_REQUEST["productId"])) {
                throw new \Exception("Invalid Product ID", 400);
            }
            $product = ProductDAO::dbSelectById((int) $_REQUEST["productId"]);
            if ( !isset($product)) {
                throw new \Exception("The PRODUCT not found", 404);
            }
            
            header("Content-Type: text/html; charset=UTF-8", true, 200);
            echo ProductView::generateProductDetailPage($product);
        }
        catch (\Exception $exception){
            // Page show EXception
        }
    }
    
    public static function getProductPage() : void  {
        
        $products = ProductDAO::dbSelectAll();
        try {
            if (!isset($products)) {
                throw new \Exception("The Products not found", 404);
            }
            header("Content-Type: text/html; charset=UTF-8", true, 200);
            echo ProductView::generateProductPage($products);
        }
        catch (\Exception $exception) {
            // Page Exception
        }
    }
    
    /**
     * @throws \Exception
     */
    public static function deleteProduct(ProductDTO $productDTO) : void {
        ProductDAO::dbDelete($productDTO);
    }
    
    /**
     * @throws \Exception
     */
    public static function updateProduct(ProductDTO $productDTO) : void {
        ProductDAO::dbUpdate($productDTO);
    }
    
    /**
     * @throws \Exception
     */
    public static function createProduct(ProductDTO $productDTO) : void {
        ProductDAO::dbCreate($productDTO);
    }
    
    public static function selectAllProducts() : ?array {
        return ProductDAO::dbSelectAll();
    }
}