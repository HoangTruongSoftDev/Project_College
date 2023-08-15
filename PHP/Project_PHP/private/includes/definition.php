<?php
declare(strict_types=1);

/*
 * Project_PHP definition.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-03-25
 * (c) Copyright 2023 Hoang Truong 
 */

const PROJECT_ROOT_PATH = __DIR__.DIRECTORY_SEPARATOR."..".DIRECTORY_SEPARATOR."..".DIRECTORY_SEPARATOR;

const PRIVATE_PATH = PROJECT_ROOT_PATH."private".DIRECTORY_SEPARATOR;
const SRC_PATH = PRIVATE_PATH."src".DIRECTORY_SEPARATOR;

const PAGE_PATH = PRIVATE_PATH."pages".DIRECTORY_SEPARATOR;

const BLL_PATH = SRC_PATH."Truong".DIRECTORY_SEPARATOR."OnlineShopping".DIRECTORY_SEPARATOR."BLL".DIRECTORY_SEPARATOR;

const DAL_PATH = SRC_PATH."Truong".DIRECTORY_SEPARATOR."OnlineShopping".DIRECTORY_SEPARATOR."DAL".DIRECTORY_SEPARATOR;

const VIEW_PATH = SRC_PATH."Truong".DIRECTORY_SEPARATOR."OnlineShopping".DIRECTORY_SEPARATOR."Views".DIRECTORY_SEPARATOR;

const APPLICATION_PATH = SRC_PATH."Truong".DIRECTORY_SEPARATOR."OnlineShopping".DIRECTORY_SEPARATOR."Application.php";

const PUBLIC_PATH = PROJECT_ROOT_PATH."public".DIRECTORY_SEPARATOR; // Project_PHP\public\
const CSS_PATH = PUBLIC_PATH."css".DIRECTORY_SEPARATOR;

const ENDPOINTS_PATH = PUBLIC_PATH."endpoints".DIRECTORY_SEPARATOR;

const JS_PATH = PUBLIC_PATH."js".DIRECTORY_SEPARATOR;

const FRAGMENTS_PATH = PRIVATE_PATH."fragments".DIRECTORY_SEPARATOR;
const IMG_PATH = PUBLIC_PATH."img.".DIRECTORY_SEPARATOR;

const WEB_ROOT_PATH = "/Project_PHP/";
const WEB_PUBLIC_PATH = WEB_ROOT_PATH."public/";

const WEB_PRIVATE_PATH = WEB_ROOT_PATH."private/";

$psr4_autoloader = function (string $class) : bool {
    /*
        This function will pass the Fully Qualified Name (FQN) of the class
        For example, I have the class named CustomerDAO,
        and its FQN is Truong\OnlineShopping\DAL\DAOs\CustomerDAO,
        so this FQN will be passed to this function into the parameter named $class,
        then I define the class name the same with the PHP file which contains that class,
        so I simply put the extension ".php" to turn this as the path and require_once whenever I use the namespace
    */
    // use  Truong\OnlineShopping\BLL\CustomerController;
    // require "Truong\OnlineShopping\BLL\CustomerController.php"
    // $truong = new CustomerController();
    $file = str_replace("\\", DIRECTORY_SEPARATOR, $class).'.php';
    $path_file = SRC_PATH.DIRECTORY_SEPARATOR.$file;
    if (file_exists($path_file)) {
        require_once $path_file;
        return true;
    }
    return false;
};
spl_autoload_register($psr4_autoloader);

function testCookies() : bool {
    if (empty($_COOKIE["test_cookie"])) {
        if (empty($_REQUEST["cookies"])) {
            
            setcookie("test_cookie", "true", 0, "/Project_PHP/", $_SERVER["SERVER_NAME"]);
            
            if (str_contains($_SERVER["REQUEST_URI"], "?")) {
                $param_addon = "&"."cookies"."=true";
            } else {
                $param_addon = "?"."cookies"."=true";
            }
            
            header("Location: ".$_SERVER["REQUEST_URI"].$param_addon, true, 307);
            exit(0);
            
        } else {
            return false;
        }
    }
    return true;
}


