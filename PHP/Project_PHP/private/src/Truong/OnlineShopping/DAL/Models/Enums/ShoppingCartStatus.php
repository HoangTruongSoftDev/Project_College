<?php
declare(strict_types=1);

/*
 * Project_PHP ShoppingCartStatus.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-04-13
 * (c) Copyright 2023 Hoang Truong 
 */
namespace Truong\OnlineShopping\DAL\Models\Enums;
enum ShoppingCartStatus : string {
    case CREATED = "created";
    case ORDERED = "ordered";
}