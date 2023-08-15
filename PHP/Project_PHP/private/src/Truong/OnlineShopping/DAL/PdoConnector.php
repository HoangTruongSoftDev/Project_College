<?php
declare(strict_types=1);

/*
 * Project_PHP PdoConnector.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-03-23
 * (c) Copyright 2023 Hoang Truong 
 */
namespace Truong\OnlineShopping\DAL;
use Exception;
use PDO;
class PdoConnector {
    private static ?PDO $connection = null;
    public static function getConnection() : PDO {
        if (!(self::$connection instanceof PDO)) {
            try {
                self::$connection = new PDO("mysql:host=127.0.0.1;dbname=Project_PHP;port=3306","root","");
            }
            catch(Exception $exception) {
                echo $exception->getMessage();
            }
        }
        return self::$connection;
    }
}