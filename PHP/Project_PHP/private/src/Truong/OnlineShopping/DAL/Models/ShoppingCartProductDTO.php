<?php
declare(strict_types=1);

/*
 * Project_PHP ShoppingCartProductDTO.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-04-17
 * (c) Copyright 2023 Hoang Truong 
 */

namespace Truong\OnlineShopping\DAL\Models;

/**
 * @TODO   Documentation
 *
 * @author Hoang Truong
 * @since  2023-04-17
 */
class ShoppingCartProductDTO implements IDto {
    private int $shoppingCartId;
    private ShoppingCartDTO $shoppingCartDTO;
    private int $productId;
    private ProductDTO $productDTO;
    private int $quantity;
    
    public function __construct() {
    
    }
    
    
    public static function getTableName() : string {
        // TODO: Implement getTableName() method.
        return "shopping_cart_products";
    }
    /**
     * @return ShoppingCartDTO
     */
    public function getShoppingCartDTO() : ShoppingCartDTO {
        return $this->shoppingCartDTO;
    }
    
    /**
     * @param ShoppingCartDTO $shoppingCartDTO
     */
    public function setShoppingCartDTO(ShoppingCartDTO $shoppingCartDTO) : void {
        $this->shoppingCartDTO = $shoppingCartDTO;
    }
    
    /**
     * @return int
     */
    public function getProductId() : int {
        return $this->productId;
    }
    
    /**
     * @param int $productId
     */
    public function setProductId(int $productId) : void {
        $this->productId = $productId;
    }
    
    /**
     * @return ProductDTO
     */
    public function getProductDTO() : ProductDTO {
        return $this->productDTO;
    }
    
    /**
     * @param ProductDTO $productDTO
     */
    public function setProductDTO(ProductDTO $productDTO) : void {
        $this->productDTO = $productDTO;
    }
    
    /**
     * @return int
     */
    public function getQuantity() : int {
        return $this->quantity;
    }
    
    /**
     * @param int $quantity
     */
    public function setQuantity(int $quantity) : void {
        $this->quantity = $quantity;
    }
    
    
    /**
     * @return int
     */
    public function getShoppingCartId() : int {
        return $this->shoppingCartId;
    }
    
    /**
     * @param int $shoppingCartId
     */
    
    public function setShoppingCartId(int $shoppingCartId) : void {
        $this->shoppingCartId = $shoppingCartId;
    }
    
}