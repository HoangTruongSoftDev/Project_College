<?php
declare(strict_types=1);

/*
 * Project_PHP IDao.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-03-23
 * (c) Copyright 2023 Hoang Truong 
 */

namespace Truong\OnlineShopping\DAL\DAOs;
use Truong\OnlineShopping\DAL\Models\IDto;
interface IDao {
    public static function dbDelete(IDto $dto) : void;

}