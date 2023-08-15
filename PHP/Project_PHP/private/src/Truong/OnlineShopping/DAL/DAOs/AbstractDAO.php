<?php
declare(strict_types=1);

/*
 * Project_PHP AbstractDAO.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-03-23
 * (c) Copyright 2023 Hoang Truong 
 */

namespace Truong\OnlineShopping\DAL\DAOs;
use Truong\OnlineShopping\Application;
use Truong\OnlineShopping\DAL\Models\IDto;
use Exception;
use PDO;
abstract class AbstractDAO implements IDao {
    abstract protected static function dbSelectAll() : ?array;
    
    /**
     * @throws Exception
     */
    public static function dbDelete(IDto $dto) : void {
        // TODO: Implement dbDelete() method.
        if (empty($dto->getId())) {
            throw new Exception("Missing ID to execute the delete statement");
        }
        $connection = Application::getApplicationConnection();
        $connection->beginTransaction();
        try {
            if (empty($dto->getId())) {
                throw new Exception("Missing ID to execute delete statement");
            }
            if (!is_numeric($dto->getId())) {
                throw new Exception("ID must be numeric type to execute delete statement");
            }
            $statement = $connection->prepare("DELETE FROM `".$dto::class::getTableName()."` WHERE `id` = :id;");
            $statement->bindValue(":id", $dto->getId(),PDO::PARAM_INT);
            $statement->execute();
            $connection->commit();
        }
        catch (Exception $exception) {
            $connection->rollBack();
            throw new \Exception("Can not delete the data because ".$exception->getMessage(), 500, $exception);
            
        }
    }
    
    abstract protected static function dbSelectById (int $id) : ?IDto;
    abstract protected static function dbCreate(IDto $dto) : int;
    abstract protected static function dbUpdate(IDto $dto) : void;
}