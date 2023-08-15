<?php
declare(strict_types=1);

/*
 * Project_PHP action.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-03-25
 * (c) Copyright 2023 Hoang Truong 
 */



//require_once "../../private/includes/definition.php";


namespace public\endpoints;
use Exception;
use MongoDB\Driver\Exception\WriteConcernException;
use Throwable;
use Truong\OnlineShopping\BLL\CustomerController;
use Truong\OnlineShopping\BLL\OrderController;
use Truong\OnlineShopping\BLL\ProductController;
use Truong\OnlineShopping\BLL\ShoppingCartController;
use Truong\OnlineShopping\DAL\DAOs\CustomerDAO;
use Truong\OnlineShopping\DAL\DAOs\ShoppingCartDAO;
use Truong\OnlineShopping\DAL\DAOs\ShoppingCartProductDAO;
use Truong\OnlineShopping\DAL\Models\CustomerDTO;
use Truong\OnlineShopping\DAL\Models\OrderDTO;
use Truong\OnlineShopping\DAL\Models\ShoppingCartProductDTO;

class action {
    public static function getAction() : void{
        try {
            switch ($_REQUEST["action"]) {
                case "login":
                    if (!isset($_REQUEST["username"])|| !isset($_REQUEST["passwordHash"])) {
                        throw new Exception("BAD REQUEST", 400);
                    }
                    if (isset($_SESSION["customerId"])) {
                        $customerDTO = CustomerDAO::dbSelectById((int)$_SESSION["customerId"]);
                        if ($customerDTO->getUsername() != $_REQUEST["username"]) {
                            throw new Exception("This is not your account. Verity fail!",401);
                        }
                    }
                    logInUser();
                    break;
                case "register":
                    if (!isset($_REQUEST["username"]) || !isset($_REQUEST["passwordHash"])  || !isset($_REQUEST["repasswordHash"])) {
                        throw new Exception("BAD REQUEST", 400);
                    }
                    registerUser();
                    break;
                case "addProductsToCart":
                    addProductsToShoppingCart();
                    break;
                case "addSingleProductToCart":
                    addSingleProductToCart();
                    break;
                case "updateProductsFromCart":
                    updateProductsFromCart();
                    break;
                case "getBillingAddressForm":
                    $_SESSION["displayForm"] = "reviewBillingAddress";
                    break;
                case "getShoppingCartForm":
                    $_SESSION["displayForm"] = "reviewShoppingCart";
                    break;
                case "getShippingAddressFormAndSubmitBillingAddress":
                    if ($_REQUEST["billingAddress"] == null) {
                        throw new Exception("Missing Billing Address", 400);
                    }
                    $_SESSION["displayForm"] = "reviewShippingAddress";
                    $_SESSION["billingAddress"] = $_REQUEST["billingAddress"];
                    break;
                case "getShippingAddressForm":
                    $_SESSION["displayForm"] = "reviewShippingAddress";
                    break;
                case "getSummaryOrderFormAndSubmitShippingAddress":
                    if ($_REQUEST["shippingAddress"] == null) {
                        throw new Exception("Missing Shipping Address", 400);
                    }
                    $_SESSION["displayForm"] = "summaryOrder";
                    $_SESSION["shippingAddress"] = $_REQUEST["shippingAddress"];
                    break;
                case "getSummaryOrderForm":
                    $_SESSION["displayForm"] = "summaryOrder";
                    break;
                case "placeOrder":
                    placeOrder();
                    break;
                case "cancelReviewOrder":
                    unset($_SESSION["displayForm"]);
                    unset($_SESSION["shippingAddress"]);
                    unset($_SESSION["billingAddress"]);
                    unset($_SESSION["SubTotal"]);
                    break;
                default:
                    throw new Exception("BAD REQUEST", 400);
                    break;
            }
        }
        catch (Exception $exception) {
            header("Content-Type: application/json");
            echo json_encode(receivingArrayException($exception));
            http_response_code($exception->getCode());
        
        }
    }
}


function receivingArrayException(?Throwable $excep) : ?array {
    if (!is_null($excep)) {
        return ["errorMessage" => $excep->getMessage(),
                "error_code" => $excep->getCode(),
                "previous" => receivingArrayException($excep->getPrevious())];
    } else {
        return null;
    }
}

/**
 * @throws Exception
 */
function placeOrder() : void {
    if (!isset($_SESSION["customerId"]) || !isset($_SESSION["shoppingCartId"]) || !isset($_SESSION["billingAddress"]) || !isset($_SESSION["shippingAddress"])) {
        throw new Exception("Missing some information to place order", 400);
    }
    $orderDTO = new OrderDTO();
    $orderDTO->setCustomerId((int)$_SESSION["customerId"]);
    $orderDTO->setShoppingCartId((int)$_SESSION["shoppingCartId"]);
    $orderDTO->setBillingAddress((string)$_SESSION["billingAddress"]);
    $orderDTO->setShippingAddress((string)$_SESSION["shippingAddress"]);
    OrderController::placeOrder($orderDTO);
}

/**
 * @throws Exception
 */
