<?php
declare(strict_types=1);

/*
 * Project_PHP CustomerController.php
 * 
 * @author Hoang Truong (johnk)
 * @since 2023-03-23
 * (c) Copyright 2023 Hoang Truong 
 */

namespace Truong\OnlineShopping\BLL;

use Truong\OnlineShopping\DAL\DAOs\CustomerDAO;
use Truong\OnlineShopping\DAL\Models\CustomerDTO;
use Truong\OnlineShopping\Views\CustomerView;

class CustomerController {
    
    
    /**
     * @throws \Exception
     */
    public static function createCustomer(CustomerDTO $customerDTO) : void {
        CustomerDAO::dbCreate($customerDTO);
    }
    
    /**
     * @return void
     * @throws \Exception
     *
     * @author Hoang Truong
     * @since  2023-04-11
     */
    
    /**
     * @throws \Exception
     */
    public static function logInCustomer(CustomerDTO $customerDTO) : void {
        try {
            if (empty($customerDTO->getUsername())) {
                
                throw new \Exception("The information of username is missing!");
            } elseif (mb_strlen($customerDTO->getUsername()) > 32) {
                throw new \Exception("The length of username is maximum 32 characters!");
            }
        } catch (\Exception $exception) {
            throw new \Exception("BAD REQUEST", 400, $exception);
        }
        try {
            if (empty($customerDTO->getPasswordHash())) {
                throw new \Exception("The information of password is missing!");
            }
        } catch (\Exception $exception) {
            throw new \Exception("Unauthorized", 401, $exception);
        }
        try {
            $listOfCustomer = CustomerDAO::dbSelectAll();
            if ($listOfCustomer == null) {
                throw new \Exception("There is no customers has been found in database", 400);
            }
            $existingCustomer = false;
            foreach ($listOfCustomer as $currentCustomer) {
                if ($currentCustomer->getUserName() == $customerDTO->getUsername()) {
                    $existingCustomer = true;
                    if (password_verify($customerDTO->getPasswordHash(), $currentCustomer->getPasswordHash())) {
                        $_SESSION["customerId"] = $currentCustomer->getId();
                        if ($_REQUEST["page"] == "order") {
                            $_SESSION["displayForm"] = "reviewShoppingCart";
                        }
                        elseif ($_REQUEST["page"] == "login") {
                            $url_redirect = "/Project_PHP/products";
                            header("Content-Type: application/json");
                            echo json_encode(["redirectTo" => $url_redirect]);
                        }
                        break;
                    } else {
                        throw new \Exception("The password is incorrect: ".$currentCustomer->getPasswordHash(), 401);
                    }
                }
            }
            if (!$existingCustomer) {
                throw new \Exception("The user does not exist!", 400);
            }
            
        } catch (\Exception $exception) {
            throw new \Exception("There some error about ", $exception->getCode(), $exception);
        }
    }
    
    /**
     * @throws \Exception
     */
    public static function registerCustomer(CustomerDTO $customerDTO) : void {
        try {
            if (empty($customerDTO->getUsername())) {
                throw new \Exception("The username can not be empty!");
            }
            elseif (mb_strlen($customerDTO->getUsername()) > 32) {
                throw new \Exception("The length of username is maximum 32 characters!");
            }
            
            $listOfCustomer = CustomerDAO::dbSelectAll();
            $flag = false;
            if ($listOfCustomer != null) {
                foreach ($listOfCustomer as $current_customer) {
                    if ($current_customer->getUserName() == $customerDTO->getUsername()) {
                        $flag = true;
                        break;
                    }
                }
                if ($flag) {
                    throw new \Exception("The user already exist! Please try another account");
                }
            }
            $repasswordHash = trim((string)$_REQUEST["repasswordHash"]);
            if ( $repasswordHash== $customerDTO->getPasswordHash()) {
                $customerDTO->setPasswordHash(password_hash($customerDTO->getPasswordHash(), PASSWORD_BCRYPT));
                CustomerController::createCustomer($customerDTO);
                header("Content-Type: application/json");
                echo json_encode(["redirectTo"=>"/Project_PHP/"]);
            }
            else {
        
                throw new \Exception("The password and repassword are not the same. Please retry!");
            }
        } catch (\Exception $exception) {
//            header("Content-Type: application/json");
//            echo json_encode(["redirectTo"=>"/Project_PHP/register"]);
            throw new \Exception("BAD REQUEST", 400, $exception);
        }
    }
        
        public static function getRegisterPage() : void {
            header('Content-Type: text/html; charset=UTF-8', true, 200);
            echo CustomerView::generateRegisterPage();
        }
        
        public static function getLoginPage() : void {
            header('Content-Type: text/html; charset=UTF-8', true, 200);
            $output = CustomerView::generateLoginPage();
            echo $output;
        }
    }