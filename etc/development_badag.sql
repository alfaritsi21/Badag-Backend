-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 19, 2020 at 05:55 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `development_badag`
--

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `company_id` int(11) NOT NULL,
  `company_username` varchar(150) NOT NULL,
  `company_email` varchar(150) NOT NULL,
  `company_image` varchar(150) NOT NULL,
  `company_cover_image` varchar(150) NOT NULL,
  `company_name` varchar(150) NOT NULL,
  `company_position` varchar(150) NOT NULL,
  `company_place` varchar(150) DEFAULT NULL,
  `company_field` varchar(150) DEFAULT NULL,
  `company_phone` varchar(20) DEFAULT NULL,
  `company_password` varchar(255) NOT NULL,
  `company_description` text,
  `company_instagram` varchar(150) DEFAULT NULL,
  `company_linkedin` varchar(150) DEFAULT NULL,
  `company_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `company_updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `company_status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`company_id`, `company_username`, `company_email`, `company_image`, `company_cover_image`, `company_name`, `company_position`, `company_place`, `company_field`, `company_phone`, `company_password`, `company_description`, `company_instagram`, `company_linkedin`, `company_created_at`, `company_updated_at`, `company_status`) VALUES
(1, 'admin', 'admin@gmail.com', '2020-09-19T03-40-31.215Z-profile.png', '2020-09-18T13-26-29.324Z-cover.png', 'IDC Technologies', 'freelance', 'Jakarta', 'Tech', '08225000989', '$2b$10$HxKNPj5ehWyJdwupxis9vOzVv1HrYe5QL13LIQ0FXA5Zv/mTD3xLm', 'Perusahaan yang bergerak di bidang teknologi', '', '', '2020-09-19 03:40:31', '2020-09-15 13:32:55', 1);

-- --------------------------------------------------------

--
-- Table structure for table `experiences`
--

CREATE TABLE `experiences` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `company` varchar(50) NOT NULL,
  `position` varchar(150) NOT NULL,
  `date` date NOT NULL,
  `description` tinytext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `experiences`
--

INSERT INTO `experiences` (`id`, `id_user`, `company`, `position`, `date`, `description`) VALUES
(2, 1, 'pt maju mundur cantik', 'backend', '2020-09-17', 'oke bagus sekali');

-- --------------------------------------------------------

--
-- Table structure for table `job_type`
--

CREATE TABLE `job_type` (
  `job_id` int(11) NOT NULL,
  `job_name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `job_type`
--

INSERT INTO `job_type` (`job_id`, `job_name`) VALUES
(1, 'project');

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `message_id` int(11) NOT NULL,
  `roomchat_id` int(11) NOT NULL,
  `sender` int(11) NOT NULL,
  `receive` int(11) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`message_id`, `roomchat_id`, `sender`, `receive`, `message`, `created_at`) VALUES
(3, 9035, 2, 1, 'From : galuh project  contact : admin@gmail.com, 082240157378. asdasdasdasd', '2020-09-18 10:49:33'),
(4, 7744, 2, 1, '<b>From : manager</b> project  <br><b>b> contact : admin@gmail.com, 082240157378.</b> <br> <p>asdasdasdasd<p>', '2020-09-18 10:51:50'),
(5, 6257, 2, 1, 'From : manager</br> project   contact : admin@gmail.com, 082240157378. <br> <p>asdasdasdasd<p>', '2020-09-18 10:53:10');

-- --------------------------------------------------------

--
-- Table structure for table `portofolio`
--

CREATE TABLE `portofolio` (
  `portofolio_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `app_name` varchar(150) NOT NULL,
  `link_repository` varchar(150) NOT NULL,
  `type_portofolio` int(1) NOT NULL,
  `image_portofolio` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `roomchat`
--

CREATE TABLE `roomchat` (
  `id` int(11) NOT NULL,
  `id_roomchat` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `update_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `roomchat`
--

INSERT INTO `roomchat` (`id`, `id_roomchat`, `user_id`, `company_id`, `created_at`, `update_at`) VALUES
(11, 9035, 1, 2, '2020-09-18 10:49:33', '0000-00-00 00:00:00'),
(12, 7744, 1, 2, '2020-09-18 10:51:50', '0000-00-00 00:00:00'),
(13, 6257, 1, 2, '2020-09-18 10:53:10', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE `skills` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `skill` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `skills`
--

INSERT INTO `skills` (`id`, `id_user`, `skill`) VALUES
(1, 1, 'javascript'),
(2, 1, 'php');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_email` varchar(150) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_image` varchar(255) NOT NULL,
  `user_phone` varchar(20) NOT NULL,
  `user_name` varchar(150) NOT NULL,
  `user_job` varchar(255) NOT NULL,
  `user_time_job` int(1) NOT NULL,
  `user_location` varchar(255) NOT NULL,
  `user_work_location` varchar(100) DEFAULT NULL,
  `user_description` text,
  `user_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_email`, `user_password`, `user_image`, `user_phone`, `user_name`, `user_job`, `user_time_job`, `user_location`, `user_work_location`, `user_description`, `user_created_at`, `user_updated_at`, `user_status`) VALUES
(1, 'admin@gmail.com', '$2b$10$HxKNPj5ehWyJdwupxis9vOzVv1HrYe5QL13LIQ0FXA5Zv/mTD3xLm', '2020-09-19T03-41-00.116Z-frontend.png', '822401573', 'galuh', 'web development', 0, 'trenggalek', 'jakarta', 'asdawdsadas', '2020-09-19 03:41:00', '2020-09-15 12:54:05', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`company_id`);

--
-- Indexes for table `experiences`
--
ALTER TABLE `experiences`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `job_type`
--
ALTER TABLE `job_type`
  ADD PRIMARY KEY (`job_id`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`message_id`);

--
-- Indexes for table `portofolio`
--
ALTER TABLE `portofolio`
  ADD PRIMARY KEY (`portofolio_id`);

--
-- Indexes for table `roomchat`
--
ALTER TABLE `roomchat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `company_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `experiences`
--
ALTER TABLE `experiences`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `job_type`
--
ALTER TABLE `job_type`
  MODIFY `job_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `message_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `portofolio`
--
ALTER TABLE `portofolio`
  MODIFY `portofolio_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roomchat`
--
ALTER TABLE `roomchat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `skills`
--
ALTER TABLE `skills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
