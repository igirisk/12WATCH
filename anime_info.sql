-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: anime-information.ce5brupzflao.us-east-1.rds.amazonaws.com    Database: anime_info
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `anime_info`
--

DROP TABLE IF EXISTS `anime_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `anime_info` (
  `anime_name` varchar(255) NOT NULL,
  `sysnopsis` longtext,
  `thumbnail` longtext,
  `background_image` longtext,
  `episode_count` int DEFAULT NULL,
  `episode_duration` varchar(45) DEFAULT NULL,
  `source_origin` varchar(45) DEFAULT NULL,
  `star_rating` decimal(10,0) DEFAULT NULL,
  `recommend_percent` int DEFAULT NULL,
  `format_type` varchar(45) DEFAULT NULL,
  `completion_status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`anime_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `anime_info`
--

LOCK TABLES `anime_info` WRITE;
/*!40000 ALTER TABLE `anime_info` DISABLE KEYS */;
INSERT INTO `anime_info` VALUES ('Bungo Stray Dogs 4','The fourth season of Bungou Stray Dogs.\n\nNo longer concerned with military affairs, Yukichi Fukuzawa intends to act as a lone bodyguard-for-hire, making use of his deadly swordsmanship. However, things are not going as planned for his freelance business, and that is when he crosses paths with a mouthy boy named Ranpo Edogawa. While their initial interactions are intertwined with a bizarre murder mystery, the aftermath prompts the formation of the Armed Detective Agency.\n\nPresently, Ranpo finds himself chasing down a gifted individual with the dangerous ability to execute the perfect crime. But as the great detective unravels the case, he soon discovers an elaborate plot to obliterate the Agency in its entirety.\n\nAlthough forewarned of the trap, the Agency continue their pursuit of the criminals, only to end up framed for the crime themselves. Now branded as wanted terrorists, the remaining members must find a way to prove their innocence—even if they must turn to sworn enemies for assistance.\n\n(Source: MAL Rewrite)','https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx141249-8tjavEDHmLoT.jpg','https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/11/Bungou-Stray-Dogs-social.jpg',13,'24 mins','Manga',NULL,NULL,'TV','Finished'),('JUJUTSU KAISEN Season 2','The second season of Jujutsu Kaisen.\n\nThe past comes to light when second-year students Satoru Gojou and Suguru Getou are tasked with escorting young Riko Amanai to Master Tengen. But when a non-sorcerer user tries to kill them, their mission to protect the Star Plasma Vessel threatens to turn them into bitter enemies and cement their destinies—one as the world’s strongest sorcerer, and the other its most twisted curse user!\n\n(Source: Crunchyroll)','https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx145064-5fa4ZBbW4dqA.jpg','https://sportshub.cbsistatic.com/i/2023/06/28/55d5b394-4f41-4c14-9d0d-69b2d5cd2604/jujutsu-kaisen-season-2-gojo-geto-shoko-anime-art.jpg',23,'24 mins','Manga',4,100,'TV','Airing'),('MASHLE: MAGIC AND MUSCLES','This is a world of magic. This is a world in which magic is casually used by everyone.\n\nIn a deep, dark forest in this world of magic, there is a boy who is singlemindedly working out. His name is Mash Burnedead, and he has a secret. He can’t use magic.\n\nAll he wanted was to live a quiet life with his family, but people suddenly start trying to kill him one day and he somehow finds himself enrolled in Magic School. There, he sets his sights on becoming a “Divine Visionary,” the elite of the elite.\n\nWill his ripped muscles work against the best and brightest of the wizarding world? The curtain rises on this off-kilter magical fantasy in which the power of being jacked crushes any spell!\n\n(Source: Crunchyroll)\n','https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151801-wYg28dEaJAw3.png','https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/03/Mashle-Magic-and-Muscles.jpg',12,'24 mins','Manga',NULL,NULL,'TV','Airing'),('NieR:Automata Ver1.1a','The distant future, 5012.\nThe sudden aerial invasion of Earth by ＜Aliens＞ and their creations ＜Machine Lifeforms＞led mankind to the brink of extinction. The surviving number of humans who took refuge on the moon to organize a counterattack using ＜android＞ soldiers to recapture Earth.\n\nHowever, the war reaches a stalemate as the ＜Machine Lifeforms＞ continue to multiply infinitely. In turn, humanity deploys anew unit of android soldiers as an ultimate weapon: ＜YoRHa＞\n\nNewly dispatched to Earth ＜2B＞ joins＜9S＞, the analyst currently stationed there, where amid their mission, they encounter a myriad of mysterious phenomena...\n\nThis is the story of these lifeless ＜androids＞ and their endless fight for the sake of mankind.\n\n(Source: NieR:Automata Ver1.1a Official USA Website)\n','https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx145665-kiAZX3DsbBnl.jpg','https://i0.wp.com/www.animefeminist.com/wp-content/uploads/2023/01/nier5.jpg?fit=1002%2C562&ssl=1',12,'24 mins','Video Game',NULL,NULL,'TV','Airing'),('Oshi No Ko','When a pregnant young starlet appears in Gorou Amemiya’s countryside medical clinic, the doctor takes it upon himself to safely (and secretly) deliver Ai Hoshino’s child so she can make a scandal-free return to the stage. But no good deed goes unpunished, and on the eve of her delivery, he finds himself slain at the hands of Ai’s deluded stalker — and subsequently reborn as Ai’s child, Aquamarine Hoshino! The glitz and glamor of showbiz hide the dark underbelly of the entertainment industry, threatening to dull the shine of his favorite star. Can he help his new mother rise to the top of the charts? And what will he do when unthinkable disaster strikes?\n\n(Source: HIDIVE)','https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx150672-2WWJVXIAOG11.png','https://republicmonews.com/wp-content/uploads/2023/04/oshi-no-ko-anime-1.jpg',11,'24 mins','Manga',NULL,NULL,'TV','Finished'),('Spy Classroom','Conflict-ravaged nations now deploy covert operatives instead of missiles. Lily is recruited into spy-training… but her practical skills are absolutely abysmal. Desperate to pass, she leaps at the chance to join the mysterious “Tomoshibi” team. Too bad the team is filled with even more hopeless spies. Together they must conquer the Impassible Mission and best their genius instructor, but the true purpose behind their classroom is more harrowing than they can imagine…\n\n(Source: HIDIVE)','https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx146323-vyj1w1VRgDN7.png','https://animecorner.me/wp-content/uploads/2022/07/spy-room.png',12,'26 mins','Light Novel',NULL,NULL,'TV','Finished'),('Vinland Saga Season 2','The second season of Vinland Saga.\n\nWhen Thorfinn loses it all, he must find his new purpose for living in a strange new land.\n\n(Source: Crunchyroll)','https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx136430-f8Iza5GEynRW.jpg','https://staticg.sportskeeda.com/editor/2023/01/37edc-16736245252449-1920.jpg',24,'26 mins','Manga',NULL,NULL,'TV','Finished');
/*!40000 ALTER TABLE `anime_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `characters`
--

