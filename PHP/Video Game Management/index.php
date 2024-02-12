<?php
declare(strict_types=1);

require_once "initializer.php";



// TODO: Fill the comments section below with your name and student number
/*
 * Student name: Hoang Truong
 * Student number: 202130169
 */


// TODO: redirect to the entity creation page page
// Hint: Use the WEB_PAGES_DIR constant defined in the initializer.php file and just add the page
// file name to its end for the redirect location
header("Location: ".WEB_PAGES_DIR."create.php", true,303);
exit(0);