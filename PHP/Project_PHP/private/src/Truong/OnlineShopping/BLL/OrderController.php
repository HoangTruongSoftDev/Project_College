<?php
declare(strict_types=1);

/*
 * Project_PHP OrderController.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-04-23
 * (c) Copyright 2023 Hoang Truong 
 */

namespace Truong\OnlineShopping\BLL;

use Exception;
use Truong\OnlineShopping\DAL\DAOs\OrderDAO;
use Truong\OnlineShopping\DAL\DAOs\ProductDAO;
use Truong\OnlineShopping\DAL\DAOs\ShoppingCartDAO;
use Truong\OnlineShopping\DAL\DAOs\ShoppingCartProductDAO;
use Truong\OnlineShopping\DAL\Models\Enums\OrderStatus;
use Truong\OnlineShopping\DAL\Models\Enums\ShoppingCartStatus;
use Truong\OnlineShopping\DAL\Models\OrderDTO;
use Truong\OnlineShopping\DAL\Models\ShoppingCartProductDTO;
use Truong\OnlineShopping\Views\OrderView;
use function public\endpoints\receivingArrayException;

/**
 * @TODO   Documentation
 *
 * @author Hoang Truong
 * @since  2023-04-23
 */
class OrderController {
    /**
     * @throws \Exception
     */
    public static function redirectOrderReviewPage(): void {
            header("Content-Type: text/html; charset=UTF-8", true,200);
            echo OrderView::generateOrderReViewPage();
    }
    public static function redirectOrderConfimationPage(): void {
            header("Content-Type: text/html; charset=UTF-8", true,200);
            echo OrderView::generateOrderConfirmationPage();
    }
    
    /**
     * @throws \Exception
     */
    public static function placeOrder(OrderDTO $orderDTO) : void {
        $order_id = OrderDAO::dbCreate($orderDTO);
    
        $lastInsertedOrderDTO = OrderDAO::dbSelectById($order_id);
    
        if ($lastInsertedOrderDTO == null) {
            throw new \Exception("Missing Order");
        }
        
        $shoppingCartDTO = ShoppingCartDAO::dbSelectById($lastInsertedOrderDTO->getShoppingCartId());
        
        if ($shoppingCartDTO == null) {
            throw new \Exception("Missing ShoppingCart");
        }
            
        $productsInShoppingCarts = ShoppingCartProductDAO::dbSelectByShopppingCartId($shoppingCartDTO->getId());
        if ($productsInShoppingCarts == null) {
            throw new \Exception("Missing Products in Cart");
        }
        
        $shoppingCartDTO->setStatus(ShoppingCartStatus::ORDERED);
        ShoppingCartDAO::dbUpdate($shoppingCartDTO);
    
        $lastInsertedOrderDTO->setStatus(OrderStatus::PLACED);
        OrderDAO::dbUpdate($lastInsertedOrderDTO);
        
        foreach ($productsInShoppingCarts as $currentProduct) {
            if ($currentProduct instanceof ShoppingCartProductDTO) {
                $new_available_quantity = $currentProduct->getProductDTO()->getAvailableQuantity() - $currentProduct->getQuantity();
                $productDTO = ProductDAO::dbSelectById($currentProduct->getProductId());
                $productDTO->setAvailableQuantity($new_available_quantity);
                ProductDAO::dbUpdate($productDTO);
            }
        }
        
        $_SESSION["orderId"] = $order_id;
        unset($_SESSION["shoppingCartId"]);
        header("Content-Type: application/json", true,200);
        echo json_encode(["redirect" => "/Project_PHP/order/confirmation"]);
    }
    public static function cancelOrder() : void {
        try {
            if (!isset($_REQUEST["cancelOrderId"])) {
                throw new \Exception("Bad Request: Missing cancel Order ", 400);
            }
            
            $orderDTO = OrderDAO::dbSelectById((int)$_REQUEST["cancelOrderId"]);
            $orderDTO->setStatus(OrderStatus::CANCELLED);
            OrderDAO::dbUpdate($orderDTO);
            $shoppingCartProductDTO = ShoppingCartProductDAO::dbSelectByShopppingCartId($orderDTO->getShoppingCartId());
            foreach ($shoppingCartProductDTO as $productInCart) {
                $productInCart->getProductDTO()->setAvailableQuantity($productInCart->getProductDTO()->getAvailableQuantity() + $productInCart->getQuantity());
                ProductDAO::dbUpdate($productInCart->getProductDTO());
            }
        }
        catch (\Exception $exception) {
            header("Content-Type: application/json");
            echo json_encode(receivingArrayException($exception));
            http_response_code($exception->getCode());
        }
    }
 }
 