DROP TABLE IF EXISTS `characters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `characters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `anime_name` varchar(255) NOT NULL,
  `character_name` varchar(255) NOT NULL,
  `character_role` varchar(255) DEFAULT NULL,
  `character_image` longtext,
  `voice_actor` varchar(255) DEFAULT NULL,
  `voice_actor_nationality` varchar(255) DEFAULT NULL,
  `voice_actor_image` longtext,
  PRIMARY KEY (`id`),
  KEY `anime_name_idx` (`anime_name`),
  CONSTRAINT `anime_name` FOREIGN KEY (`anime_name`) REFERENCES `anime_info` (`anime_name`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `characters`
--

LOCK TABLES `characters` WRITE;
/*!40000 ALTER TABLE `characters` DISABLE KEYS */;
INSERT INTO `characters` VALUES (9,'NieR:Automata Ver1.1a','YoRHa 2-gou B-gata','main','https://s4.anilist.co/file/anilistcdn/character/large/b132494-R05zeZPjDG3l.jpg','Yui Ishikawa','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n100142-k6RP0HzXffUG.png'),(10,'NieR:Automata Ver1.1a','YoRHa 9-gou S-gata','main','https://s4.anilist.co/file/anilistcdn/character/large/b133041-XkN8gKwPwopM.jpg','Natsuki Hanae','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n111635-L385UcjTKCBq.png'),(11,'NieR:Automata Ver1.1a','YoRHa A-gata 2-gou','main','https://s4.anilist.co/file/anilistcdn/character/large/b138298-iGfSohqtJYsT.jpg','Ayaka Suwa','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n115106-QsQwmOLeNILr.png'),(12,'NieR:Automata Ver1.1a','Adam','supporting','https://s4.anilist.co/file/anilistcdn/character/large/b138299-mP5a5DdmzNrc.jpg','Daisuke Namikawa','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n95087-6dlBBbejsPyg.png'),(13,'NieR:Automata Ver1.1a','Eve','supporting','https://s4.anilist.co/file/anilistcdn/character/large/b138300-QuIUSfRfsiIS.jpg','Tatsuhisa Suzuki','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n95735-xssSe5BRSkaq.jpg'),(14,'NieR:Automata Ver1.1a','Pascal','supporting','https://s4.anilist.co/file/anilistcdn/character/large/b138307-Dml2WTT8BP9H.png','Aoi Yuuki','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n101686-PTd0lQZMsmcv.png'),(15,'NieR:Automata Ver1.1a','Pod 042','supporting','https://s4.anilist.co/file/anilistcdn/character/large/b288076-W9kMB4bjlUsC.png','Hiroki Yasumoto','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n95025-LGHr4VufmfCc.jpg'),(16,'NieR:Automata Ver1.1a','Pod 153','supporting',NULL,'Kaoru Akiyama','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n161636-NND1JNx9skUk.png'),(17,'Bungo Stray Dogs 4','Yukichi Fukuzawa','main','https://s4.anilist.co/file/anilistcdn/character/large/b89196-E2tIf6nIPKnW.png','Rikiya Koyama','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n95113-z9eyYjTKSTX4.png'),(18,'Bungo Stray Dogs 4','Atsushi Nakajima','main','https://s4.anilist.co/file/anilistcdn/character/large/b89197-vB5kP72ruckV.png','Yuuto Uemura','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n118498-6YvZZS0HM2qD.jpg'),(19,'Bungo Stray Dogs 4','Ranpo Edogawa','main','https://s4.anilist.co/file/anilistcdn/character/large/b89201-K0X5HNq88Oub.png','Hiroshi Kamiya','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n95118-oOElrn1aSaiC.png'),(20,'Bungo Stray Dogs 4','Osamu Dazai','supporting','https://s4.anilist.co/file/anilistcdn/character/large/b89198-qKmRTw4Y3PRC.png','Mamoru Miyano','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n95065-eyynywrhombR.png'),(21,'Bungo Stray Dogs 4','Junichirou Tanizaki','supporting','https://s4.anilist.co/file/anilistcdn/character/large/b89205-69AfPXd4QmX3.png','Toshiyuki Toyonaga','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n95600-giNVqkdeWKuF.png'),(22,'Bungo Stray Dogs 4','Kenji Miyazawa','supporting','https://s4.anilist.co/file/anilistcdn/character/large/b89207-i7pw9zNQqXpZ.png','Hiroyuki Kagura','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n119433-2ypAywSEVR2m.png'),(23,'Bungo Stray Dogs 4','Akiko Yosano','supporting','https://s4.anilist.co/file/anilistcdn/character/large/b89208-Zjsz22lCmrIE.png','Yuu Shimamura','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n100295-d7CPqlz4jGaT.png'),(24,'Bungo Stray Dogs 4','Chuuya Nakahara','supporting','https://s4.anilist.co/file/anilistcdn/character/large/b89853-0oNd785axB96.png','Kishou Taniyama','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n95196-t2vbxQMee0ci.png'),(25,'MASHLE: MAGIC AND MUSCLES','Mash Burnedead','main','https://s4.anilist.co/file/anilistcdn/character/large/b158734-k8FAVIyXKdW1.jpg','Chiaki Kobayashi','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n133507-oT1bd4Gax1Qg.jpg'),(26,'MASHLE: MAGIC AND MUSCLES','Mash Burnedead','main','https://s4.anilist.co/file/anilistcdn/character/large/b158734-k8FAVIyXKdW1.jpg','Reo Osanai (Baby)','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n289560-2jOMhB8wlvJs.png'),(27,'MASHLE: MAGIC AND MUSCLES','Lance Crown','main','https://s4.anilist.co/file/anilistcdn/character/large/b172075-aOsZuM7D0bcW.jpg','Kaito Ishikawa','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n115156-ngYfqBazlxYQ.png'),(28,'MASHLE: MAGIC AND MUSCLES','Finn Ames','main','https://s4.anilist.co/file/anilistcdn/character/large/b174368-tYxOTsrCDEk9.jpg','Reiji Kawashima','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n180532-mOjlNlbvm1N4.png'),(29,'MASHLE: MAGIC AND MUSCLES','Dot Barrett','main','https://s4.anilist.co/file/anilistcdn/character/large/b174369-VjKvYJbXLO5I.jpg','Takuya Eguchi','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n102695-dGzsJkor0KMj.jpg'),(30,'MASHLE: MAGIC AND MUSCLES','Lemon Irvine','supporting','https://s4.anilist.co/file/anilistcdn/character/large/b167819-2pddKcJiApjD.jpg','Reina Ueda','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n118602-SFsQabl6KLu9.png'),(31,'MASHLE: MAGIC AND MUSCLES','Regro Burnedead','supporting','https://s4.anilist.co/file/anilistcdn/character/large/b202421-LCfDWRhioGnY.jpg','Choo','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n95898-XHSESV65G8Jv.png'),(32,'MASHLE: MAGIC AND MUSCLES','Regro Burnedead','supporting','https://s4.anilist.co/file/anilistcdn/character/large/b202421-LCfDWRhioGnY.jpg','Reina Okiebisu (Boy)','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n301990-y7vWAdnkd87G.jpg'),(33,'MASHLE: MAGIC AND MUSCLES','Regro Burnedead','supporting','https://s4.anilist.co/file/anilistcdn/character/large/b202421-LCfDWRhioGnY.jpg','Sora Handa (Teenage)','japanese',NULL),(56,'Vinland Saga Season 2','Thorfinn Karlsefni','main','https://s4.anilist.co/file/anilistcdn/character/large/b10138-zOPrka0ddZOR.png','Yuuto Uemura','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n118498-6YvZZS0HM2qD.jpg'),(57,'Vinland Saga Season 2','Thorfinn Karlsefni','main','https://s4.anilist.co/file/anilistcdn/character/large/b10138-zOPrka0ddZOR.png','Shizuka Ishigami (Childhood)','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n118738-60gKflxjl80c.png'),(58,'Vinland Saga Season 2','Einar','main','https://s4.anilist.co/file/anilistcdn/character/large/b28030-APYJLr7FvqtM.jpg','Shunsuke Takeuchi','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n119185-65kkxuTRxAgo.png'),(59,'Vinland Saga Season 2','Canute Svenson','supporting','https://s4.anilist.co/file/anilistcdn/character/large/b17438-7fxiIAHd6Omj.jpg','Kenshou Ono','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n95819-O4fosAY0a1Ml.jpg'),(60,'Vinland Saga Season 2','Canute Svenson','supporting','https://s4.anilist.co/file/anilistcdn/character/large/b17438-7fxiIAHd6Omj.jpg','Aya Endou (Childhood)','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n95054-8VgnlGK5QX2A.png'),(61,'Vinland Saga Season 2','Thorkell','supporting','https://s4.anilist.co/file/anilistcdn/character/large/b17440-XvYe5JY862ZT.png','Akio Ootsuka','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n95146-T6IEmqXW3xUN.jpg'),(62,'Vinland Saga Season 2','Leif Erikson','supporting','https://s4.anilist.co/file/anilistcdn/character/large/b19486-XRzBNqoLb5Le.png','Youji Ueda','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n95926-IzwXTUF5tUJD.png'),(63,'Vinland Saga Season 2','Arnheid','supporting','https://s4.anilist.co/file/anilistcdn/character/large/b75590-grddrcysIfPx.jpg','Mayumi Saco','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/1673.jpg'),(70,'Spy Classroom','Hanazono','main','https://s4.anilist.co/file/anilistcdn/character/large/b197190-PscSlGlc65sf.jpg','Sora Amamiya','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n116517-NQh6ewlCwzBN.jpg'),(71,'Spy Classroom','Klaus','main','https://s4.anilist.co/file/anilistcdn/character/large/b197206-PCxrF415jqMO.jpg','Yuuichirou Umehara','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/118908-f16PugVCnZfT.jpg'),(72,'Spy Classroom','Hyakki	','main','https://s4.anilist.co/file/anilistcdn/character/large/b197200-PH2shNWq4Sqv.jpg','Nao Touyama','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n106184-rFA0sHFJrbk4.png'),(73,'Spy Classroom','Manamusume	','main','https://s4.anilist.co/file/anilistcdn/character/large/b197201-MV4skuCoJaG5.jpg','Miku Itou','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n118581-JzwZhJUqhNGr.png'),(74,'Spy Classroom','Hyojin','main','https://s4.anilist.co/file/anilistcdn/character/large/b197202-lLsc9qJMh71U.jpg','Aoi Yuuki','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n101686-PTd0lQZMsmcv.png'),(75,'Spy Classroom','Yumegatari','main','https://s4.anilist.co/file/anilistcdn/character/large/b197203-GbieKlNt3dpk.jpg','Sumire Uesaka','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n109441-lVHpd6BN2g16.png'),(76,'Spy Classroom','Sougen','main','https://s4.anilist.co/file/anilistcdn/character/large/b197204-dg3PP99mEvXY.jpg','Ayane Sakura','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n106622-yemj6ymLz4lY.png'),(77,'Spy Classroom','Bouga','main','https://s4.anilist.co/file/anilistcdn/character/large/b197205-1YBuLlGiqoMA.jpg','Tomori Kusunoki','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n124923-TggYFBvOpK3M.png'),(78,'Spy Classroom','Gujin','main','https://s4.anilist.co/file/anilistcdn/character/large/b232909-tvPsduetwtrH.png','Inori Minase','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n106297-KnzvgfxB1byY.png'),(79,'Oshi No Ko','Aquamarine Hoshino','main','https://s4.anilist.co/file/anilistcdn/character/large/b183885-HOmw8CqcJdv3.jpg','Takeo Ootsuka','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n128426-hJ2OOYDVy8OJ.jpg'),(80,'Oshi No Ko','Aquamarine Hoshino','main','https://s4.anilist.co/file/anilistcdn/character/large/b183885-HOmw8CqcJdv3.jpg','Yumi Uchiyama (Childhood)','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n106784-reDoHBLWxi7J.jpg'),(81,'Oshi No Ko','Aquamarine Hoshino','main','https://s4.anilist.co/file/anilistcdn/character/large/b183885-HOmw8CqcJdv3.jpg','Kento Itou (Former Self)','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n122874-Ay8XWEJ7ljUf.jpg'),(82,'Oshi No Ko','Ruby Hoshino','main','https://s4.anilist.co/file/anilistcdn/character/large/b183884-iyo3BmTuhJ0l.jpg','Yurie Igoma','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n293910-UBwHydgOrXO6.png'),(83,'Oshi No Ko','Ruby Hoshino','main','https://s4.anilist.co/file/anilistcdn/character/large/b183884-iyo3BmTuhJ0l.jpg','Tomoyo Takayanagi (Former Self)','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n122320-tV8CERbhYcNV.png'),(84,'Oshi No Ko','Kana Arima','main','https://s4.anilist.co/file/anilistcdn/character/large/b188783-jrhkBCkKJbou.png','Megumi Han','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n107961-aMetTdEFTi2W.jpg'),(85,'Oshi No Ko','Akane Kurokawa','supporting','https://s4.anilist.co/file/anilistcdn/character/large/b203384-YuSppFDMw2wn.png','Megumi Han','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n121821-LLWUOipBoYxJ.png'),(86,'Oshi No Ko','Ai Hoshino','supporting','https://s4.anilist.co/file/anilistcdn/character/large/b172759-KCP1QyLdstX9.png','Rie Takahashi','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n119331-0CYDTh2mwy62.png'),(87,'Oshi No Ko','MEM-cho','supporting','https://s4.anilist.co/file/anilistcdn/character/large/b205434-AuBcR4M05f6s.png','Rumi Ookubo','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n107041-ZqPloXZhcuQw.jpg'),(88,'JUJUTSU KAISEN Season 2','Yuuji Itadori','main','https://s4.anilist.co/file/anilistcdn/character/large/b127212-FVm2tD0erQ5B.png','Junya Enoki','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n119319-yIrrUOUaJuSm.png'),(89,'JUJUTSU KAISEN Season 2','Megumi Fushiguro','main','https://s4.anilist.co/file/anilistcdn/character/large/b126635-L0y3I92JSUkN.png','Yuuma Uchida','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n119617-icFDk96OdV5k.png'),(90,'JUJUTSU KAISEN Season 2','Megumi Fushiguro','main','https://s4.anilist.co/file/anilistcdn/character/large/b126635-L0y3I92JSUkN.png','Natsumi Fujiwara (First Grade)','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n119740-EEZ5DErQhOht.png'),(91,'JUJUTSU KAISEN Season 2','Nobara Kugisaki','main','https://s4.anilist.co/file/anilistcdn/character/large/b133700-f6sOO3TcgLV6.png','Asami Seto','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n106787-pNRFEiywJuEx.png'),(92,'JUJUTSU KAISEN Season 2','Satoru Gojou','main','https://s4.anilist.co/file/anilistcdn/character/large/b127691-6m4hNwL2vLML.png','Yuuichi Nakamura','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n95513-up9ZDuocHgRs.png'),(93,'JUJUTSU KAISEN Season 2','Suguru Getou','main','https://s4.anilist.co/file/anilistcdn/character/large/b133699-FCnXaISgazAi.png','Takahiro Sakurai','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n95079-MdbWTLxPUvFf.jpg'),(94,'JUJUTSU KAISEN Season 2','Shouko Ieiri','supporting','https://s4.anilist.co/file/anilistcdn/character/large/b158154-UCqbiULli62P.png','Aya Endou','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n95054-8VgnlGK5QX2A.png'),(95,'JUJUTSU KAISEN Season 2','Riko Amanai','supporting','https://s4.anilist.co/file/anilistcdn/character/large/b203015-ez2Io1gxIQOP.jpg','Anna Nagase','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n182100-buLXSv62GTH2.png'),(96,'JUJUTSU KAISEN Season 2','Touji Fushiguro','supporting','https://s4.anilist.co/file/anilistcdn/character/large/b162722-btzdghBizxKS.jpg','Takehito Koyasu','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n95160-jWevcH7BmfE1.jpg'),(97,'JUJUTSU KAISEN Season 2','Kento Nanami','supporting','https://s4.anilist.co/file/anilistcdn/character/large/b133704-8wLTGjc234q2.png','Kenjirou Tsuda','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n95591-WQGdD3ubbeoq.jpg'),(98,'JUJUTSU KAISEN Season 2','Mahito','supporting','https://s4.anilist.co/file/anilistcdn/character/large/b133702-Y7JRG5vAvjIL.png','Nobunaga Shimazaki','japanese','https://s4.anilist.co/file/anilistcdn/staff/large/n105989-96etzH1dLNug.jpg');
/*!40000 ALTER TABLE `characters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genres` (
  `id` int NOT NULL AUTO_INCREMENT,
  `anime_name` varchar(255) DEFAULT NULL,
  `genre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `anime_name_idx` (`anime_name`),
  CONSTRAINT `anime_name0` FOREIGN KEY (`anime_name`) REFERENCES `anime_info` (`anime_name`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (6,'NieR:Automata Ver1.1a','action'),(7,'NieR:Automata Ver1.1a','drama'),(8,'NieR:Automata Ver1.1a','fantasy'),(9,'NieR:Automata Ver1.1a','psychological'),(10,'NieR:Automata Ver1.1a','sci-fi'),(11,'Bungo Stray Dogs 4','action'),(12,'Bungo Stray Dogs 4','comedy'),(13,'Bungo Stray Dogs 4','mystery'),(14,'Bungo Stray Dogs 4','supernatural'),(15,'MASHLE: MAGIC AND MUSCLES','action'),(16,'MASHLE: MAGIC AND MUSCLES','comedy'),(17,'MASHLE: MAGIC AND MUSCLES','fantasy'),(28,'Vinland Saga Season 2','action'),(29,'Vinland Saga Season 2','adventure'),(30,'Vinland Saga Season 2','drama'),(34,'Spy Classroom','action'),(35,'Spy Classroom','comedy'),(36,'Spy Classroom','drama'),(37,'Spy Classroom','mystery'),(38,'Oshi No Ko','drama'),(39,'Oshi No Ko','mystery'),(40,'Oshi No Ko','psychological'),(41,'Oshi No Ko','supernatural'),(42,'JUJUTSU KAISEN Season 2','Action'),(43,'JUJUTSU KAISEN Season 2','Drama'),(44,'JUJUTSU KAISEN Season 2','Supernatural');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producers`
--

DROP TABLE IF EXISTS `producers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `anime_name` varchar(255) DEFAULT NULL,
  `producer` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `anime_name3_idx` (`anime_name`),
  CONSTRAINT `anime_name2` FOREIGN KEY (`anime_name`) REFERENCES `anime_info` (`anime_name`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producers`
--

LOCK TABLES `producers` WRITE;
/*!40000 ALTER TABLE `producers` DISABLE KEYS */;
INSERT INTO `producers` VALUES (4,'NieR:Automata Ver1.1a','Aniplex'),(5,'NieR:Automata Ver1.1a','Square Enix'),(6,'NieR:Automata Ver1.1a','Aniplex of America'),(7,'Bungo Stray Dogs 4','KADOKAWA'),(8,'Bungo Stray Dogs 4','Bandai Namco Music Live'),(9,'Bungo Stray Dogs 4','Movic'),(10,'Bungo Stray Dogs 4','Crunchyroll'),(11,'Bungo Stray Dogs 4','Sony Music Solutions'),(12,'Bungo Stray Dogs 4','WOWOW'),(13,'MASHLE: MAGIC AND MUSCLES','Aniplex'),(14,'MASHLE: MAGIC AND MUSCLES','Shueisha'),(15,'MASHLE: MAGIC AND MUSCLES','ADK Marketing Solutions'),(27,'Vinland Saga Season 2','Twin Engine'),(28,'Vinland Saga Season 2','Dentsu'),(29,'Vinland Saga Season 2','Kodansha'),(33,'Spy Classroom','KADOKAWA'),(34,'Spy Classroom','AT-X'),(35,'Spy Classroom','Movic'),(36,'Spy Classroom','BS Nittele'),(37,'Oshi No Ko','KADOKAWA'),(38,'Oshi No Ko','Shueisha'),(39,'Oshi No Ko','CyberAgent'),(40,'JUJUTSU KAISEN Season 2','Toho'),(41,'JUJUTSU KAISEN Season 2','Shueisha'),(42,'JUJUTSU KAISEN Season 2','Sumzap'),(43,'JUJUTSU KAISEN Season 2','Mainichi Broadcasting System');
/*!40000 ALTER TABLE `producers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staffs`
--

DROP TABLE IF EXISTS `staffs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `staffs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `anime_name` varchar(255) DEFAULT NULL,
  `staff_name` varchar(45) DEFAULT NULL,
  `staff_role` varchar(45) DEFAULT NULL,
  `staff_image` longtext,
  PRIMARY KEY (`id`),
  KEY `anime_name2_idx` (`anime_name`),
  CONSTRAINT `anime_name9` FOREIGN KEY (`anime_name`) REFERENCES `anime_info` (`anime_name`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staffs`
--

LOCK TABLES `staffs` WRITE;
/*!40000 ALTER TABLE `staffs` DISABLE KEYS */;
INSERT INTO `staffs` VALUES (1,'NieR:Automata Ver1.1a','Taro Yoko','Original Story','https://s4.anilist.co/file/anilistcdn/staff/large/n119171-lNfToqUsdk4q.png'),(2,'NieR:Automata Ver1.1a','Ryouji Masuyama','Director','https://s4.anilist.co/file/anilistcdn/staff/large/n100952-nG9Au8ShFy0K.png'),(3,'NieR:Automata Ver1.1a','Ryouji Masuyama','Series Composition','https://s4.anilist.co/file/anilistcdn/staff/large/n100952-nG9Au8ShFy0K.png'),(4,'NieR:Automata Ver1.1a','Taro Yoko','Series Composition','https://s4.anilist.co/file/anilistcdn/staff/large/n119171-lNfToqUsdk4q.png'),(5,'NieR:Automata Ver1.1a','Jun Nakai','Character Design','https://s4.anilist.co/file/anilistcdn/staff/large/n105131-nnnS7RJ0Xs8X.png'),(7,'NieR:Automata Ver1.1a','Shun Tachibana','Prop Design','images/noImage.png'),(8,'NieR:Automata Ver1.1a','Hirofumi Sakagami','Art Director','images/noImage.png'),(9,'NieR:Automata Ver1.1a','Takeyuki Takahashi','Art Design','images/noImage.png'),(11,'NieR:Automata Ver1.1a','Takahiro Mogi','Color Design','images/noImage.png'),(12,'NieR:Automata Ver1.1a','Toshiyuki Aoshima','Director of Photography','https://s4.anilist.co/file/anilistcdn/staff/large/n146397-fFEXxB8aWoWg.png'),(13,'Bungo Stray Dogs 4','Kafka Asagiri','Original Story','https://s4.anilist.co/file/anilistcdn/staff/large/n118665-AzXFA21ly7Fd.jpg'),(14,'Bungo Stray Dogs 4','Harukawa35','Original Character Design','https://s4.anilist.co/file/anilistcdn/staff/large/n118666-6kSVJE9ddARL.png'),(15,'Bungo Stray Dogs 4','Takuya Igarashi','Director','https://s4.anilist.co/file/anilistcdn/staff/large/n105087-aoj9RdnTaZ45.png'),(16,'Bungo Stray Dogs 4','Youji Enokido','Series Composition','https://s4.anilist.co/file/anilistcdn/staff/large/n100062-0V0Kqgk5Pvfg.png'),(17,'Bungo Stray Dogs 4','Nobuhiro Arai','Character Design','https://s4.anilist.co/file/anilistcdn/staff/large/n120002-riNrLvNU9tjw.png'),(18,'Bungo Stray Dogs 4','Fumihiro Katagai','Prop Design','https://s4.anilist.co/file/anilistcdn/staff/large/n119125-EkWsGrFPNmZW.jpg'),(19,'Bungo Stray Dogs 4','Motoi Sasaki','Title Logo Design','images/noImage.png'),(20,'Bungo Stray Dogs 4','Atsuko Suenaga','Assistance','images/noImage.png'),(21,'Bungo Stray Dogs 4','Itsuka Tanaka','Assistance','images/noImage.png'),(22,'MASHLE: MAGIC AND MUSCLES','Hajime Koumoto','Original Creator','https://s4.anilist.co/file/anilistcdn/staff/large/n158735-dHElQtmuMeeE.jpg'),(23,'MASHLE: MAGIC AND MUSCLES','Tomoya Tanaka','Director','images/noImage.png'),(24,'MASHLE: MAGIC AND MUSCLES','Yousuke Kuroda','Series Composition','https://s4.anilist.co/file/anilistcdn/staff/large/n97471-QakOe67tAErz.png'),(25,'MASHLE: MAGIC AND MUSCLES','Hiroaki Gouda','Action Director','https://s4.anilist.co/file/anilistcdn/staff/large/n105295-hc39TATg1Gb0.jpg'),(26,'MASHLE: MAGIC AND MUSCLES','Takeshi Matsuda','Action Director','https://s4.anilist.co/file/anilistcdn/staff/large/n155479-BVqcu8HVxkUk.png'),(27,'MASHLE: MAGIC AND MUSCLES','Hisashi Toujima','Character Design','images/noImage.png'),(28,'MASHLE: MAGIC AND MUSCLES','Saki Hisamatsu','Sub Character Design','images/noImage.png'),(29,'MASHLE: MAGIC AND MUSCLES','Nozomi Gotou','Sub Character Design','images/noImage.png'),(30,'MASHLE: MAGIC AND MUSCLES','Sayaka Takase','Prop Design','images/noImage.png'),(31,'MASHLE: MAGIC AND MUSCLES','Yusa Itou','Art Director','images/noImage.png'),(32,'MASHLE: MAGIC AND MUSCLES','Iho Narita','Art Design','images/noImage.png'),(33,'MASHLE: MAGIC AND MUSCLES','Hitoki Takeda','Color Design','images/noImage.png'),(34,'Vinland Saga Season 2','Makoto Yukimura','Original Creator','https://s4.anilist.co/file/anilistcdn/staff/large/n97034-MZ2ExmRHhXtb.png'),(35,'Vinland Saga Season 2','Shuuhei Yabuta','Director','https://s4.anilist.co/file/anilistcdn/staff/large/n120824-TzMTviKnvxaV.png'),(36,'Vinland Saga Season 2','Hiroshi Seko','Series Composition','https://s4.anilist.co/file/anilistcdn/staff/large/n99012-KLlG37WH3z7s.png'),(37,'Vinland Saga Season 2','Takahiko Abiru','Character Design','https://s4.anilist.co/file/anilistcdn/staff/large/n127038-OhFGEPtf3WYV.png'),(38,'Vinland Saga Season 2','Kensuke Itou','Assistance','images/noImage.png'),(39,'Vinland Saga Season 2','Akiko Kudou','Main Animator','images/noImage.png'),(40,'Vinland Saga Season 2','Yuusuke Takeda','Art Director','https://s4.anilist.co/file/anilistcdn/staff/large/n103102-aEjIrYuaUaVn.png'),(41,'Vinland Saga Season 2','Kentarou Oonuki','Assistant Art Director','images/noImage.png'),(42,'Vinland Saga Season 2','Tomoyuki Aoki','Art Design','images/noImage.png'),(43,'Vinland Saga Season 2','Yoshinori Shiozawa','Art Design','https://s4.anilist.co/file/anilistcdn/staff/large/n119826-WO3Ud2cdko8h.png'),(44,'Spy Classroom','Takemachi','Original Story','https://s4.anilist.co/file/anilistcdn/staff/large/n161408-BTNpzKOC6wxB.png'),(45,'Spy Classroom','Tomari','Original Character Design','https://s4.anilist.co/file/anilistcdn/staff/large/n138706-Akg029qjyUKH.png'),(46,'Spy Classroom','Keiichirou Kawaguchi','Director','https://s4.anilist.co/file/anilistcdn/staff/large/n101726-3oWUzDIyD80b.png'),(47,'Spy Classroom','Takashi Ikehata','Assistant Director','https://s4.anilist.co/file/anilistcdn/staff/large/n105429-Tv05dsQmkJdb.png'),(48,'Spy Classroom','Shinichi Inozume','Series Composition','images/noImage.png'),(49,'Spy Classroom','Hidetada Morioka','Literary Arts','images/noImage.png'),(50,'Spy Classroom','Sumie Kinoshita','Character Design','https://s4.anilist.co/file/anilistcdn/staff/large/n107387-pM6jiQNeEklt.png'),(51,'Spy Classroom','Kuniaki Masuda','Sub Character Design','https://s4.anilist.co/file/anilistcdn/staff/large/n152743-vD7Vus49t6eS.jpg'),(52,'Spy Classroom','Moyou Ichimatsu','Sub Character Design','images/noImage.png'),(53,'Spy Classroom','Gouichi Iwahata','Prop Design','images/noImage.png'),(54,'Spy Classroom','Noritaka Suzuki','Prop Design','images/noImage.png'),(55,'Oshi No Ko','Aka Akasaka','Original Story','https://s4.anilist.co/file/anilistcdn/staff/large/n97139-4XdvEiHyN8wl.png'),(56,'Oshi No Ko','Mengo Yokoyari','Original Character Design','https://s4.anilist.co/file/anilistcdn/staff/large/n108173-YHZTRx5lgRVx.png'),(57,'Oshi No Ko','Daisuke Hiramaki','Director','https://s4.anilist.co/file/anilistcdn/staff/large/n134794-Guo2PVhTyBBe.jpg'),(58,'Oshi No Ko','Ciao Nekotomi','Assistant Director','https://s4.anilist.co/file/anilistcdn/staff/large/n156946-rjBi4ekXC3Rx.jpg'),(59,'Oshi No Ko','Jin Tanaka','Series Composition','images/noImage.png'),(60,'Oshi No Ko','Kanna Hirayama','Character Design','https://s4.anilist.co/file/anilistcdn/staff/large/n131185-DZZmi9rbz3yg.jpg'),(61,'Oshi No Ko','Shun Sawai','Sub Character Design','https://s4.anilist.co/file/anilistcdn/staff/large/n159027-YSXHDJVBXsgn.jpg'),(62,'Oshi No Ko','Miki Matsumoto','Prop Design','https://s4.anilist.co/file/anilistcdn/staff/large/n125182-ZoXPl7cfmvXf.png'),(63,'Oshi No Ko','Nanami Hakoda','Prop Design','https://s4.anilist.co/file/anilistcdn/staff/large/n138267-6TB7m61ju7N3.jpg'),(64,'Oshi No Ko','Maho Yoshikawa','Costume Design','https://s4.anilist.co/file/anilistcdn/staff/large/n118786-5gqylhAKVZSh.jpg'),(65,'Oshi No Ko','Satomi Watanabe','Costume Design','https://s4.anilist.co/file/anilistcdn/staff/large/n142387-UFSnyv6WxyLi.png'),(66,'Oshi No Ko','Asami Hayakawa','Costume Design','https://s4.anilist.co/file/anilistcdn/staff/large/n146157-KijY7tsBVNUh.jpg'),(67,'JUJUTSU KAISEN Season 2','Gege Akutami','Original Creator','https://s4.anilist.co/file/anilistcdn/staff/large/n125415-B1o6NtIImcCK.png'),(68,'JUJUTSU KAISEN Season 2','Shouta Goshozono','Director','https://s4.anilist.co/file/anilistcdn/staff/large/n131334-rEv1Mta2RW4O.jpg'),(69,'JUJUTSU KAISEN Season 2','Ryouta Aikei','Assistant Director','https://s4.anilist.co/file/anilistcdn/staff/large/n146567-4F3EHCAGrn7e.jpg'),(70,'JUJUTSU KAISEN Season 2','Hiroshi Seko','Series Composition','https://s4.anilist.co/file/anilistcdn/staff/large/n99012-KLlG37WH3z7s.png'),(71,'JUJUTSU KAISEN Season 2','Tadashi Hiramatsu','Character Design','https://s4.anilist.co/file/anilistcdn/staff/large/n101185-CJLT9YKxSDZC.png'),(72,'JUJUTSU KAISEN Season 2','Sayaka Koiso','Character Design','https://s4.anilist.co/file/anilistcdn/staff/large/n120024-g5RY265qAjLz.png'),(73,'JUJUTSU KAISEN Season 2','Mitsue Mori','Sub Character Design','images/noImage.png'),(74,'JUJUTSU KAISEN Season 2','Mariko Kawamoto','Prop Design','https://s4.anilist.co/file/anilistcdn/staff/large/n161941-pnepHcEcFhXX.jpg'),(75,'JUJUTSU KAISEN Season 2','Emi Yamazaki','Costume Design','images/noImage.png'),(76,'JUJUTSU KAISEN Season 2','Tatsuo Ishino','Title Logo Design','images/noImage.png');
/*!40000 ALTER TABLE `staffs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `studios`
--

DROP TABLE IF EXISTS `studios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `studios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `anime_name` varchar(255) DEFAULT NULL,
  `studio` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `anime_name7_idx` (`anime_name`),
  CONSTRAINT `anime_name7` FOREIGN KEY (`anime_name`) REFERENCES `anime_info` (`anime_name`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studios`
--

LOCK TABLES `studios` WRITE;
/*!40000 ALTER TABLE `studios` DISABLE KEYS */;
INSERT INTO `studios` VALUES (2,'NieR:Automata Ver1.1a','A-1 Pictures'),(3,'Bungo Stray Dogs 4','bones'),(4,'MASHLE: MAGIC AND MUSCLES','A-1 Pictures'),(13,'Vinland Saga Season 2','MAPPA'),(16,'Spy Classroom','feel.'),(17,'Oshi No Ko','Doga Kobo'),(18,'JUJUTSU KAISEN Season 2','MAPPA');
/*!40000 ALTER TABLE `studios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trailers`
--

DROP TABLE IF EXISTS `trailers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trailers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `anime_name` varchar(255) DEFAULT NULL,
  `trailer` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `anime_name6_idx` (`anime_name`),
  CONSTRAINT `anime_name6` FOREIGN KEY (`anime_name`) REFERENCES `anime_info` (`anime_name`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trailers`
--

LOCK TABLES `trailers` WRITE;
/*!40000 ALTER TABLE `trailers` DISABLE KEYS */;
INSERT INTO `trailers` VALUES (1,'bungo stray dogs 4','https://www.youtube.com/embed/u3G5C_sEjgc'),(2,'MASHLE: MAGIC AND MUSCLES','https://www.youtube.com/embed/_ce5_P1Hj5A'),(3,'MASHLE: MAGIC AND MUSCLES','https://www.youtube.com/embed/AwQJLqJAUBI'),(4,'NieR:Automata Ver1.1a','https://www.youtube.com/embed/-J9fTPgJbBM'),(5,'NieR:Automata Ver1.1a','https://www.youtube.com/embed/hlP8Bl_YCdw'),(6,'Vinland Saga Season 2','https://www.youtube.com/embed/GY2UAAn8mmo'),(7,'Vinland Saga Season 2','https://www.youtube.com/embed/jBetoIlnDIM'),(8,'Spy Classroom','https://www.youtube.com/embed/wJs33BVeAaU'),(10,'Oshi No Ko','https://www.youtube.com/embed/zntY4A4GPU0'),(11,'Oshi No Ko','https://www.youtube.com/embed/sqTpe5KobnA'),(12,'JUJUTSU KAISEN Season 2','https://www.youtube.com/embed/muSr2NVs1oM');
/*!40000 ALTER TABLE `trailers` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-07  2:13:54
