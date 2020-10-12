-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 21 Sep 2020 pada 04.16
-- Versi server: 10.4.13-MariaDB
-- Versi PHP: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
-- Struktur dari tabel `company`
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
  `company_description` text DEFAULT NULL,
  `company_instagram` varchar(150) DEFAULT NULL,
  `company_linkedin` varchar(150) DEFAULT NULL,
  `role_id` int(1) NOT NULL,
  `company_created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `company_updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `company_status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `company`
--

INSERT INTO `company` (`company_id`, `company_username`, `company_email`, `company_image`, `company_cover_image`, `company_name`, `company_position`, `company_place`, `company_field`, `company_phone`, `company_password`, `company_description`, `company_instagram`, `company_linkedin`, `role_id`, `company_created_at`, `company_updated_at`, `company_status`) VALUES
(1, 'PT. Google', 'admin@gmail.com', '2020-09-19T03-40-31.215Z-profile.png', '2020-09-18T13-26-29.324Z-cover.png', 'PT. Google', 'freelance', 'Jakarta', 'Tech', '08225000989', '$2b$10$HxKNPj5ehWyJdwupxis9vOzVv1HrYe5QL13LIQ0FXA5Zv/mTD3xLm', 'Perusahaan yang bergerak di bidang teknologi', '', '', 0, '2020-09-19 10:57:45', '2020-09-15 13:32:55', 1),
(2, 'PT. Moonton', 'moonton@gmail.com', '2020-09-20T05-52-25.684Z-starky-sapling.png', '2020-09-18T13-26-29.324Z-cover.png', 'PT. Moonton', 'Fulltime', 'Solo', 'Games', '08225000989', '$2b$10$NO0Z8cwuu9zAD/XKaZlvwO.UDKl/cgp4GyXLnjy2JG9PRd6hQB7Xi', 'Perusahaan games', '', '', 0, '2020-09-20 16:12:19', '2020-09-15 13:32:55', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `experiences`
--

CREATE TABLE `experiences` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `company` varchar(50) NOT NULL,
  `position` varchar(150) NOT NULL,
  `date` datetime NOT NULL,
  `date_resign` datetime DEFAULT NULL,
  `description` tinytext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `experiences`
--

INSERT INTO `experiences` (`id`, `id_user`, `company`, `position`, `date`, `date_resign`, `description`) VALUES
(3, 1, 'pt maju mundur cantik', 'backend', '2020-09-17 00:00:00', '2020-10-17 00:00:00', ''),
(4, 1, 'pt maju mundur cantik', 'backend', '2020-09-17 00:00:00', '2020-10-17 00:00:00', ''),
(5, 1, 'pt maju mundur cantik', 'backend', '2020-09-17 00:00:00', '2020-10-17 00:00:00', ''),
(6, 7, 'PT SANS', 'Penjual martabak', '2020-09-01 00:00:00', NULL, 'membuat martabak untuk di jual\n'),
(7, 7, 'PT Bravo', 'Pilot', '2020-09-02 00:00:00', '2020-09-03 00:00:00', 'aye aye captain');

-- --------------------------------------------------------

--
-- Struktur dari tabel `job_type`
--

CREATE TABLE `job_type` (
  `job_id` int(11) NOT NULL,
  `job_name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `job_type`
--

INSERT INTO `job_type` (`job_id`, `job_name`) VALUES
(1, 'project');

-- --------------------------------------------------------

--
-- Struktur dari tabel `message`
--

