<?php
declare(strict_types=1);

require_once __DIR__.DIRECTORY_SEPARATOR."..".DIRECTORY_SEPARATOR."..".DIRECTORY_SEPARATOR."initializer.php";

/*
 * 420DW3_07250_Final create.php
 * 
 * @author Marc-Eric Boury (Newironsides)
 * @since 2023-04-12
 * (c) Copyright 2023 Marc-Eric Boury 
 */


// TODO: Complete the entity creation page
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
    <script type="text/javascript" src="<?=WEB_JS_DIR."create.js"?>" defer></script>
</head>
<body>

<h1> Create Game</h1>
<form id="createGameForm">
    <div>
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" maxlength="128" required>
    </div>
    
    <div>
        <label for="genre">Genre:</label>
        <select id="genre" name="genre">
            <option value="Strategy">Strategy</option>
            <option value="Simulation">Simulation</option>
            <option value="RPG">RPG</option>
            <option value="FPS">FPS</option>
        </select>
    </div>
    <div>
        <label for="developer">Developer:</label>
        <input type="text" id="developer" name="developer" maxlength="128" required>
    </div>
    <div>
        <label for="release_year">Release Year:</label>
        <input type="number" id="release_year" min="1895" max="2023" name="release_year" maxlength="4" required>
    </div>
    <input type="submit" value="Create Game">
</form>

</body>
</html>
