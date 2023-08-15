<?php
declare(strict_types=1);

/*
 * Project_PHP index.php
 *
 * @author Hoang Truong (johnk)
 * @since 2023-04-09
 * (c) Copyright 2023 Hoang Truong
 */
use \Truong\OnlineShopping\Application;
require_once __DIR__.DIRECTORY_SEPARATOR."private".DIRECTORY_SEPARATOR."includes".DIRECTORY_SEPARATOR."definition.php";
Application::runWeb();