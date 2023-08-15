<?php
declare(strict_types=1);

/*
 * Project_PHP ShoppingCartDAO.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-04-17
 * (c) Copyright 2023 Hoang Truong 
 */

namespace Truong\OnlineShopping\DAL\DAOs;

use Truong\OnlineShopping\Application;
use Truong\OnlineShopping\BLL\ShoppingCartController;
use Truong\OnlineShopping\DAL\Models\CustomerDTO;
use Truong\OnlineShopping\DAL\Models\Enums\ShoppingCartStatus;
use Truong\OnlineShopping\DAL\Models\IDto;
use Truong\OnlineShopping\DAL\Models\ProductDTO;
use Truong\OnlineShopping\DAL\Models\ShoppingCartDTO;

/**
 * @TODO   Documentation
 *
 * @author Hoang Truong
 * @since  2023-04-17
 */
class ShoppingCartDAO extends AbstractDAO {
    
    public static function dbSelectAll() : ?array {
        // TODO: Implement dbSelectAll() method.
        $connection = Application::getApplicationConnection();
        $statement = $connection->prepare("SELECT * FROM `".ShoppingCartDTO::getTableName()."`;");
        $statement->execute();
        $array = $statement->fetchAll(\PDO::FETCH_ASSOC);
        if (count($array) < 1) {
            return null;
        }
        $array_result = array();
        foreach ($array as $currentShoppingCart ) {
            $shoppingCartDTO = new ShoppingCartDTO();
            $shoppingCartDTO->setId($currentShoppingCart["id"]);
            $shoppingCartDTO->setStatus(ShoppingCartStatus::from($currentShoppingCart["status"]));
            $shoppingCartDTO->setDateCreated(\DateTime::createFromFormat(Application::FORMAT_OF_DATETIME,$currentShoppingCart["dateCraeted"]));
            $array_result[] = $shoppingCartDTO;
        }
        return $array_result;
    }
    
    public static function dbSelectById(int $id) : ?ShoppingCartDTO {
        // TODO: Implement dbSelectById() method.
        $connection = Application::getApplicationConnection();
        $statement = $connection->prepare("SELECT * FROM `".ShoppingCartDTO::getTableName()."` WHERE `id` = :id;");
        $statement->bindValue(":id",$id, \PDO::PARAM_INT);
        try {
            $statement->execute();
            $result = $statement->fetchAll(\PDO::FETCH_ASSOC);
            if (count($result) == 1) {
                $shopppingCartDTO = new ShoppingCartDTO();
                $shopppingCartDTO->setId((int)$result[0]["id"]);
                $shopppingCartDTO->setStatus(ShoppingCartStatus::from($result[0]["status"]));
                $shopppingCartDTO->setDateCreated(\DateTime::createFromFormat(Application::FORMAT_OF_DATETIME, $result[0]["dateCreated"]));
                return $shopppingCartDTO;
            }
            else {
                throw new \Exception("There is no Shopping Cart has been found ");
            }
        }
        catch(\Exception $exception) {
            return null;
        }
    }
    
    /**
     * @throws \Exception
     */
    public static function dbCreate(IDto $dto) : int {
        // TODO: Implement dbCreate() method.
        $connection = Application::getApplicationConnection();
        $connection->beginTransaction();
        try {
            if ($dto instanceof ShoppingCartDTO) {
                if (empty($dto->getStatus())) {
                    throw new \Exception("Missing status to create the shopping cart");
                }
                $statement = $connection->prepare("INSERT INTO `".ShoppingCartDTO::getTableName()."` (`status`) VALUES (:status);");
                $statement->bindValue(":status", $dto->getStatus()->value, \PDO::PARAM_STR);
                $statement->execute();
                $last_id = $connection->lastInsertId();
                $connection->commit();
                return (int)$last_id;
            }
            else {
                throw new \Exception("The instance is not ShoppingCartDTO");
            }
        }
        catch (\Exception $exception) {
            $connection->rollBack();
            throw new \Exception("Can not insert the data because ".$exception->getMessage(), 500, $exception);            return -1;
        }
    }
    
    /**
     * @throws \Exception
     */
    public static function dbUpdate(IDto $dto) : void {
        // TODO: Implement dbUpdate() method.
        $connection = Application::getApplicationConnection();
        $connection->beginTransaction();
        try {
            if ($dto instanceof ShoppingCartDTO) {
                if (empty($dto->getStatus()) ||empty($dto->getId())) {
                    throw new \Exception("Missing some information to update the shopping cart");
                }
                if (!is_numeric($dto->getId())) {
                    throw new \Exception("Id must be numeric type");
                }
                $statement = $connection->prepare("UPDATE `".ShoppingCartDTO::getTableName()."` SET `status` = :status WHERE `id` = :id;");
                $statement->bindValue(":status", $dto->getStatus()->value, \PDO::PARAM_STR);
                $statement->bindValue(":id", $dto->getId(), \PDO::PARAM_INT);
                $statement->execute();
                $connection->commit();
            }
            else {
                throw new \Exception("The instance is not ShoppingCartDTO");
            }
        }
        catch (\Exception $exception) {
            $connection->rollBack();
            throw new \Exception("Can not update the data because ".$exception->getMessage(), 500, $exception);
        }
    }
}