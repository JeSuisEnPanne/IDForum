-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : jeu. 02 juin 2022 à 15:23
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `projet7`
--

-- --------------------------------------------------------

--
-- Structure de la table `Avatars`
--

CREATE TABLE `Avatars` (
  `id` int(11) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `Avatars`
--

INSERT INTO `Avatars` (`id`, `avatar`, `created`) VALUES
(1, '../avatars/1.png', '2022-06-02 13:20:57'),
(2, '../avatars/2.png', '2022-06-02 13:20:57'),
(3, '../avatars/5.png', '2022-06-02 13:20:57'),
(4, '../avatars/8.png', '2022-06-02 13:20:57'),
(5, '../avatars/4.png', '2022-06-02 13:20:57'),
(6, '../avatars/3.png', '2022-06-02 13:20:57'),
(7, '../avatars/6.png', '2022-06-02 13:20:57'),
(8, '../avatars/7.png', '2022-06-02 13:20:57'),
(9, '../avatars/9.png', '2022-06-02 13:20:57'),
(10, '../avatars/10.png', '2022-06-02 13:20:57'),
(11, '../avatars/11.png', '2022-06-02 13:20:57'),
(12, '../avatars/12.png', '2022-06-02 13:20:57'),
(13, '../avatars/13.png', '2022-06-02 13:20:57'),
(14, '../avatars/14.png', '2022-06-02 13:20:57'),
(15, '../avatars/15.png', '2022-06-02 13:20:57'),
(16, '../avatars/16.png', '2022-06-02 13:20:57'),
(17, '../avatars/17.png', '2022-06-02 13:20:57'),
(18, '../avatars/18.png', '2022-06-02 13:20:57'),
(19, '../avatars/19.png', '2022-06-02 13:20:57'),
(20, '../avatars/20.png', '2022-06-02 13:20:57'),
(21, '../avatars/21.png', '2022-06-02 13:20:57'),
(22, '../avatars/22.png', '2022-06-02 13:20:57'),
(23, '../avatars/23.png', '2022-06-02 13:20:57'),
(24, '../avatars/24.png', '2022-06-02 13:20:57'),
(25, '../avatars/25.png', '2022-06-02 13:20:57'),
(26, '../avatars/26.png', '2022-06-02 13:20:57'),
(27, '../avatars/27.png', '2022-06-02 13:20:57'),
(28, '../avatars/28.png', '2022-06-02 13:20:57'),
(29, '../avatars/29.png', '2022-06-02 13:20:57'),
(30, '../avatars/30.png', '2022-06-02 13:20:57'),
(31, '../avatars/31.png', '2022-06-02 13:20:57'),
(32, '../avatars/32.png', '2022-06-02 13:20:57'),
(33, '../avatars/33.png', '2022-06-02 13:20:57'),
(34, '../avatars/34.png', '2022-06-02 13:20:57'),
(35, '../avatars/35.png', '2022-06-02 13:20:57'),
(36, '../avatars/36.png', '2022-06-02 13:20:57');

-- --------------------------------------------------------

--
-- Structure de la table `Discussions`
--

CREATE TABLE `Discussions` (
  `id` int(11) NOT NULL,
  `contenu` longtext NOT NULL,
  `nom_utilisateur` varchar(255) NOT NULL,
  `createdDate` varchar(255) DEFAULT NULL,
  `avatar` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `ForumId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `Discussions`
--

INSERT INTO `Discussions` (`id`, `contenu`, `nom_utilisateur`, `createdDate`, `avatar`, `created`, `ForumId`) VALUES
(1, '', '', NULL, NULL, '2022-06-02 13:20:57', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `Forums`
--

CREATE TABLE `Forums` (
  `id` int(11) NOT NULL,
  `sujet` varchar(255) NOT NULL,
  `contenu` longtext NOT NULL,
  `nom_utilisateur` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `createdDate` varchar(255) DEFAULT NULL,
  `created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `pseudo` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `avatar_id` int(11) DEFAULT 1,
  `role` varchar(255) DEFAULT 'CLIENT',
  `created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `Users`
--

INSERT INTO `Users` (`id`, `pseudo`, `password`, `email`, `avatar_id`, `role`, `created`) VALUES
(2, 'Admin', '$2b$10$ox.gqDy5VqXduKEUvPEC/.WODi6z/nFKox5zvDzSs4Y0sDQDD7QAq', 'admin@gmail.com', 1, 'ADMIN', '2022-06-02 13:22:36');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Avatars`
--
ALTER TABLE `Avatars`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `Discussions`
--
ALTER TABLE `Discussions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ForumId` (`ForumId`);

--
-- Index pour la table `Forums`
--
ALTER TABLE `Forums`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Users_pseudo_unique` (`pseudo`),
  ADD UNIQUE KEY `Users_email_unique` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Avatars`
--
ALTER TABLE `Avatars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT pour la table `Discussions`
--
ALTER TABLE `Discussions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `Forums`
--
ALTER TABLE `Forums`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Discussions`
--
ALTER TABLE `Discussions`
  ADD CONSTRAINT `Discussions_ibfk_1` FOREIGN KEY (`ForumId`) REFERENCES `Forums` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
