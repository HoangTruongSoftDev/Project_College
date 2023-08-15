<?php
declare(strict_types=1);

/*
 * Project_PHP CustomerDTO.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-03-23
 * (c) Copyright 2023 Hoang Truong 
 */
namespace Truong\OnlineShopping\DAL\Models;
use DateTime;

class CustomerDTO implements IDto {
    private int $id;
    private string $username;
    private string $passwordHash;
    
    private DateTime $dateCreated;
    
    public static function getTableName() : string{
        // TODO: Implement getTableName() method.
        return "customers";
    }
    
    /**
     * @return int
     */
    public function getId() : int {
        // TODO: Implement getId() method.
        return $this->id;
    }
    
    /**
     * @param int $id
     */
    public function setId(int $id) : void {
        $this->id = $id;
    }
    
    /**
     * @return string
     */
    public function getUsername() : string {
        return $this->username;
    }
    
    /**
     * @param string $username
     */
    public function setUsername(string $username) : void {
        $this->username = $username;
    }
    
    /**
     * @return string
     */
    public function getPasswordHash() : string {
        return $this->passwordHash;
    }
    
    /**
     * @param string $passwordHash
     */
    public function setPasswordHash(string $passwordHash) : void {
        $this->passwordHash = $passwordHash;
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
}