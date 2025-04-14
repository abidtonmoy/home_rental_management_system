-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 06, 2020 at 09:43 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `home-rental-management-system2`
--

-- --------------------------------------------------------

--
-- Table structure for table `admininfo`
--

CREATE TABLE `admininfo` (
  `name` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admininfo`
--

INSERT INTO `admininfo` (`name`, `username`, `password`, `email`, `phone`) VALUES
('Tonmoy', 'admin', 'admin', 'email', 21548);

-- --------------------------------------------------------

--
-- Table structure for table `customerinfo`
--

CREATE TABLE `customerinfo` (
  `fname` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lname` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fathersName` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nid` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reportNo` int(10) NOT NULL,
  `status` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customerinfo`
--

INSERT INTO `customerinfo` (`fname`, `lname`, `username`, `password`, `email`, `phone`, `type`, `fathersName`, `nid`, `reportNo`, `status`) VALUES
('Abid Hasan', 'Tonmoy', 'customer', 'customer', 'ehat', '0356', 'available', 'adhgja', 'sdfds', 0, 'unblock');

-- --------------------------------------------------------

--
-- Table structure for table `houseinfo`
--

-- CREATE TABLE `houseinfo` (
--   `houseid` int(10) NOT NULL,
--   `housename` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
--   `division` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
--   `area` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
--   `address` text COLLATE utf8mb4_unicode_ci NOT NULL,
--   `size` int(10) NOT NULL,
--   `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
--   `prize` int(10) NOT NULL,
--   `review` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
--   `status` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --
-- -- Dumping data for table `houseinfo`
-- --

-- INSERT INTO `houseinfo` (`houseid`, `housename`, `division`, `area`, `address`, `size`, `description`, `prize`, `review`, `status`) VALUES
-- (2, 'ad', 'ddfdfdffdfff', 'dfdf', 'dfdfdf', 322, 'asas', 2365, 'asdkjdbkadjda,askjdsjkda,ldhdalsd', 'rented');

-- -- --------------------------------------------------------
CREATE TABLE `houseinfo` (
  `houseid` int(10) NOT NULL,
  `housename` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `division` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `area` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `size` int(10) NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `prize` int(10) NOT NULL,
  `review` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `houseinfo`
--

INSERT INTO `houseinfo` (`houseid`, `housename`, `division`, `area`, `address`, `size`, `description`, `prize`, `review`, `status`) 
VALUES
(1, 'House A', 'Dhaka', 'Uttara', 'Uttara House Address 1', 1500, 'Description for House A', 20000, 'Good', 'Available'),
(2, 'House B', 'Dhaka', 'Uttara', 'Uttara House Address 2', 1700, 'Description for House B', 25000, 'Excellent', 'Available'),
(3, 'House C', 'Dhaka', 'Uttara', 'Uttara House Address 3', 1900, 'Description for House C', 30000, 'Very Good', 'Available'),
(4, 'House D', 'Chittagong', 'GEC', 'GEC House Address 1', 1500, 'Description for House D', 40000, 'Good', 'Available'),
(5, 'House E', 'Chittagong', 'GEC', 'GEC House Address 2', 1800, 'Description for House E', 45000, 'Excellent', 'Available'),
(6, 'House F', 'Chittagong', 'GEC', 'GEC House Address 3', 2000, 'Description for House F', 50000, 'Very Good', 'Available');


--
-- Table structure for table `houseownerinfo`
--

CREATE TABLE `houseownerinfo` (
  `fname` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lname` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fathersName` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nid` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reportNo` int(10) NOT NULL,
  `status` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `houseownerinfo`
--

INSERT INTO `houseownerinfo` (`fname`, `lname`, `username`, `password`, `email`, `phone`, `type`, `fathersName`, `nid`, `reportNo`, `status`) VALUES
('dfdf', 'df', 'owner', 'owner', 'df', 'df', 'available', 'sa', 'sa', 0, 'unblock');


-- --------------------------------------------------------

--
-- Table structure for table `managerinfo`
--

CREATE TABLE `managerinfo` (
  `fname` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lname` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` int(20) NOT NULL,
  `division` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `area` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fathersName` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nid` int(20) NOT NULL,
  `status` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `managerinfo`
--

INSERT INTO `managerinfo` (`fname`, `lname`, `username`, `password`, `email`, `phone`, `division`, `area`, `fathersName`, `nid`, `status`) VALUES
('Abid Hasan', 'Tonmoy', 'manager', 'manager', 'ashiqulhoque45@gmail.com', 1670464084, NULL, NULL, 'something', 16704, 'block');



--Creating Maid
CREATE TABLE IF NOT EXISTS maids (
    maidid INTEGER PRIMARY KEY AUTOINCREMENT,  -- Or SERIAL for PostgreSQL
    name VARCHAR(255),
    phone VARCHAR(20),
    address VARCHAR(255),
    status VARCHAR(20)
);

INSERT INTO maids (name, phone, address, status) VALUES
('Alice Smith', '123-456-7890', '123 Main St', 'active'),
('Bob Johnson', '987-654-3210', '456 Oak Ave', 'away'),
('Charlie Brown', '555-123-4567', '789 Pine Ln', 'not available');
--
-- Indexes for dumped tables
--

--
-- Indexes for table `admininfo`
--
ALTER TABLE `admininfo`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `customerinfo`
--
ALTER TABLE `customerinfo`
  ADD PRIMARY KEY (`username`),
  ADD UNIQUE KEY `nid` (`nid`);

--
-- Indexes for table `houseinfo`
--
ALTER TABLE `houseinfo`
  ADD PRIMARY KEY (`houseid`);

--
-- Indexes for table `houseownerinfo`
--
ALTER TABLE `houseownerinfo`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `managerinfo`
--
ALTER TABLE `managerinfo`
  ADD PRIMARY KEY (`username`),
  ADD UNIQUE KEY `nid` (`nid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