CREATE TABLE `message` (
  `message_id` int(11) NOT NULL,
  `roomchat_id` int(11) NOT NULL,
  `sender` int(11) NOT NULL,
  `receive` int(11) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `message`
--

INSERT INTO `message` (`message_id`, `roomchat_id`, `sender`, `receive`, `message`, `created_at`) VALUES
(3, 1001, 1, 3, 'From : HR Google contact : Google@gmail.com, 082240157378. I LOVE YOU', '2020-09-19 11:10:40'),
(4, 1000, 2, 1, '<b>From : Manager Moonton</b> Hero Baru  <br><b>b> contact : admin@gmail.com, 082240157378.</b> <br> <p>asdasdasdasd<p>', '2020-09-19 12:01:50'),
(6, 1001, 3, 1, 'Terimakasih atas tawaran projectnya. Saya sangat senang mendapat kepercayaan untuk project bapak ini. Saya tertarik dan ingin membahas lebih lanjut untuk project ini, jam berapa kah saya dapat mengkontak bapak ? . Terimakasih', '2020-09-19 11:59:40'),
(7, 1000, 1, 2, 'Terimakasih atas kepercayaan bapak. Tapi mohon maaf, saya sudah memiliki kontrak kerja dengan perusahaan google, Perusahaan anda cemen ', '2020-09-19 12:02:04'),
(8, 1001, 1, 3, 'Anda bisa menghubungi saya pada jam kerja biasa', '2020-09-19 14:11:22'),
(9, 1000, 2, 1, 'Bangsat kau ah**', '2020-09-19 14:16:55'),
(10, 1000, 1, 2, 'Ku laporkan kau lutfi', '2020-09-19 15:09:40'),
(11, 7330, 1, 1, 'From : Rahman</br> project   contact : a1.arifrahman.1213@gmail.com, 08224011111. <br> <p>jadi begitu<p>', '2020-09-20 14:12:15'),
(12, 5612, 1, 1, 'From : Arif Rahman</br> project   contact : arif.0496.rahman@gmail.com, 0897728641. <br> <p>Kami menggundang anda untuk melakukan interview pada lusa nanti, bertepat di jl....<p>', '2020-09-20 14:48:07'),
(13, 627, 1, 1, 'From : Saprolio</br> project   contact : saprolio@gmail.com, 12345678. <br> <p>anda di undang makan malam<p>', '2020-09-20 14:54:12'),
(14, 7363, 2, 7, 'From : Rizkia</br> project   contact : moonton@gmail.com, 1234545632. <br> <p>anda lolos seleksi tahap pertama<p>', '2020-09-20 18:16:20'),
(15, 7363, 7, 2, 'hadir', '2020-09-20 18:25:07'),
(16, 7636, 7, 2, 'hallo', '2020-09-20 21:02:20'),
(17, 7363, 7, 2, 'tolong jangan spam ya', '2020-09-20 21:05:29'),
(18, 7363, 7, 2, '', '2020-09-20 21:09:48'),
(19, 7363, 7, 2, '', '2020-09-20 21:09:48'),
(20, 7363, 7, 2, '', '2020-09-20 21:09:55'),
(21, 7363, 7, 2, '', '2020-09-20 21:09:55'),
(22, 7363, 7, 2, 'hei kau', '2020-09-20 21:16:44'),
(23, 7363, 7, 2, 'iya kau', '2020-09-20 21:17:28'),
(24, 7363, 7, 2, 'kenapa?', '2020-09-20 21:20:57'),
(25, 7363, 7, 2, 'gpp', '2020-09-20 21:23:30');

-- --------------------------------------------------------

--
-- Struktur dari tabel `notification`
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
-- Dumping data untuk tabel `notification`
--

INSERT INTO `notification` (`id`, `title`, `id_worker`, `id_company`, `id_sender`, `status`) VALUES
(1, 0, 3, NULL, 1, 0),
(2, 1, 3, 1, 2, 0),
(3, 0, 7, NULL, 2, 0),
(4, 1, NULL, NULL, 7, 0),
(5, 1, NULL, NULL, 7, 0),
(6, 1, NULL, NULL, 7, 0),
(7, 1, 2, NULL, 7, 0),
(8, 1, NULL, NULL, 7, 0),
(9, 1, NULL, NULL, 7, 0),
(10, 1, NULL, NULL, 7, 0),
(11, 1, NULL, NULL, 7, 0),
(12, 1, NULL, NULL, 7, 0),
(13, 1, NULL, NULL, 7, 0),
(14, 1, NULL, NULL, 7, 0),
(15, 1, NULL, NULL, 7, 0),
(16, 1, NULL, NULL, 7, 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `portofolio`
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
-- Dumping data untuk tabel `portofolio`
--

INSERT INTO `portofolio` (`portofolio_id`, `user_id`, `app_name`, `link_repository`, `type_portofolio`, `image_portofolio`) VALUES
(1, 1, 'aplikasi ku bagus', 'http oke5', 1, ''),
(2, 7, 'Badag', 'https://github.com/Glitchfer', 2, '2020-09-20T15-21-21.049Z-4759535970_3467f04902_o1.png'),
(3, 7, 'Konta meal', 'https://github.com/Glitchfer', 2, '2020-09-20T15-21-34.196Z-Main_menu.jpg'),
(4, 7, 'Sajira', 'https://github.com/Glitchfer', 2, '2020-09-20T15-21-05.199Z-sajira_poster5.JPG'),
(5, 1, 'HistoGraph', 'https://github.com/Glitchfer', 2, '2020-09-20T15-21-05.199Z-sajira_poster5.JPG'),
(6, 1, 'HistoGraph', 'https://github.com/Glitchfer', 2, '2020-09-20T15-21-21.049Z-4759535970_3467f04902_o1.png'),
(7, 1, 'HistoGraph', 'https://github.com/Glitchfer', 2, '2020-09-20T15-21-34.196Z-Main_menu.jpg');

-- --------------------------------------------------------

--
-- Struktur dari tabel `roomchat`
--

CREATE TABLE `roomchat` (
  `id` int(11) NOT NULL,
  `id_roomchat` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `update_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `roomchat`
--

INSERT INTO `roomchat` (`id`, `id_roomchat`, `user_id`, `company_id`, `created_at`, `update_at`) VALUES
(14, 1000, 3, 2, '2020-09-19 12:04:39', '0000-00-00 00:00:00'),
(15, 1001, 3, 1, '2020-09-19 12:04:43', '0000-00-00 00:00:00'),
(16, 7330, 1, 1, '2020-09-20 14:12:15', '0000-00-00 00:00:00'),
(17, 5612, 1, 1, '2020-09-20 14:48:07', '0000-00-00 00:00:00'),
(18, 627, 1, 1, '2020-09-20 14:54:12', '0000-00-00 00:00:00'),
(19, 7363, 7, 2, '2020-09-20 18:16:20', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `skills`
--

CREATE TABLE `skills` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `skill` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `skills`
--

INSERT INTO `skills` (`id`, `id_user`, `skill`) VALUES
(1, 1, 'javascript'),
(2, 1, 'php'),
(3, 7, 'Javascript'),
(4, 7, 'CSS'),
(5, 7, 'VueJs'),
(6, 7, 'Vuex'),
(7, 7, 'NodeJs'),
(8, 7, 'ExpressJs'),
(9, 7, 'MySql'),
(10, 7, 'HTML'),
(11, 1, 'css'),
(12, 7, 'Python');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
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
  `user_description` text DEFAULT NULL,
  `user_linkedin` varchar(150) DEFAULT NULL,
  `user_instagram` varchar(150) DEFAULT NULL,
  `user_github` varchar(150) DEFAULT NULL,
  `role_id` int(1) NOT NULL,
  `user_created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `user_updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `user_status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`user_id`, `user_email`, `user_password`, `user_image`, `user_phone`, `user_name`, `user_job`, `user_time_job`, `user_location`, `user_work_location`, `user_description`, `user_linkedin`, `user_instagram`, `user_github`, `role_id`, `user_created_at`, `user_updated_at`, `user_status`) VALUES
(1, 'admin@gmail.com', '$2b$10$HxKNPj5ehWyJdwupxis9vOzVv1HrYe5QL13LIQ0FXA5Zv/mTD3xLm', '2020-09-20T05-52-25.684Z-starky-sapling.png', '822401573', 'galuh', 'web development', 0, 'trenggalek', 'jakarta', 'asdawdsadas', '', '', '', 0, '2020-09-20 16:06:27', '2020-09-15 12:54:05', 1),
(7, 'arif.0496.rahman@gmail.com', '$2b$10$jUlF4SGY9BSeqtdQYLgehOgSNOh4EXTGWWuAevXZazDdTnHhDwZN.', '2020-09-20T15-12-19.128Z-hisoka.jpg', '0897728641', 'Arif Rahman', 'Frontend developer', 1, 'Bogor', 'Jakarta', 'Seorang frontend developer yang handal\n', NULL, NULL, NULL, 1, '2020-09-20 15:14:08', '2020-09-20 15:08:00', 1);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`company_id`);

--
-- Indeks untuk tabel `experiences`
--
ALTER TABLE `experiences`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `job_type`
--
ALTER TABLE `job_type`
  ADD PRIMARY KEY (`job_id`);

--
-- Indeks untuk tabel `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`message_id`);

--
-- Indeks untuk tabel `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `portofolio`
--
ALTER TABLE `portofolio`
  ADD PRIMARY KEY (`portofolio_id`);

--
-- Indeks untuk tabel `roomchat`
--
ALTER TABLE `roomchat`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `company`
--
ALTER TABLE `company`
  MODIFY `company_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `experiences`
--
ALTER TABLE `experiences`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `job_type`
--
ALTER TABLE `job_type`
  MODIFY `job_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `message`
--
ALTER TABLE `message`
  MODIFY `message_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT untuk tabel `notification`
--
ALTER TABLE `notification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT untuk tabel `portofolio`
--
ALTER TABLE `portofolio`
  MODIFY `portofolio_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `roomchat`
--
ALTER TABLE `roomchat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT untuk tabel `skills`
--
ALTER TABLE `skills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
