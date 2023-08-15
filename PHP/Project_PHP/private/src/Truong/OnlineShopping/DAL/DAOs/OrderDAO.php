<?php
declare(strict_types=1);

/*
 * Project_PHP OrderDAO.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-04-23
 * (c) Copyright 2023 Hoang Truong 
 */

namespace Truong\OnlineShopping\DAL\DAOs;

use Exception;
use Truong\OnlineShopping\Application;
use Truong\OnlineShopping\DAL\Models\Enums\OrderStatus;
use Truong\OnlineShopping\DAL\Models\IDto;
use Truong\OnlineShopping\DAL\Models\OrderDTO;
use Truong\OnlineShopping\DAL\Models\ShoppingCartDTO;

/**
 * @TODO   Documentation
 *
 * @author Hoang Truong
 * @since  2023-04-23
 */
class OrderDAO extends AbstractDAO {
    
    public static function dbSelectAll() : ?array {
        
        // TODO: Implement dbSelectAll() method.
        $connection = Application::getApplicationConnection();
        $commandText = "SELECT * FROM `".OrderDTO::getTableName()."`;";
        $statement = $connection->prepare($commandText);
        $statement->execute();
        $array_result =$statement->fetchAll(\PDO::FETCH_ASSOC);
    
        if (count($array_result) < 1) {
            return null;
        }
        $array = array();
        foreach ($array_result as $current_order) {
            $orderDTO = new OrderDTO();
            $orderDTO->setId((int)$current_order["id"]);
            $orderDTO->setStatus( OrderStatus::from((string)$current_order["status"]));
            $orderDTO->setCustomerId((int)$current_order["customerId"]);
            $orderDTO->setShoppingCartId((int)$current_order["shoppingCartId"]);
            $orderDTO->setBillingAddress((string)$current_order["billingAddress"]);
            $orderDTO->setShippingAddress((string)$current_order["shippingAddress"]);
            $orderDTO->setDateCreated(\DateTime::createFromFormat("Y-m-d H:i:s.u",$current_order["dateCreated"]));
            $orderDTO->setDatePlaced(\DateTime::createFromFormat("Y-m-d H:i:s.u",$current_order["datePlaced"]));
            $orderDTO->setDateShipped(\DateTime::createFromFormat("Y-m-d H:i:s.u",$current_order["dateShipped"]));
            
            $shoppingCartDTO = ShoppingCartDAO::dbSelectById($orderDTO->getShoppingCartId());
            if ($shoppingCartDTO instanceof ShoppingCartDTO) {
                $orderDTO->setShoppingCartDTO($shoppingCartDTO);
            }
            
            $array[] = $orderDTO;
        }
        return $array;
    }
    
    public static function dbSelectByCustomerId(int $customerId) : ?array {
        // TODO: Implement dbSelectAll() method.
        $connection = Application::getApplicationConnection();
        $commandText = "SELECT * FROM `".OrderDTO::getTableName()."` WHERE `customerId` = :customerId;";
        $statement = $connection->prepare($commandText);
        $statement->bindValue(":customerId", $customerId, \PDO::PARAM_INT);
        $statement->execute();
        $array_result =$statement->fetchAll(\PDO::FETCH_ASSOC);
        
        if (count($array_result) < 1) {
            return null;
        }
        $array = array();
        foreach ($array_result as $current_order) {
            $orderDTO = new OrderDTO();
            $orderDTO->setId((int)$current_order["id"]);
            $orderDTO->setStatus( OrderStatus::from((string)$current_order["status"]));
            $orderDTO->setCustomerId((int)$current_order["customerId"]);
            $orderDTO->setShoppingCartId((int)$current_order["shoppingCartId"]);
            $orderDTO->setBillingAddress((string)$current_order["billingAddress"]);
            $orderDTO->setShippingAddress((string)$current_order["shippingAddress"]);
            $orderDTO->setDateCreated(\DateTime::createFromFormat("Y-m-d H:i:s.u",$current_order["dateCreated"]));
            $orderDTO->setDatePlaced(\DateTime::createFromFormat("Y-m-d H:i:s.u",$current_order["datePlaced"]));
            $orderDTO->setDateShipped(\DateTime::createFromFormat("Y-m-d H:i:s.u",$current_order["dateShipped"]));
            
            $shoppingCartDTO = ShoppingCartDAO::dbSelectById($orderDTO->getShoppingCartId());
            if ($shoppingCartDTO instanceof ShoppingCartDTO) {
                $orderDTO->setShoppingCartDTO($shoppingCartDTO);
            }
            
            $array[] = $orderDTO;
        }
        return $array;
    }
    
