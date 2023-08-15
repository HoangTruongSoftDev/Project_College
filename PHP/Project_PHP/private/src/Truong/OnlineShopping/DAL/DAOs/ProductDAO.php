<?php
declare(strict_types=1);

/*
 * Project_PHP ProductDAO.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-03-30
 * (c) Copyright 2023 Hoang Truong 
 */

namespace Truong\OnlineShopping\DAL\DAOs;

use MongoDB\Driver\Exception\Exception;
use PDO;
use DateTime;
use Truong\OnlineShopping\Application;
use Truong\OnlineShopping\DAL\Models\CustomerDTO;
use Truong\OnlineShopping\DAL\Models\IDto;
use Truong\OnlineShopping\DAL\Models\ProductDTO;

class ProductDAO extends AbstractDAO {
    
    public static function dbSelectById(int $id) : ?ProductDTO {
        // TODO: Implement dbSelectById() method.
        $product = new ProductDTO();
        $connection = Application::getApplicationConnection();
            $statement = $connection->prepare("SELECT * FROM `".ProductDTO::getTableName()."` WHERE `id` = :id;");
            $statement->bindValue(":id", $id, PDO::PARAM_INT);
            $statement->execute();
            $result = $statement->fetchAll(PDO::FETCH_ASSOC);
            if (count($result) == 1) {
                $product->setId((int) $result[0]["id"]);
                $product->setDisplayName((string) $result[0]["displayName"]);
                $product->setDescription((string) $result[0]["description"]);
                $product->setImageUrl((string) $result[0]["imageUrl"]);
                $product->setUnitPrice((float) $result[0]["unitPrice"]);
                $product->setAvailableQuantity((int) $result[0]["availableQuantity"]);
                $product->setDateCreated(DateTime::createFromFormat(Application::FORMAT_OF_DATETIME,
                                                                    $result[0]["dateCreated"]
                )
                );
                return $product;
            } else {
                return null;
            }
        
    }
    
    /**
     * @throws \Exception
     * @throws Exception
     */
    public static function dbCreate(IDto $dto) : int {
        // TODO: Implement dbCreate() method.
        $connection = Application::getApplicationConnection();
        $connection->beginTransaction();
        try {
            if ($dto instanceof ProductDTO) {
                if (empty($dto->getDisplayName()) || empty($dto->getDescription()) || empty($dto->getImageUrl()) || empty($dto->getUnitPrice()) || empty($dto->getAvailableQuantity())) {
                    throw new \Exception("Missing some information to create the product");
                }
                if ( !is_numeric($dto->getAvailableQuantity())) {
                    throw new \Exception("Available quantity must be numeric type");
                }
                $statement = $connection->prepare(
                    "INSERT INTO `".ProductDTO::getTableName()."`(`displayName`,`description`,`imageUrl`,`unitPrice`,`availableQuantity`)
                            VALUES (:displayName,:description,:imageUrl,:unitPrice,:availableQuantity);");
                $statement->bindValue(":displayName",$dto->getDisplayName(), PDO::PARAM_STR);
                $statement->bindValue(":description", $dto->getDescription(), PDO::PARAM_STR);
                $statement->bindValue(":imageUrl", $dto->getImageUrl(), PDO::PARAM_STR);
                $statement->bindValue(":unitPrice", $dto->getUnitPrice(), PDO::PARAM_STR);
                $statement->bindValue(":availableQuantity", $dto->getAvailableQuantity(), PDO::PARAM_INT);
                $statement->execute();
                $last_id = $connection->lastInsertId();
                $connection->commit();
                return (int)$last_id;
            }
            else {
                throw new \Exception("The instance is not CustomerDTO");
            }
        }
        catch (\Exception $exception) {
            $connection->rollBack();
            throw new \Exception("Can not insert the data because ".$exception->getMessage(), 500, $exception);
        }
    }
    
    /**
     * @throws \Exception
     * @throws Exception
     */
    public static function dbUpdate(IDto $dto) : void {
        // TODO: Implement dbUpdate() method.
        $connection = Application::getApplicationConnection();
        $connection->beginTransaction();
        try {
            if ($dto instanceof ProductDTO) {
                if (empty($dto->getDisplayName()) || empty($dto->getDescription()) || empty($dto->getImageUrl()) || empty($dto->getUnitPrice()) || empty($dto->getAvailableQuantity()) || empty($dto->getId())) {
                    throw new \Exception("Missing some information to update the product");
                }
                if (!is_numeric($dto->getId()) || !is_numeric($dto->getAvailableQuantity())) {
                    throw new \Exception("Id or available quantity must be numeric type");
                }
                $statement = $connection->prepare(
                    "UPDATE `".ProductDTO::getTableName()."` SET `displayName` = :displayName ,`description` = :description,`imageUrl` = :imageUrl,`unitPrice` = :unitPrice,`availableQuantity` = :availableQuantity
                            WHERE `id` = :id;");
                $statement->bindValue(":displayName",$dto->getDisplayName(), PDO::PARAM_STR);
                $statement->bindValue(":description", $dto->getDescription(), PDO::PARAM_STR);
                $statement->bindValue(":imageUrl", $dto->getImageUrl(), PDO::PARAM_STR);
                $statement->bindValue(":unitPrice", $dto->getUnitPrice(), PDO::PARAM_STR);
                $statement->bindValue(":availableQuantity", $dto->getAvailableQuantity(), PDO::PARAM_INT);
                $statement->bindValue(":id", $dto->getId(), PDO::PARAM_INT);
                $statement->execute();
                $connection->commit();
            }
            else {
                throw new \Exception("The instance is not CustomerDTO");
            }
        }
        catch (\Exception $exception) {
            $connection->rollBack();
            throw new \Exception("Can not update the data because ".$exception->getMessage(), 500, $exception);
        }
    }
    
    public static function dbSelectAll() : ?array {
        
        // TODO: Implement dbSelectAll() method.
        $connection = Application::getApplicationConnection();
        $statement = $connection->prepare("SELECT * FROM `".ProductDTO::getTableName()."`;");
        $statement->execute();
        $array_result = $statement->fetchAll(PDO::FETCH_ASSOC);
        if (count($array_result) < 1) {
            return null;
        } else {
            $array = array();
            foreach ($array_result as $product) {
                $productDTO = new ProductDTO();
                $productDTO->setId((int) $product["id"]);
                $productDTO->setDisplayName((string) $product["displayName"]);
                $productDTO->setDescription((string) $product["description"]);
                $productDTO->setImageUrl((string) $product["imageUrl"]);
                $productDTO->setUnitPrice((float) $product["unitPrice"]);
                $productDTO->setAvailableQuantity((int) $product["availableQuantity"]);
                $productDTO->setDateCreated(DateTime::createFromFormat(Application::FORMAT_OF_DATETIME,
                                                                       $product["dateCreated"]));
                $array[] = $productDTO;
            }
            return $array;
        }
    }
}