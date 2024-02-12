<?php
declare(strict_types=1);

require_once __DIR__.DIRECTORY_SEPARATOR."..".DIRECTORY_SEPARATOR."..".DIRECTORY_SEPARATOR."initializer.php";

/*
 * 420DW3_07250_Final api.php
 * 
 * @author Marc-Eric Boury (Newironsides)
 * @since 2023-04-12
 * (c) Copyright 2023 Marc-Eric Boury 
 */


if (empty($_REQUEST["action"])) {
    http_response_code(400);
    echo "400 BAD REQUEST: Missing [action] parameter in request.";
    exit(0);
}

/**
 * @throws Exception
 */
function do_create() : void {
    // TODO: complete this function to create a new entity in the database
    // Remember to use object-oriented code: use object instances
    
    if (empty($_REQUEST["title"]) || empty($_REQUEST["genre"]) || empty($_REQUEST["developer"]) ||empty($_REQUEST["release_year"])) {
        throw new Exception("Missing  some parameters");
    }
    if (!is_numeric($_REQUEST["release_year"])) {
        throw new Exception("Release Year must be numeric type");
    }
    $game = new \models\VideoGame();
    
    $game->setTitle((string)$_REQUEST["title"]);
    $game->setGenre(\Enums\EnumGenre::from((string)$_REQUEST["genre"]));
    $game->setDeveloper((string)$_REQUEST["developer"]);
    $game->setRealeaseYear((int)$_REQUEST["release_year"]);
    $created_game = $game->dbInsert();
    $response_array = ["redirect" => WEB_PAGES_DIR."view.php?id=".$created_game->getId()];
    header("Content-Type: application/json",true, 200 );
    echo json_encode($response_array);
}

/**
 * @throws Exception
 */
function do_modify() : void {
    // TODO: complete this function to modify an existing entity in the database
    // Remember to use object-oriented code: use object instances
    if (empty($_REQUEST["date_created"]) || empty($_REQUEST["id"]) ||empty($_REQUEST["title"]) || empty($_REQUEST["genre"]) || empty($_REQUEST["developer"]) ||empty($_REQUEST["release_year"])) {
        throw new Exception("Missing  some parameters");
    }
    if (!is_numeric($_REQUEST["release_year"]) || !is_numeric($_REQUEST["id"])) {
        throw new Exception("Release Year or ID must be numeric type");
    }
    $game = new \models\VideoGame();
    $game->setTitle((string)$_REQUEST["title"]);
    $game->setGenre(\Enums\EnumGenre::from((string)$_REQUEST["genre"]));
    $game->setDeveloper((string)$_REQUEST["developer"]);
    $game->setRealeaseYear((int)$_REQUEST["release_year"]);
    $game->setId((int)$_REQUEST["id"]);
    $game->setDateCreated(DateTime::createFromFormat("Y-m-d H:i:s", $_REQUEST["date_created"]));
    
    $updated_game = $game->dbModify();
    header("Content-Type: application/json", true, 200);
    echo json_encode(["redirect" => WEB_PAGES_DIR."view.php?id=".$updated_game->getId()]);
}

/**
 * @throws Exception
 */
function do_delete() : void {
    // TODO: complete this function to delete an existing entity from the database
    // Remember to use object-oriented code: use object instances
    if ( empty($_REQUEST["id"]) ) {
        throw new Exception("Missing ID Game");
    }
    if ( !is_numeric($_REQUEST["id"])) {
        throw new Exception(" ID must be numeric type");
    }
    $game = new \models\VideoGame();
    $game->setId((int)$_REQUEST["id"]);
    
    $game->dbDelete();
    header("Content-Type: application/json", true, 200);
    echo json_encode(["redirect" => WEB_PAGES_DIR."create.php"]);
}


// <editor-fold defaultstate="collapsed"> PRE-BUILT CODE

try {
    switch ($_REQUEST["action"]) {
        case "create":
            do_create();
            break;
        case "edit":
            do_modify();
            break;
        case "delete":
            do_delete();
            break;
        default:
            http_response_code(400);
            echo "400 BAD REQUEST: Invalid [action] parameter value in request.";
            exit(0);
    }
} catch (Exception $error) {
    header("Content-Type: text/html; charset=UTF-8", true, 500);
    echo "500 INTERNAL SERVER ERROR:<br/>";
    $first_error = $error;
    echo $error->getMessage()."<br/>";
    while ($error->getPrevious() instanceof Exception) {
        $error = $error->getPrevious();
        echo $error->getMessage()."<br/>";
    }
    
    echo "<br/>Stack trace:<br/>";
    echo str_replace(PHP_EOL, "<br/>", $first_error->getTraceAsString());
}

// </editor-fold>
