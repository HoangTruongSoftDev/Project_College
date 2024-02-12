<?php
declare(strict_types=1);

require_once __DIR__.DIRECTORY_SEPARATOR."..".DIRECTORY_SEPARATOR."..".DIRECTORY_SEPARATOR."initializer.php";

/*
 * 420DW3_07250_Final view.php
 * 
 * @author Marc-Eric Boury (Newironsides)
 * @since 2023-04-12
 * (c) Copyright 2023 Marc-Eric Boury 
 */


// TODO: Complete the entity view / modification / deletion page
if (empty($_REQUEST["id"])) {
    http_response_code(400);
    echo "BAD REQUEST: Missing requested Game ID";
    exit();
}
if (!is_numeric($_REQUEST["id"])) {
    http_response_code(400);
    echo "BAD REQUEST: Requested Game ID is not numeric type";
    exit();
}
try {
    $found_game = \models\VideoGame::dbFetchById((int) $_REQUEST["id"]);
}
catch(Throwable $exception) {
    $error_message = $exception->getMessage();
    $previous = $exception->getPrevious();
    if ($previous != null) {
        $error_message .= "\n".$previous->getMessage();
        $previous = $previous->getPrevious();
    }
    http_response_code(400);
    echo $error_message;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Group 07250 Winter 2023 Final Exam</title>
    <link rel="stylesheet" href="<?=WEB_CSS_DIR."styles.css"?>">
    <script type="text/javascript">
        
        // A few constants that you can use in your included scripts for the AJAX calls URLs
        const API_ENDPOINT_URL = "<?=WEB_ENDPOINTS_DIR."api.php"?>";
        const CREATION_PAGE_URL = "<?=WEB_PAGES_DIR."create.php"?>";
        const VIEW_PAGE_URL = "<?=WEB_PAGES_DIR."view.php"?>";
        
    </script>
    <script type="text/javascript" src="<?=WEB_JS_DIR."view.js"?>" defer></script>
</head>
<body>


<h1> Update Game</h1>
<form id="updateGameForm">
    <div>
        <label for="id">ID:</label>
        <input type="text" id="id" name="id" min="0" value="<?= $found_game->getId() ?>" readonly>
    </div>
    <div>
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" maxlength="128" value="<?= $found_game->getTitle() ?>" required>
    </div>
    
    <div>
        <label for="genre">Genre:</label>
        <select id="genre" name="genre">
            <option value="Strategy" <?php if($found_game->getGenre()->value == "Strategy") {echo " selected";} ?> >Strategy</option>
            <option value="Simulation" <?php if($found_game->getGenre()->value == "Simulation") {echo " selected";} ?> >Simulation</option>
            <option value="RPG" <?php if($found_game->getGenre()->value == "RPG") {echo " selected";} ?> >RPG</option>
            <option value="FPS" <?php if($found_game->getGenre()->value == "FPS") {echo " selected";} ?> >FPS</option>
        </select>
    </div>
    <div>
        <label for="developer">Developer:</label>
        <input type="text" id="developer" name="developer" maxlength="128" value="<?= $found_game->getDeveloper() ?>" required>
    </div>
    <div>
        <label for="release_year">Release Year:</label>
        <input type="number" id="release_year" min="1895" max="2023" name="release_year" maxlength="4" value="<?= $found_game->getRealeaseYear() ?>" required>
    </div>
    <div>
        <label for="date_created">Date Of Creation:</label>
        <input type="text" id="date_created"  name="date_created"  value="<?= $found_game->getDateCreated()->format("Y-m-d H:i:s") ?>" readonly>
    </div>
    <input type="submit" value="Update Game">
</form>
<form id="deleteGameForm">
    <input type="hidden" id="deleteGameId" name="id" value="<?= $found_game->getId() ?>">
    <input type="submit" value="Delete Game">
</form>

</body>
</html>