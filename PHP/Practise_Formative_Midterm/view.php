<?php
declare(strict_types=1);

/*
 * Practise_Formative_Midterm view.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-03-09
 * (c) Copyright 2023 Hoang Truong 
 */

require_once __DIR__.DIRECTORY_SEPARATOR."includes".DIRECTORY_SEPARATOR."database.php";

if (!is_numeric($_REQUEST["id"]) || empty($_REQUEST["id"])){
    http_response_code(404);
    exit(0);
}

$car = get_car((int)$_REQUEST["id"]);

if (empty($car)){
    http_response_code(404);
    exit(0);
}


?>

<!DOCTYPE html>
<html>
<head>
    <title>Car Information</title>
</head>
<body>
<h1> Car Information</h1>
<form method="post" action="endpoints/actions.php">
    <input type="hidden" name="action" value="updated" id="updateCar">
    <div>
        <label for="id"> ID: </label>
        <input type="number" id="id" name="id" value="<?= $car["id"] ?>" readonly>
    </div>
    <div>
        <label for="make"> Make: </label>
        <input type="text" id="make" name="make" maxlength="32" value="<?= $car["make"] ?>" >
    </div>
    <div>
        <label for="model_string"> Model String: </label>
        <input type="text" id="model_string" name="model_string" maxlength="64" value="<?= $car["model_string"] ?>"  >
    </div>
    <div>
        <label for="year"> Year: </label>
        <input type="number" id="year" name="year" min="1900" step="1" value="<?= $car["year"] ?>" >
    </div>
    <div>
        <label for="date_created"> Date Created: </label>
        <input type="datetime-local" id="date_created" name="date_created" value="<?= $car["date_created"] ?>"  readonly>
    </div>
    <input type="submit" id="submit" value="Save Changes" name="update">
</form>

<form method="post" action="endpoints/actions.php">
    <input type="hidden" name="action" value="deleted" id="deletedCar">
    <input type="hidden" name="id" value="<?= $car["id"] ?>">
    <input type="submit" id="submit" value="Delete" name="delete">
</form>
</body>
</html>