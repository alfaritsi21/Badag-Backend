-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 20, 2020 at 11:11 AM
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
-- Database: `badag`
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
  `role_id` int(1) NOT NULL,
  `company_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `company_updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `company_status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`company_id`, `company_username`, `company_email`, `company_image`, `company_cover_image`, `company_name`, `company_position`, `company_place`, `company_field`, `company_phone`, `company_password`, `company_description`, `company_instagram`, `company_linkedin`, `role_id`, `company_created_at`, `company_updated_at`, `company_status`) VALUES
(1, 'PT. Google', 'admin@gmail.com', '2020-09-19T03-40-31.215Z-profile.png', '2020-09-18T13-26-29.324Z-cover.png', 'PT. Google', 'freelance', 'Jakarta', 'Tech', '08225000989', '$2b$10$HxKNPj5ehWyJdwupxis9vOzVv1HrYe5QL13LIQ0FXA5Zv/mTD3xLm', 'Perusahaan yang bergerak di bidang teknologi', '', '', 0, '2020-09-19 10:57:45', '2020-09-15 13:32:55', 1),
(2, 'PT. Moonton', 'moonton@gmail.com', '2020-09-19T03-40-31.215Z-profile.png', '2020-09-18T13-26-29.324Z-cover.png', 'PT. Moonton', 'Fulltime', 'Solo', 'Games', '08225000989', '$2b$10$HxKNPj5ehWyJdwupxis9vOzVv1HrYe5QL13LIQ0FXA5Zv/mTD3xLm', 'Perusahaan games', '', '', 0, '2020-09-19 10:57:45', '2020-09-15 13:32:55', 1);

-- --------------------------------------------------------

--
-- Table structure for table `experiences`
--

CREATE TABLE `experiences` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `company` varchar(50) NOT NULL,
  `position` varchar(150) NOT NULL,
  `date` datetime NOT NULL,
  `date_resign` datetime DEFAULT NULL,
  `description` tinytext
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `experiences`
--

INSERT INTO `experiences` (`id`, `id_user`, `company`, `position`, `date`, `date_resign`, `description`) VALUES
(3, 1, 'pt maju mundur cantik', 'backend', '2020-09-17 00:00:00', '2020-10-17 00:00:00', ''),
(4, 1, 'pt maju mundur cantik', 'backend', '2020-09-17 00:00:00', '2020-10-17 00:00:00', ''),
(5, 1, 'pt maju mundur cantik', 'backend', '2020-09-17 00:00:00', '2020-10-17 00:00:00', '');

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
(3, 1001, 1, 3, 'From : HR Google contact : Google@gmail.com, 082240157378. I LOVE YOU', '2020-09-19 11:10:40'),
(4, 1000, 2, 1, '<b>From : Manager Moonton</b> Hero Baru  <br><b>b> contact : admin@gmail.com, 082240157378.</b> <br> <p>asdasdasdasd<p>', '2020-09-19 12:01:50'),
(6, 1001, 3, 1, 'Terimakasih atas tawaran projectnya. Saya sangat senang mendapat kepercayaan untuk project bapak ini. Saya tertarik dan ingin membahas lebih lanjut untuk project ini, jam berapa kah saya dapat mengkontak bapak ? . Terimakasih', '2020-09-19 11:59:40'),
(7, 1000, 1, 2, 'Terimakasih atas kepercayaan bapak. Tapi mohon maaf, saya sudah memiliki kontrak kerja dengan perusahaan google, Perusahaan anda cemen ', '2020-09-19 12:02:04'),
(8, 1001, 1, 3, 'Anda bisa menghubungi saya pada jam kerja biasa', '2020-09-19 14:11:22'),
(9, 1000, 2, 1, 'Bangsat kau ah**', '2020-09-19 14:16:55'),
(10, 1000, 1, 2, 'Ku laporkan kau lutfi', '2020-09-19 15:09:40');

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `id` int(11) NOT NULL,
  `title` int(1) NOT NULL COMMENT '[title_notif] 0. Mendapat Pesan, 1. Membalas Pesan',
  `id_worker` int(11) DEFAULT NULL,
  `id_company` int(11) DEFAULT NULL,
  `id_sender` int(11) NOT NULL,
  `status` int(1) NOT NULL COMMENT '0. Not Read, 1.Read'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `notification`
--

INSERT INTO `notification` (`id`, `title`, `id_worker`, `id_company`, `id_sender`, `status`) VALUES
(1, 0, 3, NULL, 1, 0),
(2, 1, 3, 1, 2, 0);

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

--
-- Dumping data for table `portofolio`
--

INSERT INTO `portofolio` (`portofolio_id`, `user_id`, `app_name`, `link_repository`, `type_portofolio`, `image_portofolio`) VALUES
(1, 1, 'aplikasi ku bagus', 'http oke5', 1, '');

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
(14, 1000, 3, 2, '2020-09-19 12:04:39', '0000-00-00 00:00:00'),
(15, 1001, 3, 1, '2020-09-19 12:04:43', '0000-00-00 00:00:00');

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
  `user_linkedin` varchar(150) DEFAULT NULL,
  `user_instagram` varchar(150) DEFAULT NULL,
  `user_github` varchar(150) DEFAULT NULL,
  `role_id` int(1) NOT NULL,
  `user_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_email`, `user_password`, `user_image`, `user_phone`, `user_name`, `user_job`, `user_time_job`, `user_location`, `user_work_location`, `user_description`, `user_linkedin`, `user_instagram`, `user_github`, `role_id`, `user_created_at`, `user_updated_at`, `user_status`) VALUES
(1, 'admin@gmail.com', '$2b$10$HxKNPj5ehWyJdwupxis9vOzVv1HrYe5QL13LIQ0FXA5Zv/mTD3xLm', '2020-09-19T03-41-00.116Z-frontend.png', '822401573', 'galuh', 'web development', 0, 'trenggalek', 'jakarta', 'asdawdsadas', '', '', '', 0, '2020-09-20 06:41:35', '2020-09-15 12:54:05', 1),
(2, 'admin@gmail.com', '$2b$10$HxKNPj5ehWyJdwupxis9vOzVv1HrYe5QL13LIQ0FXA5Zv/mTD3xLm', '2020-09-17T15-03-20.158Z-frontend.png', '822401573', 'galuh', 'oke bagus', 0, 'adsasdas', '', 'asdawdsadas', NULL, NULL, NULL, 0, '2020-09-17 15:08:14', '2020-09-15 12:54:05', 1),
(3, 'dimas@gmail.com', '$2b$10$Kz7iPFifkMkS1Qg/QhobuefNPovxRU9n3vtQmRci.wYT6AZr9HFke', '', '0813852323', 'Dimas Prayoga', 'Web Developer', 0, '', '', '', NULL, NULL, NULL, 0, '2020-09-18 13:39:57', '2020-09-18 13:22:08', 1),
(4, 'fatah@gmail.com', '$2b$10$IBfExxF8G8A9Et6m/Yp.OeToCcCDr1pcX6UO5wG7OfBBfHXG1maBC', '', '02191270394', 'Muhammad Abdul Fatah', 'Android Developer', 1, '', '', '', NULL, NULL, NULL, 0, '2020-09-19 08:40:33', '2020-09-18 13:38:47', 0),
(5, 'desichan@gmail.com', '$2b$10$ohK7ZEbPHNPwlb58DwI.xOjwO9LJDTAZHVNnaMYCQkW2Eq8WgB6c2', '', '02191270391', 'Desi Chandrika', 'Database Administrator', 2, '', '', '', NULL, NULL, NULL, 0, '2020-09-19 08:40:29', '2020-09-18 13:39:16', 0),
(6, 'timotius@gmail.com', '$2b$10$ImneFfvERNKB154P/FS8w.RXnIf/JhyJaDGmMchaNt9YDdV16LbDm', '', '021912703912', 'Timotius', 'Analyst', 1, '', '', '', NULL, NULL, NULL, 0, '2020-09-19 08:40:25', '2020-09-18 13:39:34', 1);

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
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `company_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `experiences`
--
ALTER TABLE `experiences`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `job_type`
--
ALTER TABLE `job_type`
  MODIFY `job_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `message_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `portofolio`
--
ALTER TABLE `portofolio`
  MODIFY `portofolio_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `roomchat`
--
ALTER TABLE `roomchat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `skills`
--
ALTER TABLE `skills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
