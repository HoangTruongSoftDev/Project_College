<?php
declare(strict_types=1);

/*
 * 420DW3_07250_Final VideoGame.php
 * 
 * @author Marc-Eric Boury (Newironsides)
 * @since 2023-04-12
 * (c) Copyright 2023 Marc-Eric Boury 
 */

namespace models;

use Enums\EnumGenre;
use Exception;

/**
 * Model class representing a Video Game
 * TODO: complete this class that represents an entity model
 */
class VideoGame {
    
    private const DB_TABLE_NAME = "games";
    
    // TODO: object properties and getter/setters
    // Note: remember to validate the values in the setters
    private int $id;
    private string $title;
    private EnumGenre $genre;
    private string $developer;
    private int $realease_year;
    private \DateTime $date_created;
    
    /**
     * @return int
     */
    public function getId() : int {
        return $this->id;
    }
    
    /**
     * @param int $id
     *
     * @throws \Exception
     */
    public function setId(int $id) : void {
        if ($id < 1) {
            throw new \Exception("The id of game is invalid!");
        }
        $this->id = $id;
    }
    
    /**
     * @return string
     */
    public function getTitle() : string {
        return $this->title;
    }
    
    /**
     * @param string $title
     *
     * @throws \Exception
     */
    public function setTitle(string $title) : void {
        if (strlen($title) > 128) {
            throw new \Exception("The title of game is max 128 characters!");
        }
        $this->title = $title;
    }
    
    /**
     * @return EnumGenre
     */
    public function getGenre() : EnumGenre {
        return $this->genre;
    }
    
    /**
     * @param EnumGenre $genre
     *
     * @throws \Exception
     */
    public function setGenre(EnumGenre $genre) : void {
        if (($genre->value != EnumGenre::FPS->value) && ($genre->value != EnumGenre::STRATEGY->value) && $genre->value != EnumGenre::SIMULATION->value && $genre->value != EnumGenre::RPG->value) {
            throw new \Exception("The Genre of the game is invalid");
        }
        $this->genre = $genre;
    }
    
    /**
     * @return string
     */
    public function getDeveloper() : string {
        return $this->developer;
    }
    
    /**
     * @param string $developer
     *
     * @throws \Exception
     */
    public function setDeveloper(string $developer) : void {
        if (strlen($developer) > 128) {
            throw new \Exception("The developer name of game is max 128 characters!");
        }
        $this->developer = $developer;
    }
    
    /**
     * @return string
     */
    public function getRealeaseYear() : int {
        return $this->realease_year;
    }
    
    /**
     * @param string $realease_year
     *
     * @throws \Exception
     */
    public function setRealeaseYear(int $realease_year) : void {
        if (!is_numeric($realease_year)) {
            throw new \Exception("The Realease Year of game is not numberic!");
        }
        
        $this->realease_year = $realease_year;
    }
    
    /**
     * @return \DateTime
     */
    public function getDateCreated() : \DateTime {
        return $this->date_created;
    }
    
    /**
     * @param \DateTime $date_created
     */
    public function setDateCreated(\DateTime $date_created) : void {
        $this->date_created = $date_created;
    }
    public function __construct() {
        // you should not need to change this default constructor.
        // when creating a new instance, use the setter methods to
        // set the values for the properties
    }
    
    
    /**
     * @throws \Exception
     */
    public static function dbFetchById(int $id) : self {
        // TODO: complete the 'read' operation method
        // Note: it must return an instance of the class
        try {
            if (!is_numeric($id)) {
                throw new \Exception("The id parameter is not numeric");
            }
            if(empty($id)) {
                throw new \Exception("Missing parameter id!");
            }
            
            $connection =\PdoConnector::getConnection();
            $statement = $connection->prepare("SELECT * FROM `".self::DB_TABLE_NAME."` WHERE `id` = :id;");
            $statement->bindValue(":id", $id, \PDO::PARAM_INT);
            $statement->execute();
            $found_game_array = $statement->fetchAll(\PDO::FETCH_ASSOC);
            
            if (count($found_game_array) == 1) {
                $found_game = new VideoGame();
                $found_game->setId((int)$found_game_array[0]["id"]);
                $found_game->setTitle((string)$found_game_array[0]["title"]);
                $found_game->setGenre(EnumGenre::from($found_game_array[0]["genre"]));
                $found_game->setDeveloper((string)$found_game_array[0]["developer"]);
                $found_game->setRealeaseYear((int)$found_game_array[0]["release_year"]);
                $found_game->setDateCreated(\DateTime::createFromFormat("Y-m-d H:i:s",$found_game_array[0]["date_created"]));
                
                return $found_game;
            }
            else {
                throw new \Exception("The Game isn't found or isn't unique!");
            }
        }
        catch (\Throwable $exception) {
            throw new \Exception("Can't find the game with id: $id", 0, $exception);
        }
    }
    
