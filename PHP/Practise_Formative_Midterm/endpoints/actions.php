<?php
declare(strict_types=1);

/*
 * Practise_Formative_Midterm actions.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-03-09
 * (c) Copyright 2023 Hoang Truong 
 */

require_once __DIR__.DIRECTORY_SEPARATOR."..".DIRECTORY_SEPARATOR."includes".DIRECTORY_SEPARATOR."database.php";



function create() : void {
    if (empty($_REQUEST["make"]) || empty($_REQUEST["model_string"]) || empty($_REQUEST["year"])){
        http_response_code(500);
    }
    else {
        $result = insert_car($_REQUEST["make"],$_REQUEST["model_string"],(int)$_REQUEST["year"]);
        if (is_array($result)){
            echo "Errno: ".$result["errno"].". Error: ".$result["error"];
            http_response_code(500);
        }
        else {
            $url_redirect = "/Practise_Formative_Midterm/view.php?id=".$result;
            header("Location: ".$url_redirect,true,303);
        }
    }
}

function update() : void {
    if (empty($_REQUEST["make"]) || empty($_REQUEST["model_string"]) || empty($_REQUEST["year"]) || empty($_REQUEST["id"]) || !is_numeric($_REQUEST["id"])) {
        http_response_code(500);
    }
    else {
        $result = update_car((int)$_REQUEST["id"],$_REQUEST["make"],$_REQUEST["model_string"], (int)$_REQUEST["year"]);
        if (is_array($result)){
            echo "Errno: ".$result["errno"].". Error: ".$result["error"];
            http_response_code(500);
        }
        else {
            $url_redirect = "/Practise_Formative_Midterm/view.php?id=".$_REQUEST["id"];
            header("Location: ".$url_redirect,true,303);
        }
    }
}

function delete() : void {
    if (empty($_REQUEST["id"]) || !is_numeric($_REQUEST["id"])){
        http_response_code(500);
    }
    else {
        $result = delete_car((int)$_REQUEST["id"]);
        if (is_array($result)){
            echo "Errno: ".$result["errno"].". Error: ".$result["error"];
            http_response_code(500);
        }
        else {
            $url_redirect = "/Practise_Formative_Midterm/";
            header("Location: ".$url_redirect,true,303);
        }
    }
}

if (!empty($_REQUEST["action"])){
    switch ($_REQUEST["action"]){
        case "created":{
            create();
            break;
        }
        case "updated": {
            update();
            break;
        }
        case "deleted":{
            delete();
            break;
        }
        default:{
            echo "The request for action is invalid: ".$_REQUEST["action"];
            http_response_code(404);
            break;
        }
    }
}
else {
    http_response_code(404);
}