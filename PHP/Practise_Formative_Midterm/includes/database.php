<?php
declare(strict_types=1);

/*
 * Practise_Formative_Midterm database.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-03-09
 * (c) Copyright 2023 Hoang Truong 
 */

mysqli_report(MYSQLI_REPORT_ERROR|MYSQLI_REPORT_STRICT);
/**
 * @return mysqli
 *
 * @author Hoang Truong
 * @since  2023-03-09
 */
function get_connection() : mysqli {
    return new mysqli("localhost","root","","420dw3_midterm_formative",3306);
}

/**
 * @param string $string
 *
 * @return void
 * @throws Exception
 *
 * @author Hoang Truong
 * @since  2023-03-09
 */
function validate_string(string $string) : void{
    if (!preg_match("/^([a-zA-Z]|-)*$/mi",$string)){
        throw new Exception("The $string you input is not a string");
    }
}

/**
 * @param int $number
 *
 * @return void
 * @throws Exception
 *
 * @author Hoang Truong
 * @since  2023-03-09
 */
function validate_number (int $number) : void {
    if (!preg_match("/^[0-9]+$/m",(string)$number)){
        throw new Exception("The $number you input is not a number");
    }
}

/**
 * @param string $make
 * @param string $model_string
 * @param int    $year
 *
 * @return array|int
 *
 * @author Hoang Truong
 * @since  2023-03-09
 */
function insert_car(string $make, string $model_string, int $year) : array | int {
    try {
        validate_string($make);
        validate_string($model_string);
        validate_number($year);
    }
    catch (Exception $exception){
        return ["errno" => 0,
                "error" => $exception->getMessage()
        ];
    }
    
    $connection = get_connection();
    $connection->begin_transaction();
    try {
        $statement = $connection->prepare("INSERT INTO `car_models`(`make`,`model_string`,`year`) VALUES(?,?,?);");
        $statement->bind_param("ssi",$make, $model_string, $year);
        $statement->execute();
        $connection->commit();
        return $statement->insert_id;
    }
    catch(Exception $exception){
        $connection->rollback();
        return [
            "errno" => $connection->errno,
            "error" => $statement->error
        ];
    }
}

/**
 * @param int    $id
 * @param string $make
 * @param string $model_string
 * @param int    $year
 *
 * @return array|bool
 *
 * @author Hoang Truong
 * @since  2023-03-09
 */
function update_car(int $id, string $make, string $model_string, int $year) : array | bool{
    try {
        validate_string($make);
        validate_string($model_string);
        validate_number($year);
        validate_number($id);
    }
    catch (Exception $exception){
        return [
            "errno" => 0,
            "error" => $exception->getMessage()
        ];
    }
    $connection = get_connection();
    $connection->begin_transaction();
    try {
        $statement = $connection->prepare("UPDATE `car_models` SET `make` = ?, `model_string` = ?, `year` = ? WHERE `id` = ?;");
        $statement->bind_param("ssii",$make,$model_string,$year,$id);
        $statement->execute();
        $connection->commit();
        return true;
    }
    catch (Exception $exception){
        $connection->rollback();
        return [
            "errno" => $connection->errno,
            "error" => $statement->error
        ];
    }
}

/**
 * @param int $id
 *
 * @return array|bool
 *
 * @author Hoang Truong
 * @since  2023-03-09
 */
function delete_car(int $id) : array | bool {
    try {
        validate_number($id);
    }
    catch (Exception $exception){
        return [
            "errno" => 0,
            "error" => $exception->getMessage()
        ];
    }
    $connection = get_connection();
    $connection->begin_transaction();
    try {
        $statement = $connection->prepare("DELETE FROM `car_models` WHERE `id` = ?;");
        $statement->bind_param("i",$id);
        $statement->execute();
        $connection->commit();
        return true;
    }
    catch (Exception $exception){
        $connection->rollback();
        return [
            "errno" => $connection->errno,
            "error" => $connection->error
        ];
    }
}

/**
 * @param int $id
 *
 * @return array
 *
 * @author Hoang Truong
 * @since  2023-03-09
 */
function get_car(int $id) : array {
    try {
        validate_number($id);
    }
    catch (Exception $exception){
        return [
            "errno" => 0,
            "error" => $exception->getMessage()
        ];
    }
    
    $connection = get_connection();
    $statement = $connection->prepare("SELECT * FROM `car_models` WHERE `id` = ?;");
    $statement->bind_param("i",$id);
    $statement->execute();
    $result = $statement->get_result();
    if ($result->num_rows == 0){
        return [];
    }
    return $result->fetch_assoc();
}