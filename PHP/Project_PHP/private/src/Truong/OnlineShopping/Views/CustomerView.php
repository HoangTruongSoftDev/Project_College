<?php
declare(strict_types=1);

/*
 * Project_PHP CustomerView.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-03-23
 * (c) Copyright 2023 Hoang Truong 
 */
namespace Truong\OnlineShopping\Views;
class CustomerView {
    public static function generateLoginPage() : string {
        ob_start();
        include PAGE_PATH."login.php";
        $generatedHtml = ob_get_contents();
        ob_end_clean();
        return $generatedHtml;
    }
    public static function generateRegisterPage() : string {
        ob_start();
        include PAGE_PATH."register.php";
        $generatedHtml = ob_get_contents();
        ob_end_clean();
        return $generatedHtml;
    }

}