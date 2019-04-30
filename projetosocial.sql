-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 30-Abr-2019 às 15:04
-- Versão do servidor: 5.7.24
-- versão do PHP: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projetosocial`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `problema`
--

DROP TABLE IF EXISTS `problema`;
CREATE TABLE IF NOT EXISTS `problema` (
  `id` int(11) NOT NULL,
  `img` varchar(100) NOT NULL,
  `report` int(50) NOT NULL,
  `dataSalva` varchar(50) NOT NULL,
  `rua` varchar(100) NOT NULL,
  `cep` varchar(50) NOT NULL,
  `bairro` varchar(100) NOT NULL,
  `localidade` varchar(50) NOT NULL,
  `uf` varchar(15) NOT NULL,
  `descricao` varchar(500) NOT NULL,
  `estado` varchar(50) NOT NULL,
  `rg` varchar(50) NOT NULL,
  `tipoProblema` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL,
  `nomeCompleto` varchar(200) NOT NULL,
  `senha` varchar(50) NOT NULL,
  `rg` varchar(50) NOT NULL,
  `cpf` varchar(50) NOT NULL,
  `cep` varchar(50) NOT NULL,
  `contato` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
