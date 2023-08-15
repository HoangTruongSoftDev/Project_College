<?php
declare(strict_types=1);

/*
 * Project_PHP IDto.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-03-23
 * (c) Copyright 2023 Hoang Truong 
 */
namespace Truong\OnlineShopping\DAL\Models;
interface IDto {
    
    public static function getTableName() : string;
    
}