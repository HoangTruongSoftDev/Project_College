<?php
declare(strict_types=1);

/*
 * 420DW3_07250_Final PdoConnector.php
 * 
 * @author Marc-Eric Boury (Newironsides)
 * @since 2023-04-12
 * (c) Copyright 2023 Marc-Eric Boury 
 */

/**
 * Class to manage and obtain PDO connection objects for use elsewhere
 */
class PdoConnector {
    
    /**
     * Path to the config.json file
     */
    private const CONFIG_FILE_PATH = CONFIG_DIR."config.json";
    
    private static ?PDO $pdo_connection = null;
    
    /**
     * @throws Exception
     */
    public static function getConnection() : PDO {
        // TODO: complete this method. Remember to read the connection information from the config.json file
        // Hint: You can use the constant defined in this class to easily access the correct file
        try {
            if (!(self::$pdo_connection instanceof PDO)) {
                $data_connection_array = self::getConnectionDataFromConfig();
                $dsn_string = "{$data_connection_array["db_type"]}:host={$data_connection_array["db_host"]};port={$data_connection_array["db_port"]};dbname={$data_connection_array["db_name"]};charset=UTF8";
                $username = $data_connection_array["db_username"];
                $passowrd = $data_connection_array["db_password"];
                self::$pdo_connection = new PDO($dsn_string, $username, $passowrd);
                self::$pdo_connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            }
            return self::$pdo_connection;
        }
        catch (Throwable $exception) {
            throw new Exception("Can not establish connection to database!");
    
        }
    }
    public static function getConnectionDataFromConfig() : array {
        $data_array = file_get_contents(self::CONFIG_FILE_PATH);
        return json_decode($data_array, true);
    }
}