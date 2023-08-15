<?php
declare(strict_types=1);

/*
 * Project_PHP OrderStatus.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-04-25
 * (c) Copyright 2023 Hoang Truong 
 */

namespace Truong\OnlineShopping\DAL\Models\Enums;

/**
 * @TODO   Documentation
 *
 * @author Hoang Truong
 * @since  2023-04-25
 */
enum OrderStatus : string {
    case CREATED = "created";
    case PLACED = "placed";
    case COMPLETED = "completed";
    case CANCELLED = "cancelled";
}