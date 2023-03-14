<?php
declare(strict_types=1);

/*
 * 420DW3_Midterm_Summative actions.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-03-09
 * (c) Copyright 2023 Hoang Truong 
 */

require_once __DIR__.DIRECTORY_SEPARATOR."..".DIRECTORY_SEPARATOR."includes".DIRECTORY_SEPARATOR."database.php";
if (empty($_REQUEST["action"]))
{
    http_response_code(404);
    exit(0);
}
else {
    switch ($_REQUEST["action"]){
        case "created":{
            create();
            break;
        }
        case "updated": {
            update();
            break;
        }
        case "deleted": {
            delete();
            break;
        }
        default: {
            echo "Invalid action: ".$_REQUEST["action"];
            http_response_code(404);
            break;
        }
    }
}

function create() : void {
    if (empty($_REQUEST["title"]) || empty($_REQUEST["director"]) || empty($_REQUEST["year"])){
        echo "Missing some information";
        http_response_code(500);
    }
    else {
        $result = insert_movie($_REQUEST["title"],$_REQUEST["director"],(int)$_REQUEST["year"]);
        if (!is_array($result)){
            $url_redirect = "/420DW3_Midterm_Summative/view_site.php?id=".$result;
            header("Location: ".$url_redirect,true,303);
        }
        else {
            echo "Errno: ".$result["errno"]."\nError: ".$result["error"];
            http_response_code(500);
        }
    }
}

function update() : void {
    if (empty($_REQUEST["title"]) || empty($_REQUEST["director"] || empty($_REQUEST["year"]) || empty($_REQUEST["id"]) || !is_numeric($_REQUEST["id"]))){
        http_response_code(500);
    }
    else {
         $result = update_movie((int)$_REQUEST["id"],$_REQUEST["title"],$_REQUEST["director"],(int)$_REQUEST["year"]);
         if (!is_array($result)){
             $url_redirect = "/420DW3_Midterm_Summative/view_site.php?id=".$_REQUEST["id"];
             header("Location: ".$url_redirect,true,303);
         }
         else {
             echo "Errno: ".$result["errno"]."\nError: ".$result["error"];
             http_response_code(500);
         }
    }
}

function delete() : void {
    if (empty($_REQUEST["id"]) || !is_numeric($_REQUEST["id"])){
        http_response_code(500);
    }
    else {
        $result = delete_movie((int)$_REQUEST["id"]);
        if (!is_array($result)){
            $url_redirect = "/420DW3_Midterm_Summative/";
            header("Location: ".$url_redirect, true,303);
        }
        else {
            echo "Errno: ".$result["errno"]."\nError: ".$result["error"];
            http_response_code(500);
        }
    }
}
