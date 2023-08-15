<?php
declare(strict_types=1);

/*
 * Project_PHP ShoppingCartController.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-04-17
 * (c) Copyright 2023 Hoang Truong 
 */

namespace Truong\OnlineShopping\BLL;

use http\Exception;
use Truong\OnlineShopping\DAL\DAOs\ProductDAO;
use Truong\OnlineShopping\DAL\DAOs\ShoppingCartDAO;
use Truong\OnlineShopping\DAL\DAOs\ShoppingCartProductDAO;
use Truong\OnlineShopping\DAL\Models\ShoppingCartDTO;
use Truong\OnlineShopping\DAL\Models\ShoppingCartProductDTO;
use Truong\OnlineShopping\Views\ShoppingCartView;
use function public\endpoints\receivingArrayException;

/**
 * @TODO   Documentation
 *
 * @author Hoang Truong
 * @since  2023-04-17
 */
class ShoppingCartController {
    public static function getShoppingCartProductPage() : void {
        header('Content-Type: text/html; charset=UTF-8', true, 200);
        echo ShoppingCartView::generateShoppingCartPage();
    }
    public static function deletingProductInCart() : void {
        try {
            if (!isset($_SESSION["shoppingCartId"])) {
                throw new \Exception("There is no products in cart", 400);
            }
            if (!isset($_REQUEST["deleteProductId"])) {
                throw new \Exception("Bad Request: Missing Delete Product ID ", 400);
            }
            $shoppingCartProductDTO = ShoppingCartProductDAO::dbSelectByIds((int)$_REQUEST["deleteProductId"],(int)$_SESSION["shoppingCartId"]);
            ShoppingCartProductDAO::dbDelete($shoppingCartProductDTO);
        }
        catch (\Exception $exception) {
            header("Content-Type: application/json");
            echo json_encode(receivingArrayException($exception));
            http_response_code($exception->getCode());
    
        }
        
    }
    /**
     * @throws \Exception
     */
    public static function getSessionCart() : ?ShoppingCartDTO {
            if (!isset($_SESSION["shoppingCartId"])) {
                $shoppingCart = new ShoppingCartDTO();
                $shoppingCart_newest_id = self::createShoppingCart($shoppingCart);
                $shoppingCart->setId($shoppingCart_newest_id);
                $_SESSION["shoppingCartId"] = $shoppingCart->getId();
            }
            $shoppingCartDTO = ShoppingCartDAO::dbSelectById((int)$_SESSION["shoppingCartId"]);
            if ( $shoppingCartDTO instanceof ShoppingCartDTO){
                return $shoppingCartDTO;
            }
            return null;
    }
    
    /**
     * @throws \Exception
     */
    public static function deleteShoppingCart(ShoppingCartDTO $shoppingCartDTO) : void {
        ShoppingCartDAO::dbDelete($shoppingCartDTO);
    }
    
    /**
     * @throws \Exception
     */
    public static function updateShoppingCart(ShoppingCartDTO $shoppingCartDTO) : void {
        ShoppingCartDAO::dbUpdate($shoppingCartDTO);
    }
    
    /**
     * @throws \Exception
     */
    public static function createShoppingCart(ShoppingCartDTO $shoppingCartDTO) : int {
        return ShoppingCartDAO::dbCreate($shoppingCartDTO);
    }
    
    /**
     * @throws \Exception
     */
    public static function updateProduct(int $requestedProductId, int $requestProductQuantity) : void {
        $shoppingCart = self::getSessionCart();
        try {
            $productObj = ProductDAO::dbSelectById($requestedProductId);
    
            $shopping_cart_product = ShoppingCartProductDAO::dbSelectByIds($productObj->getId(), $shoppingCart->getId());
            $requested_quantity = $requestProductQuantity;
            if ($requested_quantity > $productObj->getAvailableQuantity()) {
                throw new \Exception("We don't have enough amount products you requested");
            }
            $shopping_cart_product->setQuantity($requested_quantity);
            ShoppingCartProductDAO::dbUpdate($shopping_cart_product);
        }
        catch(\Exception $exception) {
            throw new \Exception("There some error. The reason is", 500, $exception);
        }
    }
    /**
     * @throws \Exception
     */
    public static function addProduct(int $requestedProductId, int $requestProductQuantity) : void {
        $shoppingCart = self::getSessionCart();
            try {
               
                    $productObj = ProductDAO::dbSelectById($requestedProductId);
                    
                    $shopping_cart_product = ShoppingCartProductDAO::dbSelectByIds($productObj->getId(), $shoppingCart->getId());
                    $requested_quantity = $requestProductQuantity;
                    
                    $existing_product_in_cart = false;
                    
                    if ($shopping_cart_product instanceof ShoppingCartProductDTO) {
                        $existing_quantity = $shopping_cart_product->getQuantity();
                        $existing_product_in_cart = true;
                    } else {
                        $existing_quantity = 0;
                    }
                    
                    $total_quantity = $existing_quantity + $requested_quantity;
                
                    $available_quantity = $productObj->getAvailableQuantity();
                
                    if ($requested_quantity < 0) {
                        
                        if (!$existing_product_in_cart) {
                            throw new \Exception("Attempting to remove a quantity of a product from a cart that does not contain the product.");
                        }
                        if ($total_quantity <= 0) {
                            ShoppingCartProductDAO::dbDelete($shopping_cart_product);
                        }
                        else {
                            $shopping_cart_product->setQuantity($total_quantity);
                            ShoppingCartProductDAO::dbUpdate($shopping_cart_product);
                            $productObj->setAvailableQuantity($total_quantity);
                            $shoppingCart->addProductToCurrentCart($productObj);
                        }
                    }
                    elseif ($total_quantity > $available_quantity) {
                        throw new \Exception("Your requested quantity is higher than available quantity.");
                    }
                    else {
                        if ($existing_product_in_cart) {
                            $shopping_cart_product->setQuantity($total_quantity);
                            ShoppingCartProductDAO::dbUpdate($shopping_cart_product);
                            $productObj->setAvailableQuantity($total_quantity);
                            $shoppingCart->addProductToCurrentCart($productObj);
                        }
                        else {
                            $shopping_cart_product = new ShoppingCartProductDTO();
                            $shopping_cart_product->setProductId($productObj->getId());
                            $shopping_cart_product->setShoppingCartId($shoppingCart->getId());
                            $shopping_cart_product->setQuantity($total_quantity);
                            ShoppingCartProductDAO::dbCreate($shopping_cart_product);
                            $productObj->setAvailableQuantity($total_quantity);
                            $shoppingCart->addProductToCurrentCart($productObj);
                        }
                    }
                    
            }
            catch(\Exception $exception) {
                throw new \Exception("There some error. The reason is", 500, $exception);
            }
        
    }
}