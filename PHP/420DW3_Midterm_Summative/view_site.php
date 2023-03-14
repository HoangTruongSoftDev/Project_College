<?php
declare(strict_types=1);

/*
 * 420DW3_Midterm_Summative view_site.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-03-09
 * (c) Copyright 2023 Hoang Truong 
 */

require_once __DIR__.DIRECTORY_SEPARATOR."includes".DIRECTORY_SEPARATOR."database.php";

if (empty($_REQUEST["id"])){
    http_response_code(404);
    exit(0);
}

$movie = select_movie((int)$_REQUEST["id"]);

if (empty($movie)){
    http_response_code(404);
    exit(0);
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Movie Information</title>
    <link rel="stylesheet" href="/420DW3_Midterm_Summative/css/css.css">
</head>
<body>
<h1> Movie Information</h1>
<form method="post" action="endpoints/actions.php">
    <input type="hidden" name="action" value="updated">
    <div class="div-container">
        <label for="id">ID:</label>
        <input type="number" id="id" name="id" value="<?= $movie["id"] ?>" readonly>
    </div>
    <div class="div-container">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" maxlength="128" value="<?= $movie["title"] ?>">
    </div>
    <div class="div-container">
        <label for="director">Director:</label>
        <input type="text" id="director" name="director" maxlength="64" value="<?= $movie["director"] ?>">
    </div>
    <div class="div-container">
        <label for="year">Year: <br/>(min: 1900)</label>
        <input type="number" id="year" name="year" min="1900" step="1" value="<?= $movie["year"] ?>">
    </div>
    <div class="div-container">
        <label for="date_created">Director:</label>
        <input type="datetime-local" id="date_created" name="date_created" value="<?= $movie["date_created"] ?>" readonly>
    </div>
    <div class="div-container">
        <input type="submit" value="Save Changes">
    </div>
    
</form>
<form method="post" action="endpoints/actions.php">
    <input type="hidden" name="action" value="deleted">
    <input type="hidden" name="id" value="<?= $movie["id"] ?>">
    <div class="div-container">
        <input type="submit" value="Delete Movie">
    </div>
</form>
</body>
</html>
