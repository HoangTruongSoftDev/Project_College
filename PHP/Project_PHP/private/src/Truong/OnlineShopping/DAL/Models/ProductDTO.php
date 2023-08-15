<?php
declare(strict_types=1);

/*
 * Project_PHP ProductDTO.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-03-30
 * (c) Copyright 2023 Hoang Truong 
 */

namespace Truong\OnlineShopping\DAL\Models;

use DateTime;

/**
 * @TODO   Documentation
 *
 * @author Hoang Truong
 * @since  2023-03-30
 */
class ProductDTO implements IDto {
    private int $id;
    private string $displayName;
    private ?string $description;
    private ?string $imageUrl;
    private float $unitPrice;
    private int $availableQuantity;
    private DateTime $dateCreated;
    /**
     * @return string
     */
    public function getDisplayName() : string {
        return $this->displayName;
    }
    
    /**
     * @param string $displayName
     */
    public function setDisplayName(string $displayName) : void {
        $this->displayName = $displayName;
    }
    
    /**
     * @return string
     */
    public function getDescription() : string {
        return $this->description;
    }
    
    /**
     * @param string $description
     */
    public function setDescription(string $description) : void {
        $this->description = $description;
    }
    
    /**
     * @return string
     */
    public function getImageUrl() : string {
        return $this->imageUrl;
    }
    
    /**
     * @param string $imageUrl
     */
    public function setImageUrl(string $imageUrl) : void {
        $this->imageUrl = $imageUrl;
    }
    
    /**
     * @return float
     */
    public function getUnitPrice() : float {
        return $this->unitPrice;
    }
    
    /**
     * @param float $unitPrice
     */
    public function setUnitPrice(float $unitPrice) : void {
        $this->unitPrice = $unitPrice;
    }
    
    /**
     * @return int
     */
    public function getAvailableQuantity() : int {
        return $this->availableQuantity;
    }
    
    /**
     * @param int $availableQuantity
     */
    public function setAvailableQuantity(int $availableQuantity) : void {
        $this->availableQuantity = $availableQuantity;
    }
    
    /**
     * @return DateTime
     */
    public function getDateCreated() : DateTime {
        return $this->dateCreated;
    }
    
    /**
     * @param DateTime $dateCreated
     */
    public function setDateCreated(DateTime $dateCreated) : void {
        $this->dateCreated = $dateCreated;
    }
    
    
    /**
     * @return int
     *
     * @author Hoang Truong
     * @since  2023-03-30
     */
    public function getId() : int {
        // TODO: Implement getId() method.
        return $this->id;
    }
    
    /**
     * @param int $id
     *
     * @return void
     *
     * @author Hoang Truong
     * @since  2023-03-30
     */
    public function setId(int $id) : void {
        $this->id = $id;
    }
    
    /**
     * @return string
     *
     * @author Hoang Truong
     * @since  2023-03-30
     */
    public static function getTableName() : string {
        // TODO: Implement getTableName() method.
        return "products";
    }
}