<?php
declare(strict_types=1);

/*
 * Project_PHP CustomerDAO.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-03-23
 * (c) Copyright 2023 Hoang Truong 
 */

namespace Truong\OnlineShopping\DAL\DAOs;

use Truong\OnlineShopping\Application;
use Truong\OnlineShopping\DAL\Models\CustomerDTO;
use DateTime;
use PDO;
use Truong\OnlineShopping\DAL\Models\IDto;
use Exception;

class CustomerDAO extends AbstractDAO {
    public static function dbSelectAll() : ?array {
        // TODO: Implement dbSelectAll() method.
        
        $connection = Application::getApplicationConnection();
        $commandText = "SELECT * FROM `".CustomerDTO::getTableName()."`;";
        $statement = $connection->prepare($commandText);
        $statement->execute();
        $array_result = $statement->fetchAll(PDO::FETCH_ASSOC);
        
        if (count($array_result) < 1) {
            return null;
        }
        $array = array();
        foreach ($array_result as $customer) {
            $customerDTO = new CustomerDTO();
            $customerDTO->setId((int) $customer["id"]);
            $customerDTO->setUsername($customer["username"]);
            $customerDTO->setPasswordHash($customer["passwordHash"]);
            $customerDTO->setDateCreated(DateTime::createFromFormat(Application::FORMAT_OF_DATETIME,
                                                                    $customer["dateCreated"]
            )
            );
            $array[] = $customerDTO;
        }
        return $array;
        
    }
    
    public static function dbSelectById(int $id) : ?CustomerDTO {
        $customerDTO = new CustomerDTO();
        $connection = Application::getApplicationConnection();
        try {
            $statement = $connection->prepare("SELECT * FROM `".CustomerDTO::getTableName()."` WHERE `id` = :id;");
            $statement->bindValue(":id", $id, PDO::PARAM_INT);
            $statement->execute();
            $result = $statement->fetchAll(PDO::FETCH_ASSOC);
            if (count($result) == 1) {
                $customerDTO->setId((int) $result[0]["id"]);
                $customerDTO->setUsername($result[0]["username"]);
                $customerDTO->setPasswordHash($result[0]["passwordHash"]);
                $customerDTO->setDateCreated(DateTime::createFromFormat(Application::FORMAT_OF_DATETIME,
                                                                        $result[0]["dateCreated"]
                )
                );
                return $customerDTO;
            } else {
                throw new Exception("There is no Customer has been found ");
            }
        } catch (Exception $exception) {
            return null;
        }
    }
    
    /**
     * @throws Exception
     */
    public static function dbCreate(IDto $dto) : int {
        $connection = Application::getApplicationConnection();
        $connection->beginTransaction();
        try {
            if ($dto instanceof CustomerDTO) {
                if (empty($dto->getUsername()) || empty($dto->getPasswordHash())) {
                    throw new Exception("Missing some information to create the customer");
                }
                $statement = $connection->prepare("INSERT INTO `".CustomerDTO::getTableName().
                                                  "` (`username`, `passwordHash`) VALUES (:username, :passwordHash);"
                );
                $statement->bindValue(":username", $dto->getUsername(), PDO::PARAM_STR);
                $statement->bindValue(":passwordHash", $dto->getPasswordHash(), PDO::PARAM_STR);
                $statement->execute();
                $last_id = $connection->lastInsertId();
                $connection->commit();
                return (int) $last_id;
            } else {
                throw new Exception("The instance is not CustomerDTO");
            }
        } catch (Exception $exception) {
            $connection->rollBack();
            throw new \Exception("Can not insert the data because ".$exception->getMessage(), 500, $exception);
            
        }
    }
    
    /**
     * @throws Exception
     */
    public static function dbUpdate(IDto $dto) : void {
        // TODO: Implement dbUpdate() method.
        $connection = Application::getApplicationConnection();
        $connection->beginTransaction();
        try {
            if ($dto instanceof CustomerDTO) {
                if (empty($dto->getUsername()) || empty($dto->getPasswordHash()) || empty($dto->getId())) {
                    throw new Exception("Missing some information to update the customer");
                }
                if (!is_numeric($dto->getId())) {
                    throw new Exception("Id must be numeric type");
                }
                $statement = $connection->prepare("UPDATE `".CustomerDTO::getTableName().
                                                  "` SET `username` = :username, `passwordHash` = :passwordHash WHERE `id` = :id;"
                );
                $statement->bindValue(":username", $dto->getUsername(), PDO::PARAM_STR);
                $statement->bindValue(":passwordHash", $dto->getPasswordHash(), PDO::PARAM_STR);
                $statement->bindValue(":id", $dto->getId(), PDO::PARAM_INT);
                $statement->execute();
                $connection->commit();
            } else {
                throw new Exception("The instance is not CustomerDTO");
            }
        } catch (Exception $exception) {
            
            $connection->rollBack();
            throw new \Exception("Can not update the data because ".$exception->getMessage(), 500, $exception);
            
        }
    }
}