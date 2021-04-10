-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  ven. 09 avr. 2021 à 16:27
-- Version du serveur :  8.0.18
-- Version de PHP :  7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `groupomania`
--

-- --------------------------------------------------------

--
-- Structure de la table `commentaires`
--

CREATE TABLE `commentaires` (
  `idCommentaire` smallint(5) UNSIGNED NOT NULL,
  `commentaire` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `commentaireDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `pseudoCommentaire` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `idUser` smallint(5) UNSIGNED NOT NULL,
  `idForum` smallint(5) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `commentaires`
--

INSERT INTO `commentaires` (`idCommentaire`, `commentaire`, `commentaireDate`, `pseudoCommentaire`, `idUser`, `idForum`) VALUES
(11, 'Beau proverbe Mimich', '2021-04-08 15:07:05', 'Steph', 1, 19),
(12, 'Très beau !!!', '2021-04-08 15:08:47', 'Luc', 4, 19),
(13, 'Beau Proverbe Steph !!!', '2021-04-08 15:09:11', 'Luc', 4, 17);

-- --------------------------------------------------------

--
-- Structure de la table `droitsusers`
--

CREATE TABLE `droitsusers` (
  `idDroit` smallint(5) UNSIGNED NOT NULL,
  `Droit` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `droitsusers`
--

INSERT INTO `droitsusers` (`idDroit`, `Droit`) VALUES
(1, 'Administrateurs'),
(2, 'Utilisateurs');

-- --------------------------------------------------------

--
-- Structure de la table `forums`
--

CREATE TABLE `forums` (
  `idForum` smallint(5) UNSIGNED NOT NULL,
  `contenuTexte` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `contenuDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `pseudoForum` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `idUser` smallint(5) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `forums`
--

INSERT INTO `forums` (`idForum`, `contenuTexte`, `contenuDate`, `pseudoForum`, `idUser`) VALUES
(17, 'Métier qui jamais ne lasse, est le meilleur que l\'on fasse.', '2021-04-08 11:35:40', 'Steph', 1),
(19, 'Sois meilleur aujourd\'hui que tu ne fus hier.', '2021-04-08 11:42:14', 'Mimich', 2);

-- --------------------------------------------------------

--
-- Structure de la table `services`
--

CREATE TABLE `services` (
  `idService` smallint(5) UNSIGNED NOT NULL,
  `Service` varchar(50) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `services`
--

INSERT INTO `services` (`idService`, `Service`) VALUES
(1, 'Direction'),
(2, 'Ressources Humaines'),
(3, 'Comptabilité'),
(4, 'Vente'),
(5, 'Entretien');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `idUser` smallint(5) UNSIGNED NOT NULL,
  `identifiant` smallint(4) NOT NULL,
  `nom` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `prenom` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `pseudo` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `idDroit` smallint(5) UNSIGNED NOT NULL,
  `idService` smallint(5) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`idUser`, `identifiant`, `nom`, `prenom`, `pseudo`, `email`, `password`, `idDroit`, `idService`) VALUES
(1, 1001, 'DUBOIS', 'Stéphanie', 'Steph', '483be25f2bfbcff9c7b63a5dee4ba0e39adbc75ba1333cd1355bf19563b032a30da3d2d5d30ef8856817e9015833830dd6c5bcbbbbf98e74d5e285998f3a15f4', '$2b$10$6LUPwntEnGQoNjhcZ5919O4H4U/X6YLXfT95vk/KHB0TU2uWVspnG', 1, 1),
(2, 2001, 'BLANCHARD', 'Michel', NULL, NULL, NULL, 1, 2),
(3, 2002, 'DESCHAMPS', 'Aurélie', 'Aurélie', '17ed0c21a5be62e04d74fa39b4e54aae15345d57573c6dc881b1a1a3822690539cc6440fbd734ed91b948eaaa8a3cf41abf2cad8d04cf91beff723392f44cf4e', '$2b$10$j2NbTXj7HMsuPwjfdxfK9ubItWOzdT9/V781i6GO4Rq.N7kYSQsCS', 1, 2),
(4, 3001, 'MEUNIER', 'Luc', 'Luc', '5bf4a8dae3f3acb6614a6b2316171429f44c6c9dfdc72e4612f638d752b61564fc9f17a41329110545f97bcbf3ceb8f4ddb0fd02337422c1e3bb611c0e99351c', '$2b$10$2eLRjbcTA0KKm3UytA.iAeQ4RFRsCcPb616SzvldfyJPiGN3O2zcO', 2, 3),
(5, 3002, 'GUICHARD', 'Amandine', NULL, NULL, NULL, 2, 3),
(6, 4001, 'SANCHEZ', 'Lucas', NULL, NULL, NULL, 2, 4),
(7, 4002, 'Klein', 'Claire', NULL, NULL, NULL, 2, 4),
(8, 4003, 'DUFOUR', 'Jean-Marc', NULL, NULL, NULL, 2, 4),
(9, 5001, 'LEROY', 'Anne-Sophie', NULL, NULL, NULL, 2, 5),
(10, 5002, 'LANGLOIS', 'Adam', NULL, NULL, NULL, 2, 5);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `commentaires`
--
ALTER TABLE `commentaires`
  ADD PRIMARY KEY (`idCommentaire`),
  ADD KEY `fk_idForumCommentaires` (`idForum`),
  ADD KEY `fk_idUserCommentaires` (`idUser`);

--
-- Index pour la table `droitsusers`
--
ALTER TABLE `droitsusers`
  ADD PRIMARY KEY (`idDroit`);

--
-- Index pour la table `forums`
--
ALTER TABLE `forums`
  ADD PRIMARY KEY (`idForum`),
  ADD KEY `fk_idUserForums` (`idUser`);

--
-- Index pour la table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`idService`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUser`),
  ADD UNIQUE KEY `identifiant` (`identifiant`),
  ADD UNIQUE KEY `pseudonyme` (`pseudo`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `fk_idService` (`idService`),
  ADD KEY `fk_idDroit` (`idDroit`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `commentaires`
--
ALTER TABLE `commentaires`
  MODIFY `idCommentaire` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `droitsusers`
--
ALTER TABLE `droitsusers`
  MODIFY `idDroit` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `forums`
--
ALTER TABLE `forums`
  MODIFY `idForum` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT pour la table `services`
--
ALTER TABLE `services`
  MODIFY `idService` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `idUser` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `commentaires`
--
ALTER TABLE `commentaires`
  ADD CONSTRAINT `fk_idForumCommentaires` FOREIGN KEY (`idForum`) REFERENCES `forums` (`idForum`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_idUserCommentaires` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `forums`
--
ALTER TABLE `forums`
  ADD CONSTRAINT `fk_idUserForums` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_idDroit` FOREIGN KEY (`idDroit`) REFERENCES `droitsusers` (`idDroit`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `fk_idService` FOREIGN KEY (`idService`) REFERENCES `services` (`idService`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
