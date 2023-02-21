-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: bevcebdwyhuxg0gixwxg-mysql.services.clever-cloud.com:3306
-- Generation Time: Feb 21, 2023 at 06:33 PM
-- Server version: 8.0.22-13
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bevcebdwyhuxg0gixwxg`
--

-- --------------------------------------------------------

--
-- Table structure for table `Album`
--

CREATE TABLE `Album` (
  `id` int UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Album`
--

INSERT INTO `Album` (`id`, `title`, `userId`) VALUES
(1, 'Confetti Album', 2),
(2, 'daYuum 11221123#2 123123try to delete1231 me', 2),
(3, 'SWAGGIEy to delete1231 me', 2),
(4, 'b0yyie to delete1231 me', 2),
(5, 'ohnoboy diff! try to delete me :D', 2),
(6, 'Try to delete me pls pls', 2),
(7, 'Try to delete test me', 2),
(9, 'Be open', 1),
(10, 'Welcome', 1),
(13, 'OhBoy oh oh no', 2);

-- --------------------------------------------------------

--
-- Table structure for table `Photo`
--

CREATE TABLE `Photo` (
  `id` int UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT 'null',
  `userId` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Photo`
--

INSERT INTO `Photo` (`id`, `title`, `url`, `comment`, `userId`) VALUES
(1, 'Edit me #delete me1', 'https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80', 'come at me br0', 2),
(2, 'Confetti Photo #3', 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819', 'Confetti #3', 2),
(3, 'Happy Photo', 'https://images.unsplash.com/photo-1454486837617-ce8e1ba5ebfe', 'So happy', 2),
(4, 'Confetti Photo #1', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'Confetti', 2),
(5, 'Confetti Photo #1 del me pls', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'try to del me pls', 2),
(6, 'Confetti Photo #2 del me pls', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'try to del me pls2', 2),
(8, 'weagfdel me pls', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'del me del qweqeme', 2),
(9, 'weagfdeldd222 me pls', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'del me del qweqeme', 2),
(10, 'its me del me me pls', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'quackquack qweqeme', 1),
(11, 'Stop it', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'del me', 1),
(12, 'Stop it', 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30', 'do you hear me', 1),
(13, 'welcome #delete me444', 'https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80', 'come at me br0', 1);

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `id` int UNSIGNED NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `User`
--

INSERT INTO `User` (`id`, `email`, `password`, `first_name`, `last_name`) VALUES
(1, 'jn@badcameraphotography.com', '$2b$10$.OJIzatZ2t/vquGPFf.XM.1EVI3kmC2ADlwSBzNGYa152AjWn5H36', 'Johan', 'Nordström'),
(2, 'mkayyy@medieinstitutet.se', '$2b$10$Y4F.za3z0cbiDSwkBr.Iz.f9jK0qhm7FAoPBqh/aDX83F5kE4uRKi', 'DonkeyKing', 'DkingMonkee'),
(3, 'swaggieboy@medieinstitutet.se', '$2b$10$Y5CC4dB/NFUVaXYeh3NFYOqocpWLcGZbJJjK.nx8nnrd5fpD8U54e', 'Swaggie', 'Laggey');

-- --------------------------------------------------------

--
-- Table structure for table `_AlbumToPhoto`
--

CREATE TABLE `_AlbumToPhoto` (
  `A` int UNSIGNED NOT NULL,
  `B` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_AlbumToPhoto`
--

INSERT INTO `_AlbumToPhoto` (`A`, `B`) VALUES
(1, 2),
(1, 4),
(5, 5),
(5, 6),
(7, 8),
(13, 8),
(10, 12);

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `applied_steps_count`) VALUES
('597b3db0-e0cd-40cd-8be1-51d7e63eb47d', '1370277b8453326e023f24fbc3b51d4f678829567e750bffebd63c04132f1a0f', '2023-02-20 01:23:10.384', '20230217132827_album_photo_user', NULL, NULL, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Album`
--
ALTER TABLE `Album`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Album_userId_fkey` (`userId`);

--
-- Indexes for table `Photo`
--
ALTER TABLE `Photo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Photo_userId_fkey` (`userId`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`);

--
-- Indexes for table `_AlbumToPhoto`
--
ALTER TABLE `_AlbumToPhoto`
  ADD UNIQUE KEY `_AlbumToPhoto_AB_unique` (`A`,`B`),
  ADD KEY `_AlbumToPhoto_B_index` (`B`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Album`
--
ALTER TABLE `Album`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `Photo`
--
ALTER TABLE `Photo`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `User`
--
ALTER TABLE `User`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Album`
--
ALTER TABLE `Album`
  ADD CONSTRAINT `Album_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `Photo`
--
ALTER TABLE `Photo`
  ADD CONSTRAINT `Photo_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `_AlbumToPhoto`
--
ALTER TABLE `_AlbumToPhoto`
  ADD CONSTRAINT `_AlbumToPhoto_A_fkey` FOREIGN KEY (`A`) REFERENCES `Album` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `_AlbumToPhoto_B_fkey` FOREIGN KEY (`B`) REFERENCES `Photo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
