<?php
declare(strict_types=1);

/*
 * Project_PHP ShoppingCartProductDAO.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-04-17
 * (c) Copyright 2023 Hoang Truong 
 */

namespace Truong\OnlineShopping\DAL\DAOs;

use MongoDB\Driver\Exception\Exception;
use Truong\OnlineShopping\Application;
use Truong\OnlineShopping\DAL\Models\IDto;
use Truong\OnlineShopping\DAL\Models\ProductDTO;
use Truong\OnlineShopping\DAL\Models\ShoppingCartDTO;
use Truong\OnlineShopping\DAL\Models\ShoppingCartProductDTO;

/**
 * @TODO   Documentation
 *
 * @author Hoang Truong
 * @since  2023-04-17
 */
class ShoppingCartProductDAO extends AbstractDAO {
    
    public static function dbSelectAll() : ?array {
        // TODO: Implement dbSelectAll() method.
        $connection = Application::getApplicationConnection();
        $commandText = "SELECT * FROM `".ShoppingCartProductDTO::getTableName()."`;";
        $statement = $connection->prepare($commandText);
        $statement->execute();
        $array_result =$statement->fetchAll(\PDO::FETCH_ASSOC);
    
        if (count($array_result) < 1) {
            return null;
        }
        $array = array();
        foreach ($array_result as $currentShoppingCartProduct) {
            $shoppingCartProductDTO = new ShoppingCartProductDTO();
            $shoppingCartProductDTO->setProductId((int)$currentShoppingCartProduct["productId"]);
            $shoppingCartProductDTO->setShoppingCartId((int)$currentShoppingCartProduct["shoppingCartId"]);
            $shoppingCartProductDTO->setQuantity((int)$currentShoppingCartProduct["quantity"]);
            $array[] = $shoppingCartProductDTO;
        }
        return $array;
    }
    
    public static function dbSelectByShopppingCartId(int $shoppingCartId) : ?array {
        
        $connection = Application::getApplicationConnection();
        $commandText = "SELECT * FROM `".ShoppingCartProductDTO::getTableName()."` WHERE `shoppingCartId` = :shoppingCartId;";
        $statement = $connection->prepare($commandText);
        $statement->bindValue(":shoppingCartId", $shoppingCartId, \PDO::PARAM_INT);
        $statement->execute();
        $array_result =$statement->fetchAll(\PDO::FETCH_ASSOC);
        
        if (count($array_result) < 1) {
            return null;
        }
        $array = array();
        foreach ($array_result as $currentShoppingCartProduct) {
            $shoppingCartProductDTO = new ShoppingCartProductDTO();
            $shoppingCartProductDTO->setProductId((int)$currentShoppingCartProduct["productId"]);
            $shoppingCartProductDTO->setShoppingCartId((int)$currentShoppingCartProduct["shoppingCartId"]);
            $shoppingCartProductDTO->setQuantity((int)$currentShoppingCartProduct["quantity"]);
            $shoppingCartDTO = ShoppingCartDAO::dbSelectById($shoppingCartProductDTO->getShoppingCartId());
            if ($shoppingCartDTO instanceof ShoppingCartDTO) {
                $shoppingCartProductDTO->setShoppingCartDTO($shoppingCartDTO);
            }
            $productDTO = ProductDAO::dbSelectById($shoppingCartProductDTO->getProductId());
            
            if ($productDTO instanceof ProductDTO) {
                $shoppingCartProductDTO->setProductDTO($productDTO);
            }
            $array[] = $shoppingCartProductDTO;
        }
        return $array;
    }
    
    public static function dbSelectById(int $id) : ?ShoppingCartProductDTO {
        // TODO: Implement dbSelectById() method.
        return null;
    }
    public static function dbSelectByIds(int $productId, int $shoppingCartId) : ?ShoppingCartProductDTO {
        $connection = Application::getApplicationConnection();
        $statement = $connection->prepare("SELECT * FROM `".ShoppingCartProductDTO::getTableName()."` WHERE `productId` = :productId AND `shoppingCartId` = :shoppingCartId;");
        $statement->bindValue(":productId",$productId, \PDO::PARAM_INT);
        $statement->bindValue(":shoppingCartId",$shoppingCartId, \PDO::PARAM_INT);
        
            $statement->execute();
            $result = $statement->fetchAll(\PDO::FETCH_ASSOC);
            if (count($result) == 1) {
                $shoppingCartProductDTO = new ShoppingCartProductDTO();
                $shoppingCartProductDTO->setProductId((int)$result[0]["productId"]);
                $shoppingCartProductDTO->setShoppingCartId((int)$result[0]["shoppingCartId"]);
                $shoppingCartProductDTO->setQuantity((int)$result[0]["quantity"]);
                return $shoppingCartProductDTO;
            }
            else {
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
            if ($dto instanceof ShoppingCartProductDTO) {
                $statement = $connection->prepare("INSERT INTO `".ShoppingCartProductDTO::getTableName()."` (`productId`, `shoppingCartId`, `quantity`) VALUES (:productId, :shoppingCartId, :quantity);");
                $statement->bindValue(":productId", $dto->getProductId(), \PDO::PARAM_INT);
                $statement->bindValue(":shoppingCartId", $dto->getShoppingCartId(), \PDO::PARAM_INT);
                $statement->bindValue(":quantity", $dto->getQuantity(), \PDO::PARAM_INT);
                $statement->execute();
                $last_id = $connection->lastInsertId();
                $connection->commit();
                return (int)$last_id;
            }
            else {
                throw new \Exception("The instance is not ShoppingCartProductDTO");
            }
        }
        catch (\Exception $exception) {
            $connection->rollBack();
            throw new \Exception("Can not insert the data because ".$exception->getMessage(), 500, $exception);
        }
    }
    
    /**
     * @throws \Exception
     */
    public static function dbDelete(IDto $dto) : void {
       // TODO: Change the autogenerated stub
        $connection = Application::getApplicationConnection();
        $connection->beginTransaction();
        try {
            if ($dto instanceof ShoppingCartProductDTO) {
                $statement = $connection->prepare("DELETE FROM `".$dto::class::getTableName().
                                                  "` WHERE `productId` = :productId AND `shoppingCartId` = :shoppingCartId;"
                );
                $statement->bindValue(":productId", $dto->getProductId(), \PDO::PARAM_INT);
                $statement->bindValue(":shoppingCartId", $dto->getShoppingCartId(), \PDO::PARAM_INT);
                $statement->execute();
                $connection->commit();
            }
            else {
                throw new \Exception("The instance is not ShoppingCartProductDTO");
            }
        }
        catch (\Exception $exception) {
            $connection->rollBack();
            throw new \Exception("Can not delete the data because ".$exception->getMessage(), 500, $exception);
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
            if ($dto instanceof ShoppingCartProductDTO) {
                $statement = $connection->prepare("UPDATE `".ShoppingCartProductDTO::getTableName()."` SET `quantity` = :quantity WHERE `productId` = :productId AND `shoppingCartId` = :shoppingCartId;");
                $statement->bindValue(":quantity", $dto->getQuantity(), \PDO::PARAM_INT);
                $statement->bindValue(":productId", $dto->getProductId(), \PDO::PARAM_INT);
                $statement->bindValue(":shoppingCartId", $dto->getShoppingCartId(), \PDO::PARAM_INT);
                $statement->execute();
                $connection->commit();
            }
            else {
                throw new \Exception("The instance is not ShoppingCartProductDTO");
            }
        }
        catch (\Exception $exception) {
            $connection->rollBack();
            throw new \Exception("Can not update the data because ".$exception->getMessage(), 500, $exception);
        }
    }
}