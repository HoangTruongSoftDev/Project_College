<?php
declare(strict_types=1);

/*
 * 420DW3_Midterm_Summative index.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-03-09
 * (c) Copyright 2023 Hoang Truong 
 */

?>

<!DOCTYPE html>
<html>
<head>
    <title>Creating Movie</title>
    <link rel="stylesheet" href="/420DW3_Midterm_Summative/css/css.css">
</head>
<body>
<h1> Movie Creation</h1>
    <form method="post" action="endpoints/actions.php">
        <input type="hidden" name="action" value="created">
        <div class="div-container">
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" maxlength="128" required>
        </div>
        <div class="div-container">
            <label for="director">Director:</label>
            <input type="text" id="director" name="director" maxlength="64" required>
        </div>
        <div class="div-container">
            <label for="year">Year: <br/>(min: 1900)</label>
            <input type="number" id="year" name="year" min="1900" step="1" required >
        </div>
        <div class="div-container"><input type="submit" value="Create"></div>
        
    </form>
</body>
</html>
