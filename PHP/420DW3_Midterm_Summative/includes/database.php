<?php
declare(strict_types=1);

/*
 * 420DW3_Midterm_Summative database.php
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
function connect_database() : mysqli {
    return new mysqli("localhost","root","","420dw3_midterm_summative",3306);
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
function validate_string(string $string) : void {
        if(!preg_match("/^([a-zA-Z]|-|[ ]|:)*$/mi",$string)){
        throw new  Exception("The $string you input is not a string");
    }
}

/**
 * @param int $num
 *
 * @return void
 * @throws Exception
 *
 * @author Hoang Truong
 * @since  2023-03-09
 */
function validate_number(int $num) : void {
    if(!preg_match("/^[0-9]*$/mi",(string)$num)){
        throw new Exception("The $num you input is not a string");
    }
}

/**
 * @param string $title
 * @param string $director
 * @param int    $year
 *
 * @return array|int
 *
 * @author Hoang Truong
 * @since  2023-03-09
 */
function insert_movie(string $title, string $director, int $year): array | int {
    try {
        
        validate_string($title);
        validate_string($director);
        validate_number($year);
    }
    catch (Exception $ex){
        return [
            "errno"=>0,
            "error"=>$ex->getMessage()
        ];
    }
    $conn = connect_database();
    $conn->begin_transaction();
    try {
        $statement = $conn->prepare("INSERT INTO `movies`(`title`,`director`,`year`) VALUES(?,?,?);");
        $statement->bind_param("ssi",$title,$director,$year);
        $statement->execute();
        $conn->commit();
        return $statement->insert_id;
    }
    catch (Exception $ex){
        $conn->rollback();
        return [
            "errno"=>$conn->errno,
            "error"=>$conn->error
        ];
    }
}

/**
 * @param int    $id
 * @param string $title
 * @param string $director
 * @param int    $year
 *
 * @return array|bool
 *
 * @author Hoang Truong
 * @since  2023-03-09
 */
function update_movie(int $id, string $title, string $director, int $year) : array | bool {
    try {
        validate_string($title);
        validate_string($director);
        validate_number($year);
        validate_number($id);
    }
    catch (Exception $ex){
        return [
            "errno"=>0,
            "error"=>$ex->getMessage()
        ];
    }
    
    $conn = connect_database();
    $conn->begin_transaction();
    try {
        $statement = $conn->prepare("UPDATE `movies` SET `title` = ?, `director` = ?,`year` = ? WHERE `id` = ?;");
        $statement->bind_param("ssii",$title,$director,$year,$id);
        $statement->execute();
        $conn->commit();
        return true;
    }
    catch (Exception $ex){
        $conn->rollback();
        return [
            "errno"=>$conn->errno,
            "error"=>$conn->error
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
function delete_movie(int $id) : array | bool {
    try {
        validate_number($id);
    }
    catch (Exception $ex){
        return [
            "errno"=>0,
            "error"=>$ex->getMessage()
        ];
    }
    $conn = connect_database();
    $conn->begin_transaction();
    try {
        $statement = $conn->prepare("DELETE FROM `movies` WHERE `id` = ?;");
        $statement->bind_param("i",$id);
        $statement->execute();
        $conn->commit();
        return true;
    }
    catch (Exception $ex){
        $conn->rollback();
        return [
            "errno"=>$conn->errno,
            "error"=>$conn->error
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
function select_movie(int $id) : array {
    try {
        validate_number($id);
    }
    catch (Exception $ex) {
        return [
            "errno"=>0,
            "error"=>$ex->getMessage()
        ];
    }
    $conn = connect_database();
    $statement = $conn->prepare("SELECT * FROM `movies` WHERE `id` = ?");
    $statement->bind_param("i",$id);
    try {
        $statement->execute();
        $result = $statement->get_result();
        if ($result->num_rows == 0){
            return [];
        }
        else {
            return $result->fetch_assoc();
        }
    }
    catch (Exception $ex) {
        return [
            "errno"=>$conn->errno,
            "error"=>$conn->error
        ];
    }
    
}