    /**
     * @throws \Exception
     */
    public function dbInsert() : self {
        // TODO: complete the 'insert' operation method
        // Note: it must return an instance of the class
        // Note2: remember to retrieve the generated data (id, update date...) from the database
        try {
            
            
            if (empty($this->getTitle()) || empty($this->getGenre()) || empty($this->getDeveloper()) || empty($this->getRealeaseYear())) {
                throw new \Exception("Missing some parameters to insert");
            }
            if (!is_numeric($this->getRealeaseYear())) {
                throw new \Exception("Release year must be numeric");
            }
            $connection = \PdoConnector::getConnection();
            $statement = $connection->prepare("INSERT INTO `".self::DB_TABLE_NAME."` (`title`,`genre`,`developer`,`release_year`) VALUES (:title, :genre, :developer, :release_year);");
            $statement->bindValue(":title", $this->getTitle());
            $statement->bindValue(":genre", $this->getGenre()->value);
            $statement->bindValue(":developer", $this->getDeveloper());
            $statement->bindValue(":release_year", $this->getRealeaseYear(), \PDO::PARAM_INT);
            $statement->execute();
            $last_game_id = (int)$connection->lastInsertId();
            $game = self::dbFetchById($last_game_id);
            return $game;
        }
        catch (\Throwable $exception) {
            throw new \Exception("Can't insert the game", 0, $exception);
        }
    }
    
    /**
     * @throws \Exception
     */
    public function dbModify() : self {
        // TODO: complete the 'update' operation method
        // Note: it must return an instance of the class
        try {
            if (empty($this->getTitle()) || empty($this->getGenre()) || empty($this->getDeveloper()) || empty($this->getRealeaseYear()) || empty($this->getId())) {
                throw new \Exception("Missing some parameters to insert");
            }
            if (!is_numeric($this->getRealeaseYear()) || !is_numeric($this->getId())) {
                throw new \Exception("Release year or ID must be numeric");
            }
            $connection = \PdoConnector::getConnection();
            $statement = $connection->prepare("UPDATE `".self::DB_TABLE_NAME."` SET `title` = :title , `genre` = :genre , `developer` = :developer , `release_year` = :release_year WHERE `id` = :id;");
            $statement->bindValue(":title", $this->getTitle());
            $statement->bindValue(":genre", $this->getGenre()->value);
            $statement->bindValue(":developer", $this->getDeveloper());
            $statement->bindValue(":release_year", $this->getRealeaseYear(), \PDO::PARAM_INT);
            $statement->bindValue(":id", $this->getId());
            $statement->execute();
            $game = self::dbFetchById($this->getId());
            return $game;
        }
        catch (\Throwable $exception) {
            throw new \Exception("Can't update the game", 0, $exception);
        }
    }
    
    /**
     * @throws \Exception
     */
    public function dbDelete() : void {
        // TODO: complete the 'delete' operation method
        try {
            if (empty($this->getId())) {
                throw new \Exception("Missing some parameters to insert");
            }
            if (!is_numeric($this->getId())) {
                throw new \Exception("ID must be numeric");
            }
            $connection = \PdoConnector::getConnection();
            $connection->beginTransaction();
            $statement = $connection->prepare("DELETE FROM `".self::DB_TABLE_NAME."` WHERE `id` = :id;");
            $statement->bindValue(":id", $this->getId());
            $statement->execute();
            $connection->commit();
        }
        catch (\Throwable $exception) {
            if (isset($connection)) {
                $connection->rollBack();
            }
            throw new \Exception("Can't delete the game", 0, $exception);
        }
    }
    
}