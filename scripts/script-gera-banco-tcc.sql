-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: projetotcc
-- ------------------------------------------------------
-- Server version	5.7.18-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `atividade`
--

DROP TABLE IF EXISTS `atividade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `atividade` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descricao` text NOT NULL,
  `data_criacao` datetime NOT NULL,
  `valor_contratado` decimal(10,2) NOT NULL,
  `cliente_responsavel` int(11) NOT NULL,
  `profissional_responsavel` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cliente_responsavel_idx` (`cliente_responsavel`),
  KEY `profissional_responsavel_idx` (`profissional_responsavel`),
  CONSTRAINT `cliente_responsavel` FOREIGN KEY (`cliente_responsavel`) REFERENCES `cliente` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `profissional_responsavel` FOREIGN KEY (`profissional_responsavel`) REFERENCES `profissional` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `atividade`
--

LOCK TABLES `atividade` WRITE;
/*!40000 ALTER TABLE `atividade` DISABLE KEYS */;
/*!40000 ALTER TABLE `atividade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cliente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `telefone` varchar(15) DEFAULT NULL,
  `celular` varchar(15) NOT NULL,
  `cpf_cnpj` varchar(20) NOT NULL,
  `email` varchar(45) NOT NULL,
  `dados_acesso` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cliente_dados_acesso1_idx` (`dados_acesso`),
  CONSTRAINT `fk_cliente_dados_acesso1` FOREIGN KEY (`dados_acesso`) REFERENCES `usuario_acesso` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (2,'nome Teste','22857358','22121211','1238573200','asdasd@mail',5),(3,'nome Teste','22857358','22121211','1238573200','bibibibi@mail',6),(4,'nome Teste','22857358','22121211','1238573200','loginempresa@mail',20);
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empresa`
--

DROP TABLE IF EXISTS `empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `empresa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `razao_social` varchar(100) NOT NULL,
  `nome_fantasia` varchar(100) NOT NULL,
  `responsavel` varchar(50) NOT NULL,
  `area_atuacao` varchar(50) NOT NULL,
  `endereco` varchar(150) NOT NULL,
  `telefone` varchar(15) NOT NULL,
  `celular` varchar(15) NOT NULL,
  `cnpj` varchar(20) NOT NULL,
  `email` varchar(45) NOT NULL,
  `dados_acesso` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_empresa_dados_acesso1_idx` (`dados_acesso`),
  CONSTRAINT `fk_empresa_dados_acesso1` FOREIGN KEY (`dados_acesso`) REFERENCES `usuario_acesso` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresa`
--

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` VALUES (1,'razao social','nome fantasia','responsavel kaka','atua na boa','rua do amor','23232323','934939493','343423423423','asdasd@mail',0);
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movimento`
--

DROP TABLE IF EXISTS `movimento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movimento` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descricao` text NOT NULL,
  `data_criacao` datetime NOT NULL,
  `atividade_responsavel` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `atividade_responsavel_idx` (`atividade_responsavel`),
  CONSTRAINT `atividade_responsavel` FOREIGN KEY (`atividade_responsavel`) REFERENCES `atividade` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movimento`
--

LOCK TABLES `movimento` WRITE;
/*!40000 ALTER TABLE `movimento` DISABLE KEYS */;
/*!40000 ALTER TABLE `movimento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movimento_follow_up`
--

DROP TABLE IF EXISTS `movimento_follow_up`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movimento_follow_up` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descricao` text NOT NULL,
  `data_execucao` datetime NOT NULL,
  `movimento_responsavel` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `movimento_vinculado_idx` (`movimento_responsavel`),
  CONSTRAINT `movimento_vinculado` FOREIGN KEY (`movimento_responsavel`) REFERENCES `movimento` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movimento_follow_up`
--

LOCK TABLES `movimento_follow_up` WRITE;
/*!40000 ALTER TABLE `movimento_follow_up` DISABLE KEYS */;
/*!40000 ALTER TABLE `movimento_follow_up` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parcela`
--

DROP TABLE IF EXISTS `parcela`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `parcela` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `valor` decimal(10,2) NOT NULL,
  `data_pagamento` datetime NOT NULL,
  `status_pagamento` tinyint(4) NOT NULL,
  `atividade_responsavel` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `atividade_responsavel_idx` (`atividade_responsavel`),
  CONSTRAINT `atividade_referente` FOREIGN KEY (`atividade_responsavel`) REFERENCES `atividade` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parcela`
--

LOCK TABLES `parcela` WRITE;
/*!40000 ALTER TABLE `parcela` DISABLE KEYS */;
/*!40000 ALTER TABLE `parcela` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profissao`
--

DROP TABLE IF EXISTS `profissao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `profissao` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `descricao` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profissao`
--

LOCK TABLES `profissao` WRITE;
/*!40000 ALTER TABLE `profissao` DISABLE KEYS */;
INSERT INTO `profissao` VALUES (1,'vai dar','sssssssssssssss'),(2,'manoloooolova despacito','caraio borracha'),(3,'va despacito','BONITO');
/*!40000 ALTER TABLE `profissao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profissional`
--

DROP TABLE IF EXISTS `profissional`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `profissional` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `endereco` varchar(150) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `curriculo` text NOT NULL,
  `telefone` varchar(20) DEFAULT NULL,
  `celular` varchar(20) NOT NULL,
  `email` varchar(45) NOT NULL,
  `profissao_exercida` int(11) NOT NULL,
  `empresa_responsavel` int(11) NOT NULL,
  `dados_acesso` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `profissao_idx` (`profissao_exercida`),
  KEY `empresa_idx` (`empresa_responsavel`),
  KEY `fk_profissional_dados_acesso1_idx` (`dados_acesso`),
  CONSTRAINT `empresa_responsavel` FOREIGN KEY (`empresa_responsavel`) REFERENCES `empresa` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_profissional_dados_acesso1` FOREIGN KEY (`dados_acesso`) REFERENCES `usuario_acesso` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `profissao_exercida` FOREIGN KEY (`profissao_exercida`) REFERENCES `profissao` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profissional`
--

LOCK TABLES `profissional` WRITE;
/*!40000 ALTER TABLE `profissional` DISABLE KEYS */;
INSERT INTO `profissional` VALUES (4,'juao paulu','rua do triste','123123123','um cara q nao faz nada bem',NULL,'','asdasd@mail',1,1,0),(5,'nome Teste','rua pica das galaxias','1238573200','famoso lorem ipsum eterno ashduahsudasdlçkjalsdkjalskdjalskdjlasjdlaksjdlakjsdlasdjlakjskld','22857358','22121211','loginempresa2@mail',1,1,27);
/*!40000 ALTER TABLE `profissional` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_acesso`
--

DROP TABLE IF EXISTS `usuario_acesso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario_acesso` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(50) NOT NULL,
  `senha` varchar(45) NOT NULL,
  `perfil` int(11) NOT NULL,
  `ativo` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `login_UNIQUE` (`login`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_acesso`
--

LOCK TABLES `usuario_acesso` WRITE;
/*!40000 ALTER TABLE `usuario_acesso` DISABLE KEYS */;
INSERT INTO `usuario_acesso` VALUES (5,'asdasd@mail','senhanova',1,1),(6,'bibibibi@mail','senhanova2',2,1),(20,'loginempresa@mail','senhanova2',2,1),(27,'loginempresa2@mail','senhanova2',1,1);
/*!40000 ALTER TABLE `usuario_acesso` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-10-12 18:24:40
