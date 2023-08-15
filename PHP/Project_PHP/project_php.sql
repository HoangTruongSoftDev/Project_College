-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 30, 2023 at 06:45 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project_php`
--
CREATE DATABASE IF NOT EXISTS `project_php` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `project_php`;

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
CREATE TABLE IF NOT EXISTS `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `passwordHash` varchar(128) NOT NULL,
  `dateCreated` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `username`, `passwordHash`, `dateCreated`) VALUES
(47, 'Truong', '$2y$10$MjQqnyZBNZWYJupvgR19Zepar8wGYQLQnUeIUNrFdGtT9V19UCfYG', '2023-04-14 02:39:07.219'),
(51, 'ThePotato', '$2y$10$0Rq6tW1qVqUKIaVPlw3Epe7OqqmkQ1Qb5KIAVhS1cc4ygZKKFP.Gy', '2023-04-29 21:37:18.568');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` enum('created','placed','cancelled') NOT NULL DEFAULT 'created',
  `customerId` int(11) NOT NULL,
  `shoppingCartId` int(11) DEFAULT NULL,
  `billingAddress` varchar(256) DEFAULT NULL,
  `shippingAddress` varchar(256) DEFAULT NULL,
  `dateCreated` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `datePlaced` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `dateShipped` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  PRIMARY KEY (`id`),
  KEY `Orders_status_INDX` (`status`) USING BTREE,
  KEY `Orders_shoppingCartId_INDX` (`shoppingCartId`) USING BTREE,
  KEY `Orders_customerId_INDX` (`customerId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `displayName` varchar(64) NOT NULL,
  `description` text DEFAULT NULL,
  `imageUrl` varchar(128) DEFAULT NULL,
  `unitPrice` decimal(15,2) NOT NULL DEFAULT 0.00,
  `availableQuantity` int(11) NOT NULL DEFAULT 0,
  `dateCreated` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `displayName`, `description`, `imageUrl`, `unitPrice`, `availableQuantity`, `dateCreated`) VALUES
(1, 'Apple', 'good', '/Project_PHP/public/img/apple.jpg', '1.01', 50, '0000-00-00 00:00:00.000'),
(2, 'Banana', 'not bad', '/Project_PHP/public/img/banana.jpg', '2.65', 60, '0000-00-00 00:00:00.000'),
(3, 'Watermelon', 'Bad', '/Project_PHP/public/img/watermelon.jpg', '2.06', 20, '0000-00-00 00:00:00.000'),
(4, 'Mango', 'good', '/Project_PHP/public/img/mango.jpg', '6.34', 30, '0000-00-00 00:00:00.000'),
(5, 'Grape', 'yummy', '/Project_PHP/public/img/grape.jpg', '4.93', 40, '0000-00-00 00:00:00.000'),
(6, 'Cucumber', 'Good', '/Project_PHP/public/img/cucumber.jpg', '3.76', 80, '0000-00-00 00:00:00.000');

-- --------------------------------------------------------

--
-- Table structure for table `shopping_carts`
--

DROP TABLE IF EXISTS `shopping_carts`;
CREATE TABLE IF NOT EXISTS `shopping_carts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` enum('created','ordered') NOT NULL DEFAULT 'created',
  `dateCreated` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  PRIMARY KEY (`id`),
  KEY `ShoppingCart_status_INDX` (`status`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=96 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `shopping_cart_products`
--

DROP TABLE IF EXISTS `shopping_cart_products`;
CREATE TABLE IF NOT EXISTS `shopping_cart_products` (
  `productId` int(11) NOT NULL,
  `shoppingCartId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 1,
  UNIQUE KEY `ShoppingCartProducts_shoppingCart_product_ids_UNIQ` (`shoppingCartId`,`productId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
SET FOREIGN_KEY_CHECKS=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
