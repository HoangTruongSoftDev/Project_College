<?php
declare(strict_types=1);

/*
 * Practise_Formative_Midterm index.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-03-09
 * (c) Copyright 2023 Hoang Truong 
 */

?>

<!DOCTYPE html>
<html>
<head>
    <title>Create Car</title>
</head>
<body>
    <h1> Creating a new Car</h1>
    <form method="post" action="endpoints/actions.php">
        <input type="hidden" name="action" value="created" id="createCar">
        <div>
            <label for="make"> Make: </label>
            <input type="text" id="make" name="make" maxlength="32" required>
        </div>
        <div>
            <label for="model_string"> Model String: </label>
            <input type="text" id="model_string" name="model_string" maxlength="64" required>
        </div>
        <div>
            <label for="year"> Year: </label>
            <input type="number" id="year" name="year" min="1900" step="1" required>
        </div>
        <input type="submit" id="submit" value="Create" name="create">
    </form>
</body>
</html>
