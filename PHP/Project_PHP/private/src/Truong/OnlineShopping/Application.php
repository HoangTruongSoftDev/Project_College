<?php
declare(strict_types=1);

/*
 * Project_PHP Application.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-03-23
 * (c) Copyright 2023 Hoang Truong 
 */
namespace Truong\OnlineShopping;
use public\endpoints\action;
use Truong\OnlineShopping\BLL\CustomerController;
use Truong\OnlineShopping\BLL\OrderController;
use Truong\OnlineShopping\BLL\ProductController;
use Truong\OnlineShopping\BLL\ShoppingCartController;
use Truong\OnlineShopping\DAL\PdoConnector;
use PDO;
require_once ENDPOINTS_PATH."action.php";
class Application {
    private static ?PDO $connectionPDO = null;
    public const FORMAT_OF_DATETIME = "Y-m-d H:i:s.u";
    public static function getApplicationConnection() : PDO {
        if (!(self::$connectionPDO instanceof PDO)) {
            self::$connectionPDO = PdoConnector::getConnection();
        }
        return self::$connectionPDO;
    }
    
    /**
     * @throws \Exception
     */
    public static function runWeb() : void {
        if (testCookies()) {
            session_start();
            self::request_route();
        } else {
            throw new \Exception("Missing cookies");
        }
    }
    
    /**
     * @throws \Exception
     */
    public static function request_route() : void  {
        $current_uri = $_SERVER["REQUEST_URI"];
        $part_of_path = explode("?", $current_uri);
        $current_uri_path = $part_of_path[0];
        if (isset($part_of_path[1])) {
            $parameters = $part_of_path[1];
            if (str_contains($parameters,"&")) {
                $list_of_parameter = explode("&",$parameters);
                foreach ($list_of_parameter as $current_parameter) {
                    $component_of_currentParam = explode("=",$current_parameter);
                    $_REQUEST[$component_of_currentParam[0]] = $component_of_currentParam[1];
                }
            }
            else {
                //action=truong
                $component_of_currentParam = explode("=",$parameters);
                $_REQUEST[$component_of_currentParam[0]] = $component_of_currentParam[1];
            }
        }
        
        $listOfRoutes = [
            WEB_ROOT_PATH => CustomerController::class."::getLoginPage",
            WEB_ROOT_PATH."register" => CustomerController::class."::getRegisterPage",
            WEB_ROOT_PATH."action" => action::class."::getAction",
            WEB_ROOT_PATH."products" => ProductController::class."::getProductPage",
            WEB_ROOT_PATH."product" => ProductController::class."::getDetailProductPage",
            WEB_ROOT_PATH."shoppingCart" => ShoppingCartController::class."::getShoppingCartProductPage",
            WEB_ROOT_PATH."shoppingCart/deleteProduct" =>ShoppingCartController::class."::deletingProductInCart",
            WEB_ROOT_PATH."order/review" => OrderController::class."::redirectOrderReviewPage",
            WEB_ROOT_PATH."order/confirmation" => OrderController::class."::redirectOrderConfimationPage",
            WEB_ROOT_PATH."order/confirmation/cancelOrder" => OrderController::class."::cancelOrder",
        ];
        
        $route_exist = false;
        
        foreach ($listOfRoutes as $current_uri_found => $method) {
            if ($current_uri_found == $current_uri_path) {
                $route_exist = true;
                call_user_func($method, $_REQUEST);
                break;
            }
        }
        if (!$route_exist) {
            throw new \Exception("========= ROUTE NOT FOUND: $current_uri ===========" , 404);
        }
    }
}