    public static function dbSelectByCustomerId_OrderId(int $orderId, int $customerId) : ?array {
        // TODO: Implement dbSelectAll() method.
        $connection = Application::getApplicationConnection();
        $commandText = "SELECT * FROM `".OrderDTO::getTableName()."` WHERE `id` = :orderId AND `customerId` = :customerId;";
        $statement = $connection->prepare($commandText);
        $statement->bindValue(":orderId", $orderId, \PDO::PARAM_INT);
        $statement->bindValue(":customerId", $customerId, \PDO::PARAM_INT);
        $statement->execute();
        $array_result =$statement->fetchAll(\PDO::FETCH_ASSOC);
        
        if (count($array_result) < 1) {
            return null;
        }
        $array = array();
        foreach ($array_result as $current_order) {
            $orderDTO = new OrderDTO();
            $orderDTO->setId((int)$current_order["id"]);
            $orderDTO->setStatus( OrderStatus::from((string)$current_order["status"]));
            $orderDTO->setCustomerId((int)$current_order["customerId"]);
            $orderDTO->setShoppingCartId((int)$current_order["shoppingCartId"]);
            $orderDTO->setBillingAddress((string)$current_order["billingAddress"]);
            $orderDTO->setShippingAddress((string)$current_order["shippingAddress"]);
            $orderDTO->setDateCreated(\DateTime::createFromFormat("Y-m-d H:i:s.u",$current_order["dateCreated"]));
            $orderDTO->setDatePlaced(\DateTime::createFromFormat("Y-m-d H:i:s.u",$current_order["datePlaced"]));
            $orderDTO->setDateShipped(\DateTime::createFromFormat("Y-m-d H:i:s.u",$current_order["dateShipped"]));
            
            $shoppingCartDTO = ShoppingCartDAO::dbSelectById($orderDTO->getShoppingCartId());
            if ($shoppingCartDTO instanceof ShoppingCartDTO) {
                $orderDTO->setShoppingCartDTO($shoppingCartDTO);
            }
            
            $array[] = $orderDTO;
        }
        return $array;
    }
    public static function dbSelectById(int $id) : ?OrderDTO {
        // TODO: Implement dbSelectById() method.
        $connection = Application::getApplicationConnection();
        $commandText = "SELECT * FROM `".OrderDTO::getTableName()."` WHERE `id` = :id;";
        $statement = $connection->prepare($commandText);
        $statement->bindValue(":id", $id, \PDO::PARAM_INT);
        $statement->execute();
        $array_result =$statement->fetchAll(\PDO::FETCH_ASSOC);
        
        if (count($array_result) == 1) {
            $currentOrder = $array_result[0];
            $orderDTO = new OrderDTO();
            $orderDTO->setId((int)$currentOrder["id"]);
            $orderDTO->setStatus( OrderStatus::from((string)$currentOrder["status"]));
            $orderDTO->setCustomerId((int)$currentOrder["customerId"]);
            $orderDTO->setShoppingCartId((int)$currentOrder["shoppingCartId"]);
            $orderDTO->setBillingAddress((string)$currentOrder["billingAddress"]);
            $orderDTO->setShippingAddress((string)$currentOrder["shippingAddress"]);
            $orderDTO->setDateCreated(\DateTime::createFromFormat("Y-m-d H:i:s.u",$currentOrder["dateCreated"]));
            $orderDTO->setDatePlaced(\DateTime::createFromFormat("Y-m-d H:i:s.u",$currentOrder["datePlaced"]));
            $orderDTO->setDateShipped(\DateTime::createFromFormat("Y-m-d H:i:s.u",$currentOrder["dateShipped"]));
        
            $shoppingCartDTO = ShoppingCartDAO::dbSelectById($orderDTO->getShoppingCartId());
            if ($shoppingCartDTO instanceof ShoppingCartDTO) {
                $orderDTO->setShoppingCartDTO($shoppingCartDTO);
            }
            return $orderDTO;
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
       
        try {
            if ($dto instanceof OrderDTO) {
                if (empty($dto->getStatus()) || empty($dto->getCustomerId()) || empty($dto->getShoppingCartId()) || empty($dto->getBillingAddress()) || empty($dto->getShippingAddress())) {
                    throw new \Exception("Missing Parameter to update order");
                }
                if (!is_numeric($dto->getCustomerId()) || !is_numeric($dto->getShoppingCartId())) {
                    throw new \Exception(" Customer ID or Shopping Cart ID must be numeric type");
                }
                $connection = Application::getApplicationConnection();
                $connection->beginTransaction();
                $statement = $connection->prepare("INSERT INTO `".OrderDTO::getTableName()."` (`status`, `customerId`, `shoppingCartId`, `billingAddress`, `shippingAddress`) VALUES (:status, :customerId, :shoppingCartId, :billingAddress, :shippingAddress);");
                $statement->bindValue(":status", $dto->getStatus()->value, \PDO::PARAM_STR);
                $statement->bindValue(":customerId", $dto->getCustomerId(), \PDO::PARAM_INT);
                $statement->bindValue(":shoppingCartId", $dto->getShoppingCartId(), \PDO::PARAM_INT);
                $statement->bindValue(":billingAddress", $dto->getBillingAddress(), \PDO::PARAM_STR);
                $statement->bindValue(":shippingAddress", $dto->getShippingAddress(), \PDO::PARAM_STR);
                $statement->execute();
                $last_id = $connection->lastInsertId();
                $connection->commit();
                return (int)$last_id;
            }
            else {
                throw new \Exception("The instance is not OrderDTO");
            }
        }
        catch (\Exception $exception) {
            if (isset($connection)) {
                $connection->rollBack();
            }
            throw new \Exception("Can not insert the data because ".$exception->getMessage(), 500, $exception);
        }
    }
    
    /**
     * @throws \Exception
     */
    public static function dbUpdate(IDto $dto) : void {
        // TODO: Implement dbUpdate() method.
        
        try {
            if ($dto instanceof OrderDTO) {
                if (empty($dto->getId()) || empty($dto->getStatus()) || empty($dto->getCustomerId()) || empty($dto->getShoppingCartId()) || empty($dto->getBillingAddress()) || empty($dto->getShippingAddress())) {
                    throw new \Exception("Missing Parameter to update order");
                }
                if (!is_numeric($dto->getId()) || !is_numeric($dto->getCustomerId()) || !is_numeric($dto->getShoppingCartId())) {
                    throw new \Exception("Order ID or Customer ID or Shopping Cart ID must be numeric type");
                }
                $connection = Application::getApplicationConnection();
                $connection->beginTransaction();
                $statement = $connection->prepare("UPDATE `".OrderDTO::getTableName()."` SET `status` = :status, `customerId` = :customerId, `shoppingCartId` = :shoppingCartId, `billingAddress` = :billingAddress, `shippingAddress` = :shippingAddress WHERE `id` = :id;");
                $statement->bindValue(":status", $dto->getStatus()->value, \PDO::PARAM_STR);
                $statement->bindValue(":customerId", $dto->getCustomerId(), \PDO::PARAM_INT);
                $statement->bindValue(":shoppingCartId", $dto->getShoppingCartId(), \PDO::PARAM_INT);
                $statement->bindValue(":billingAddress", $dto->getBillingAddress(), \PDO::PARAM_STR);
                $statement->bindValue(":shippingAddress", $dto->getShippingAddress(), \PDO::PARAM_STR);
                $statement->bindValue(":id", $dto->getId(), \PDO::PARAM_INT);
                $statement->execute();
                $connection->commit();
            }
            else {
                throw new \Exception("The instance is not ShoppingCartDTO");
            }
        }
        catch (\Exception $exception) {
            if (isset($connection)) {
                $connection->rollBack();
            }
            throw new \Exception("Can not update the data! ".$exception->getMessage(), 500, $exception);
        }
    }
}