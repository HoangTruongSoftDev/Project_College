<?php
declare(strict_types=1);

/*
 * Project_PHP OrderDTO.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-04-25
 * (c) Copyright 2023 Hoang Truong 
 */

namespace Truong\OnlineShopping\DAL\Models;

use Truong\OnlineShopping\DAL\Models\Enums\OrderStatus;

/**
 * @TODO   Documentation
 *
 * @author Hoang Truong
 * @since  2023-04-25
 */
class OrderDTO implements IDto {
    
    private int $id;
    private OrderStatus $status;
    private int $customerId;
    private int $shoppingCartId;
    private string $billingAddress;
    private string $shippingAddress;
    private \DateTime $dateCreated;
    private \DateTime $datePlaced;
    private \DateTime $dateShipped;
    private ShoppingCartDTO $shoppingCartDTO;
    
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
    public function __construct(OrderStatus $status = OrderStatus::CREATED) {
        $this->status = $status;
    }
    
    /**
     * @return int
     */
    public function getId() : int {
        return $this->id;
    }
    
    /**
     * @param int $id
     */
    public function setId(int $id) : void {
        $this->id = $id;
    }
    
    /**
     * @return OrderStatus
     */
    public function getStatus() : OrderStatus {
        return $this->status;
    }
    
    /**
     * @param OrderStatus $status
     */
    public function setStatus(OrderStatus $status) : void {
        $this->status = $status;
    }
    
    /**
     * @return int
     */
    public function getCustomerId() : int {
        return $this->customerId;
    }
    
    /**
     * @param int $customerId
     */
    public function setCustomerId(int $customerId) : void {
        $this->customerId = $customerId;
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
    
    /**
     * @return string
     */
    public function getBillingAddress() : string {
        return $this->billingAddress;
    }
    
    /**
     * @param string $billingAddress
     */
    public function setBillingAddress(string $billingAddress) : void {
        $this->billingAddress = $billingAddress;
    }
    
    /**
     * @return string
     */
    public function getShippingAddress() : string {
        return $this->shippingAddress;
    }
    
    /**
     * @param string $shippingAddress
     */
    public function setShippingAddress(string $shippingAddress) : void {
        $this->shippingAddress = $shippingAddress;
    }
    
    /**
     * @return \DateTime
     */
    public function getDateCreated() : \DateTime {
        return $this->dateCreated;
    }
    
    /**
     * @param \DateTime $datCreated
     */
    public function setDateCreated(\DateTime $dateCreated) : void {
        $this->dateCreated = $dateCreated;
    }
    
    /**
     * @return \DateTime
     */
    public function getDatePlaced() : \DateTime {
        return $this->datePlaced;
    }
    
    /**
     * @param \DateTime $datePlaced
     */
    public function setDatePlaced(\DateTime $datePlaced) : void {
        $this->datePlaced = $datePlaced;
    }
    
    /**
     * @return \DateTime
     */
    public function getDateShipped() : \DateTime {
        return $this->dateShipped;
    }
    
    /**
     * @param \DateTime $dateShipped
     */
    public function setDateShipped(\DateTime $dateShipped) : void {
        $this->dateShipped = $dateShipped;
    }
    
    
    
    
    public static function getTableName() : string {
        // TODO: Implement getTableName() method.
        return "orders";
    }
}