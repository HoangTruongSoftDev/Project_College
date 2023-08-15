<?php
declare(strict_types=1);

/*
 * Project_PHP ShoppingCartDTO.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-04-13
 * (c) Copyright 2023 Hoang Truong 
 */

namespace Truong\OnlineShopping\DAL\Models;

use Truong\OnlineShopping\DAL\Models\Enums\ShoppingCartStatus;

/**
 * @TODO   Documentation
 *
 * @author Hoang Truong
 * @since  2023-04-13
 */
class ShoppingCartDTO implements IDto {
    private int $id;
    private ShoppingCartStatus $status;
    
    private \DateTime $dateCreated;
    
    private array $cartProducts = [];
    
    public function __construct(ShoppingCartStatus $status = ShoppingCartStatus::CREATED) {
        $this->status = $status;
    }
    
    /**
     * @return ShoppingCartStatus
     */
    public function getStatus() : ShoppingCartStatus {
        return $this->status;
    }
    
    /**
     * @param ShoppingCartStatus $status
     */
    public function setStatus(ShoppingCartStatus $status) : void {
        $this->status = $status;
    }
    
    /**
     * @return \DateTime
     */
    public function getDateCreated() : \DateTime {
        return $this->dateCreated;
    }
    
    /**
     * @param \DateTime $dateCreated
     */
    public function setDateCreated(\DateTime $dateCreated) : void {
        $this->dateCreated = $dateCreated;
    }
    public function addProductToCurrentCart(ProductDTO $productDTO) : void {
        $this->cartProducts[] = $productDTO;
    }
    public function getProductsFromCart() : array {
        return $this->cartProducts;
    }
    public function getId() : int {
        // TODO: Implement getId() method.
        return $this->id;
    }
    
    public function setId(int $id) : void {
        $this->id = $id;
    }
    
    public static function getTableName() : string {
        // TODO: Implement getTableName() method.
        return "shopping_carts";
    }
}