function updateProductsFromCart(): void {
    if (!isset($_SESSION["shoppingCartId"])) {
        throw new Exception("You haven't added any product to cart", 400);
    }
    $listOfProductsInCart = ShoppingCartProductDAO::dbSelectByShopppingCartId($_SESSION["shoppingCartId"]);
    
    if ($listOfProductsInCart != null) {
        try {
            foreach ($listOfProductsInCart as $currentProduct) {
                if ((int)$_REQUEST["quantity_".$currentProduct->getProductId()] != null) {
                if(empty($_REQUEST["productId_".$currentProduct->getProductId()])){
                    throw new \Exception("Missing required request parameter [productId_.{$currentProduct->getProductId()}].");
                }
                if (empty($_REQUEST["quantity_".$currentProduct->getProductId()])) {
                    $_REQUEST["quantity_".$currentProduct->getProductId()] = $currentProduct->getQuantity();
                }
                if (!is_numeric($_REQUEST["productId_".$currentProduct->getProductId()])) {
                    throw new \Exception("Invalid required request parameter [productId_{$currentProduct->getProductId()}] : non-numeric value [".$_REQUEST["productId_".$currentProduct->getId()]."] found.");
                }
                if (!is_numeric($_REQUEST["quantity_".$currentProduct->getProductId()])) {
                    throw new \Exception("Invalid required request parameter [quantity_{$currentProduct->getProductId()}] : non-numeric value [".$_REQUEST["quantity_".$currentProduct->getId()]."] found.");
                }
                
                    ShoppingCartController::updateProduct((int)$_REQUEST["productId_".$currentProduct->getProductId()], (int) $_REQUEST["quantity_".$currentProduct->getProductId()]);
                }
            }
        }
        catch (\Exception $exception) {
            // exception page
            throw new \Exception("BAD REQUEST", 400, $exception);
        }
    }
    else {
        throw new Exception("Missing Product in database", 500);
    }
}
/**
 * @throws Exception
 */
function addProductsToShoppingCart() : void {
    $listOfProducts = ProductController::selectAllProducts();
    if ($listOfProducts != null) {
            try {
                foreach ($listOfProducts as $currentProduct) {
                    if(empty($_REQUEST["productId_".$currentProduct->getId()])){
                        throw new \Exception("Missing required request parameter [productId_.{$currentProduct->getId()}].");
                    }
                    if (empty($_REQUEST["quantity_".$currentProduct->getId()])) {
                        $_REQUEST["quantity_".$currentProduct->getId()] = 0;
                    }
                    if (!is_numeric($_REQUEST["productId_".$currentProduct->getId()])) {
                        throw new \Exception("Invalid required request parameter [productId_{$currentProduct->getId()}] : non-numeric value [".$_REQUEST["productId_".$currentProduct->getId()]."] found.");
                    }
                    if (!is_numeric($_REQUEST["quantity_".$currentProduct->getId()])) {
                        throw new \Exception("Invalid required request parameter [quantity_{$currentProduct->getId()}] : non-numeric value [".$_REQUEST["quantity_".$currentProduct->getId()]."] found.");
                    }
                    ShoppingCartController::addProduct((int)$_REQUEST["productId_".$currentProduct->getId()], (int) $_REQUEST["quantity_".$currentProduct->getId()]);
                }
            }
            catch (\Exception $exception) {
                // exception page
                throw new \Exception("BAD REQUEST", 400, $exception);
            }
    }
    else {
        throw new Exception("Missing Product in database", 500);
    }
    
}

/**
 * @throws Exception
 */
function addSingleProductToCart() : void {
    try {
            if(empty($_REQUEST["requested_productId"])){
                throw new \Exception("Missing required request parameter requested_productId.");
            }
            if (empty($_REQUEST["requested_quantity"])) {
                $_REQUEST["requested_quantity"] = 0;
            }
            if (!is_numeric($_REQUEST["requested_productId"])) {
                throw new \Exception("Invalid required request parameter requested_productId : non-numeric value [".$_REQUEST["requested_productId"]." found.");
            }
            if (!is_numeric($_REQUEST["requested_quantity"])) {
                throw new \Exception("Invalid required request parameter requested_quantity : non-numeric value [".$_REQUEST["requested_quantity"]." found.");
            }
            ShoppingCartController::addProduct((int)$_REQUEST["requested_productId"], (int) $_REQUEST["requested_quantity"]);
            header("Content-Type: application/json", true, 200);
            echo json_encode(["url" => "/Project_PHP/product?productId=".$_REQUEST["requested_productId"]]);
        }
    
    catch (\Exception $exception) {
        $response = [
            "redirect" => "/Project_PHP/product?productId=".$_REQUEST["requested_productId"],
        ];
        header("Content-Type: application/json", true, 200);
        json_encode($response, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES);
        throw new \Exception("BAD REQUEST", 400, $exception);
    }
}
/**
 * @throws Exception
 */
function logInUser() :void {
        $customerDTO = new CustomerDTO();
        $customerDTO->setUsername(trim((string)$_REQUEST["username"]));
        $customerDTO->setPasswordHash(trim((string)$_REQUEST["passwordHash"]));
        CustomerController::logInCustomer($customerDTO);
}

/**
 * @throws Exception
 */
function registerUser() : void {
    $customerDTO = new CustomerDTO();
    $customerDTO->setUsername(trim((string)$_REQUEST["username"]));
    $customerDTO->setPasswordHash(trim((string)$_REQUEST["passwordHash"]));
    CustomerController::registerCustomer($customerDTO);
}
