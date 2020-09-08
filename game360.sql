-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2020-07-30 06:59:44
-- 服务器版本： 10.1.28-MariaDB
-- PHP Version: 5.6.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `game360`
--

-- --------------------------------------------------------

--
-- 表的结构 `addr`
--

CREATE TABLE `addr` (
  `aid` int(11) NOT NULL,
  `pname` varchar(10) DEFAULT NULL,
  `addr` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `addr`
--

INSERT INTO `addr` (`aid`, `pname`, `addr`) VALUES
(1, '神座', 'shenzuo.html');

-- --------------------------------------------------------

--
-- 表的结构 `allimage`
--

CREATE TABLE `allimage` (
  `pid` int(11) NOT NULL,
  `avatar` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `allimage`
--

INSERT INTO `allimage` (`pid`, `avatar`) VALUES
(1, './images/allgame/all (1).jpg'),
(2, './images/allgame/all (2).jpg'),
(3, './images/allgame/all (3).jpg'),
(4, './images/allgame/all (4).jpg'),
(5, './images/allgame/all (5).jpg'),
(6, './images/allgame/all (6).jpg'),
(7, './images/allgame/all (7).jpg'),
(8, './images/allgame/all (8).jpg'),
(9, './images/allgame/all (9).jpg'),
(10, './images/allgame/all (10).jpg'),
(11, './images/allgame/all (11).jpg'),
(12, './images/allgame/all (12).jpg'),
(13, './images/allgame/all (13).jpg'),
(14, './images/allgame/all (14).jpg'),
(15, './images/allgame/all (15).jpg'),
(16, './images/allgame/all (16).jpg'),
(17, './images/allgame/all (17).jpg'),
(18, './images/allgame/all (18).jpg'),
(19, './images/allgame/all (19).jpg'),
(20, './images/allgame/all (20).jpg'),
(21, './images/allgame/all (21).jpg'),
(22, './images/allgame/all (22).jpg'),
(23, './images/allgame/all (23).jpg'),
(24, './images/allgame/all (24).jpg'),
(25, './images/allgame/all (25).jpg'),
(26, './images/allgame/all (26).jpg'),
(27, './images/allgame/all (27).jpg'),
(28, './images/allgame/all (28).jpg');

-- --------------------------------------------------------

--
-- 表的结构 `g_user`
--

CREATE TABLE `g_user` (
  `gid` int(11) NOT NULL,
  `g_uname` varchar(50) DEFAULT NULL,
  `g_upwd` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `g_user`
--

INSERT INTO `g_user` (`gid`, `g_uname`, `g_upwd`) VALUES
(1, 'coin', '123456'),
(2, 'yy', '12345678');

-- --------------------------------------------------------

--
-- 表的结构 `hotorder`
--

CREATE TABLE `hotorder` (
  `pid` int(11) NOT NULL,
  `avatar` varchar(50) DEFAULT NULL,
  `name` varchar(10) DEFAULT NULL,
  `type` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `hotorder`
--

INSERT INTO `hotorder` (`pid`, `avatar`, `name`, `type`) VALUES
(1, './images/hotorder/order1.jpg', '神魔传说', '角色扮演'),
(2, './images/hotorder/order2.jpg', '三国群英传一统天下', '战争策略'),
(3, './images/hotorder/order3.jpg', '热血战歌', '角色扮演'),
(4, './images/hotorder/order4.jpg', '神座', '角色扮演'),
(5, './images/hotorder/order5.jpg', '莽荒纪2', '角色扮演'),
(6, './images/hotorder/order6.jpg', '斗罗大陆', '角色扮演'),
(7, './images/hotorder/order7.jpg', '攻城掠地', '战争策略'),
(8, './images/hotorder/order8.jpg', '魔域觉醒', '角色扮演'),
(9, './images/hotorder/order9.jpg', '七战', '角色扮演'),
(10, './images/hotorder/order10.jpg', '圣火明尊-超变版', '战争策略'),
(11, './images/hotorder/order11.jpg', '炎黄大陆-超变版', '角色扮演'),
(12, './images/hotorder/order12.jpg', '哈灵斗地主', '卡牌'),
(13, './images/hotorder/order13.jpg', '焚仙怒', '角色扮演'),
(14, './images/hotorder/order14.jpg', '神道-超变版', '角色扮演'),
(15, './images/hotorder/order15.jpg', '拖拉机H5', '棋盘天地'),
(16, './images/hotorder/order16.jpg', '卓越传说H5', '角色扮演'),
(17, './images/hotorder/order17.jpg', '捕鱼达人千炮版H5', '棋盘天地'),
(18, './images/hotorder/order18.jpg', '九州仙剑转H5', '角色扮演'),
(19, './images/hotorder/order19.jpg', '仙境传说之复兴H5', '角色扮演'),
(20, './images/hotorder/order20.jpg', '名酱三国H5', '卡牌');

-- --------------------------------------------------------

--
-- 表的结构 `mygame`
--

CREATE TABLE `mygame` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `gpicture` varchar(100) DEFAULT NULL,
  `area` varchar(50) DEFAULT NULL,
  `gname` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `mygame`
--

INSERT INTO `mygame` (`id`, `name`, `gpicture`, `area`, `gname`) VALUES
(1, 'coin', './images/mygame/sz.jpg', '正式1134服', '神座'),
(2, 'coin', './images/mygame/hqg.jpg', '【花千骨86服】', '花千骨重置版'),
(3, 'coin', './images/mygame/js.jpg', '正式1001服', '剑世'),
(4, 'coin', './images/mygame/7z.jpg', '正式1008服', '七战'),
(5, 'coin', './images/mygame/smcs.jpg', '公测1072服', '神魔传说'),
(6, 'coin', './images/mygame/wsc.jpg', '双线15区', '武圣传'),
(7, 'coin', './images/mygame/myjx.jpg', '魔域先锋133服', '魔域先锋');

-- --------------------------------------------------------

--
-- 表的结构 `newlist`
--

CREATE TABLE `newlist` (
  `pid` int(11) NOT NULL,
  `avatar` varchar(50) DEFAULT NULL,
  `name` varchar(10) DEFAULT NULL,
  `type` varchar(10) DEFAULT NULL,
  `time` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `newlist`
--

INSERT INTO `newlist` (`pid`, `avatar`, `name`, `type`, `time`) VALUES
(1, './images/newlist/list1.jpg', '神王', '角色扮演', '06/04'),
(2, './images/newlist/list2.jpg', '妖神Ⅱ伏妖', '角色扮演', '05/21'),
(3, './images/newlist/list3.jpg', '魔域觉醒', '角色扮演', '05/11'),
(4, './images/newlist/list4.jpg', '花千骨重制版', '角色扮演', '04/29'),
(5, './images/newlist/list5.jpg', '大都督', '战争策略', '04/23'),
(6, './images/newlist/list6.jpg', '莽荒纪2', '角色扮演', '04/21');

-- --------------------------------------------------------

--
-- 表的结构 `picture`
--

CREATE TABLE `picture` (
  `pid` int(11) NOT NULL,
  `avatar` varchar(50) DEFAULT NULL,
  `name` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `picture`
--

INSERT INTO `picture` (`pid`, `avatar`, `name`) VALUES
(1, './banner/banner1.jpg', '莽荒纪||'),
(2, './banner/banner2.jpg', '斗罗大陆'),
(3, './banner/banner3.jpg', '剑世'),
(4, './banner/banner4.jpg', '神魔传说'),
(5, './banner/banner5.jpg', '神座'),
(6, './images/recommend/rec1.jpg', '神魔传说'),
(7, './images/recommend/rec2.jpg', '神王'),
(8, './images/recommend/rec3.jpg', '三国群英传一统天下'),
(9, './images/recommend/rec4.jpg', '神座'),
(10, './images/recommend/rec5.jpg', '斗罗大陆'),
(11, './images/recommend/rec6.jpg', '七战'),
(12, './images/recommend/rec7.jpg', '斗罗大陆'),
(13, './images/recommend/rec8.jpg', '烈斩'),
(14, './images/recommend/rec9.jpg', '神戒'),
(15, './images/recommend/rec10.jpg', '热血战歌'),
(16, './images/hotgame/hot1.jpg', '神座'),
(17, './images/hotgame/hot2.jpg', '莽荒纪||'),
(18, './images/hotgame/hot3.jpg', '神魔传说'),
(19, './images/hotgame/hot4.jpg', '魔域觉醒'),
(20, './images/hotgame/hot5.jpg', '仙境传说'),
(21, './images/hotgame/hot6.jpg', '九州仙剑转'),
(22, './images/hotgame/hot7.jpg', '卓越传说'),
(23, './images/hotgame/hot8.jpg', '西游女儿国'),
(24, './images/phonegame/phone1.jpg', '天仙变'),
(25, './images/phonegame/phone2.jpg', '山海云痕'),
(26, './images/phonegame/phone3.jpg', '剑傲遮天'),
(27, './images/phonegame/phone4.jpg', '仙境传说'),
(28, './images/phonegame/phone5.jpg', '名酱三国'),
(29, './images/phonegame/phone6.jpg', '卓越传说'),
(30, './images/phonegame/phone7.jpg', '剑荡江湖'),
(31, './images/phonegame/phone8.jpg', '魔界战记'),
(32, './images/newgame/ng1.jpg', '神王'),
(33, './images/newgame/ng2.jpg', '妖神2'),
(34, './images/newgame/ng3.jpg', '花千骨重置版'),
(35, './images/newgame/ng4.jpg', '魔域觉醒'),
(36, './images/newgame/ng5.jpg', '大都督'),
(37, './images/newgame/ng6.jpg', '莽荒纪2'),
(38, './images/newgame/ng7.jpg', '九州仙剑转'),
(39, './images/newgame/ng8.jpg', '三国演义'),
(40, './images/newgame/ng9.jpg', '魔仙记'),
(41, './images/newgame/ng10.jpg', '七战'),
(42, './images/active/active1.jpg', '神座'),
(43, './images/active/active2.jpg', '热血战歌'),
(44, './images/active/active3.jpg', '战神'),
(45, './images/active/active4.jpg', '妖神||'),
(46, './images/active/active5.jpg', '斗罗大陆'),
(47, './images/active/active6.jpg', '神魔传说'),
(48, './images/active/active7.jpg', '莽荒纪||'),
(49, './images/active/active8.png', '炎黄大陆'),
(50, './images/active/active9.jpg', '大圣'),
(51, './images/active/active10.jpg', '三国演义');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addr`
--
ALTER TABLE `addr`
  ADD PRIMARY KEY (`aid`),
  ADD UNIQUE KEY `pname` (`pname`),
  ADD UNIQUE KEY `addr` (`addr`);

--
-- Indexes for table `allimage`
--
ALTER TABLE `allimage`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `g_user`
--
ALTER TABLE `g_user`
  ADD PRIMARY KEY (`gid`),
  ADD UNIQUE KEY `g_uname` (`g_uname`);

--
-- Indexes for table `hotorder`
--
ALTER TABLE `hotorder`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `mygame`
--
ALTER TABLE `mygame`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `newlist`
--
ALTER TABLE `newlist`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `picture`
--
ALTER TABLE `picture`
  ADD PRIMARY KEY (`pid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `addr`
--
ALTER TABLE `addr`
  MODIFY `aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用表AUTO_INCREMENT `allimage`
--
ALTER TABLE `allimage`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- 使用表AUTO_INCREMENT `g_user`
--
ALTER TABLE `g_user`
  MODIFY `gid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `hotorder`
--
ALTER TABLE `hotorder`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- 使用表AUTO_INCREMENT `mygame`
--
ALTER TABLE `mygame`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- 使用表AUTO_INCREMENT `newlist`
--
ALTER TABLE `newlist`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- 使用表AUTO_INCREMENT `picture`
--
ALTER TABLE `picture`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
