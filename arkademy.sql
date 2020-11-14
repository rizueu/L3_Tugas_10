-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Waktu pembuatan: 14 Nov 2020 pada 21.25
-- Versi server: 8.0.22-0ubuntu0.20.04.2
-- Versi PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `arkademy`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `Produk`
--

CREATE TABLE `Produk` (
  `id` int NOT NULL,
  `nama_produk` varchar(255) DEFAULT NULL,
  `keterangan` text,
  `jumlah` int DEFAULT NULL,
  `harga` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `Produk`
--

INSERT INTO `Produk` (`id`, `nama_produk`, `keterangan`, `jumlah`, `harga`, `createdAt`, `updatedAt`) VALUES
(18, 'NVIDIA Geforce RTX 3090', 'Graphic Card Mahal :\')', 1, 200000000, '2020-11-14 14:12:28', '2020-11-14 14:12:28'),
(20, 'Bando', 'Alat untuk hiking', 10, 2000, '2020-11-14 14:23:05', '2020-11-14 14:23:05'),
(21, 'Hape', 'Hape siomi', 1, 2000000, '2020-11-14 14:23:27', '2020-11-14 14:23:27'),
(22, 'test', 'test', 1, 1, '2020-11-14 14:23:44', '2020-11-14 14:23:44'),
(23, 'asal', 'asalan', 2, 2, '2020-11-14 14:23:53', '2020-11-14 14:23:53');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `Produk`
--
ALTER TABLE `Produk`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `Produk`
--
ALTER TABLE `Produk`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
