-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-01-14 11:02:50
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `user`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(10) NOT NULL,
  `img` text NOT NULL,
  `title` text NOT NULL,
  `detail` text NOT NULL,
  `price` varchar(8) NOT NULL,
  `color` varchar(100) NOT NULL,
  `num` varchar(10) NOT NULL,
  `store` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `img`, `title`, `detail`, `price`, `color`, `num`, `store`) VALUES
(1, 'https://res.vmallres.com/pimages//product/6901443265565/group//800_800_1540802841394.png', '华为无线充电器（Max 15W）黑色', '每天10:08限量销售    15W充电更快；QI标准兼容更多；多重保护更安心；简约设计更便携；', '99.00', '标准版 白色', '1', '800'),
(4, 'https://res.vmallres.com/pimages//product/GB3102150050501/428_428_1544150379138mp.png', '绿联 高清投屏转换器 Type-c转hdmi智能拓展坞', '支持华为Type-c接口matebook/mate20/p20系列大屏投影 小巧便捷', '179.00', '深空灰', '2', '321'),
(3, 'https://res.vmallres.com/pimages//product/6901443270385/800_800_1545268730575mp.png', '荣耀FlyPods青春版 真无线耳机（铃兰白）', '新品！下单立减30元，到手价369元！享3/6期分期免息，购机晒单赢好礼，并赠送双倍积分（积分可抵现） 双击触控，降噪通话，12小时聆听。', '399.00', '铃兰白 / 青春版', '3', '888'),
(2, 'https://res.vmallres.com/pimages//product/6901443252824/800_800_1543305800521mp.png', '华为安居智能摄像机（白色）', '1080P高清，360度全景视角，双向高清通话，多重安全保护，华为海思芯片，历时一年华为精心打造更多功能助您守护爱家', '299.00', '白色 / 全景版', '1', '233');

-- --------------------------------------------------------

--
-- 表的结构 `user_1809`
--

CREATE TABLE `user_1809` (
  `user_id` int(10) NOT NULL COMMENT '用户id',
  `user_name` varchar(20) DEFAULT NULL,
  `user_age` varchar(20) DEFAULT NULL,
  `user_gender` varchar(20) DEFAULT NULL,
  `user_password` varchar(20) DEFAULT NULL,
  `user_email` varchar(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user_1809`
--

INSERT INTO `user_1809` (`user_id`, `user_name`, `user_age`, `user_gender`, `user_password`, `user_email`) VALUES
(10059, 'mm', NULL, NULL, '123456', NULL),
(10058, 'steins gate', NULL, NULL, '123456', NULL),
(10026, 'steins', 'fda', 'nv', '123456', '123456'),
(10027, 'Chritina', '20', '15645', '123465', '21315'),
(10028, 'lisi', '24', 'nj', '456789', '12456789'),
(10029, 'Ailisi', '12', '1568', '586', '46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_1809`
--
ALTER TABLE `user_1809`
  ADD PRIMARY KEY (`user_id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- 使用表AUTO_INCREMENT `user_1809`
--
ALTER TABLE `user_1809`
  MODIFY `user_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '用户id', AUTO_INCREMENT=10060;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
