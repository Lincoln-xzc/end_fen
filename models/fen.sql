/*
Navicat MySQL Data Transfer

Source Server         : xzc
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : fen

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2016-10-28 21:46:11
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `f_contents`
-- ----------------------------
DROP TABLE IF EXISTS `f_contents`;
CREATE TABLE `f_contents` (
  `id` varchar(255) NOT NULL,
  `imageId` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` varchar(4000) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `tip` varchar(255) DEFAULT NULL,
  `create_time` date DEFAULT NULL,
  `create_name` varchar(255) DEFAULT NULL,
  `update_time` date DEFAULT NULL,
  `update_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of f_contents
-- ----------------------------
INSERT INTO `f_contents` VALUES ('02c861e0-9539-11e6-b3f3-c3e3427633b0', '1e95f7b0-9517-11e6-a2b0-a3291effc0f2', '首页产品中心', '<p>首页产品中心</p>', 'home', 'center', '2016-10-18', 'author', '2016-10-18', 'author');
INSERT INTO `f_contents` VALUES ('10ab3220-95ab-11e6-a8d6-033fa350c810', '014eb2a0-9517-11e6-a2b0-a3291effc0f2', '产品中心', '<p>产品中心</p>', 'center', null, '2016-10-19', 'author', null, null);
INSERT INTO `f_contents` VALUES ('14577810-9539-11e6-b3f3-c3e3427633b0', '1e95f7b0-9517-11e6-a2b0-a3291effc0f2', '首页产品中心', '<p>首页产品中心</p>', 'home', 'center', '2016-10-18', 'author', '2016-10-18', 'author');
INSERT INTO `f_contents` VALUES ('1ddf5970-9539-11e6-b3f3-c3e3427633b0', '1e95f7b0-9517-11e6-a2b0-a3291effc0f2', '首页产品中心', '<p>首页产品中心</p>', 'home', 'center', '2016-10-18', 'author', '2016-10-18', 'author');
INSERT INTO `f_contents` VALUES ('25f7f360-9539-11e6-b3f3-c3e3427633b0', '1e95f7b0-9517-11e6-a2b0-a3291effc0f2', '首页产品中心', '<p>首页产品中心</p>', 'home', 'center', '2016-10-18', 'author', '2016-10-18', 'author');
INSERT INTO `f_contents` VALUES ('2f7087f0-9538-11e6-b3f3-c3e3427633b0', '014d5310-9517-11e6-a2b0-a3291effc0f2', '首页轮播', '<p>首页轮播</p>', 'home', 'carousel', '2016-10-18', 'author', '2016-10-18', 'author');
INSERT INTO `f_contents` VALUES ('38b56ce0-9538-11e6-b3f3-c3e3427633b0', '014e1660-9517-11e6-a2b0-a3291effc0f2', '首页轮播', '<p>首页轮播</p>', 'home', 'carousel', '2016-10-18', 'author', '2016-10-18', 'author');
INSERT INTO `f_contents` VALUES ('416823f0-9538-11e6-b3f3-c3e3427633b0', '014e3d70-9517-11e6-a2b0-a3291effc0f2', '首页轮播', '<p>首页轮播</p>', 'home', 'carousel', '2016-10-18', 'author', '2016-10-18', 'author');
INSERT INTO `f_contents` VALUES ('5b5e4cc0-9539-11e6-b3f3-c3e3427633b0', '1e95f7b0-9517-11e6-a2b0-a3291effc0f2', '首页企业动态', '<p>首页企业动态</p>', 'home', 'message', '2016-10-18', 'author', '2016-10-20', 'author');
INSERT INTO `f_contents` VALUES ('607e1910-9539-11e6-b3f3-c3e3427633b0', '1e95f7b0-9517-11e6-a2b0-a3291effc0f2', '首页企业动态', '<p>首页企业动态</p>', 'home', 'message', '2016-10-18', 'author', '2016-10-20', 'author');
INSERT INTO `f_contents` VALUES ('66e9c650-9539-11e6-b3f3-c3e3427633b0', '1e95f7b0-9517-11e6-a2b0-a3291effc0f2', '首页企业动态', '<p>首页企业动态</p>', 'home', 'message', '2016-10-18', 'author', '2016-10-20', 'author');
INSERT INTO `f_contents` VALUES ('6d144be0-9539-11e6-b3f3-c3e3427633b0', '1e95f7b0-9517-11e6-a2b0-a3291effc0f2', '首页企业动态', '<p>首页企业动态</p>', 'home', 'message', '2016-10-18', 'author', '2016-10-20', 'author');
INSERT INTO `f_contents` VALUES ('72424900-9539-11e6-b3f3-c3e3427633b0', '1e95f7b0-9517-11e6-a2b0-a3291effc0f2', '首页企业动态', '<p>首页企业动态</p>', 'home', 'message', '2016-10-18', 'author', '2016-10-20', 'author');
INSERT INTO `f_contents` VALUES ('76a0e830-9539-11e6-b3f3-c3e3427633b0', '1e95f7b0-9517-11e6-a2b0-a3291effc0f2', '首页企业动态', '<p>首页企业动态</p>', 'home', 'message', '2016-10-18', 'author', '2016-10-20', 'author');
INSERT INTO `f_contents` VALUES ('8614bf80-9539-11e6-b3f3-c3e3427633b0', '1e95f7b0-9517-11e6-a2b0-a3291effc0f2', '首页企业动态', '<p>首页企业动态</p>', 'home', 'message', '2016-10-18', 'author', '2016-10-20', 'author');
INSERT INTO `f_contents` VALUES ('8af90970-9539-11e6-b3f3-c3e3427633b0', '1e95f7b0-9517-11e6-a2b0-a3291effc0f2', '首页企业动态', '<p>首页企业动态</p>', 'home', 'message', '2016-10-18', 'author', '2016-10-20', 'author');
INSERT INTO `f_contents` VALUES ('93434fb0-96c3-11e6-a484-8fdfe7fa78ff', '1ea69982-9517-11e6-a2b0-a3291effc0f2', '​吃货来跟你聊聊禾谷渔粉鱼汤的奥秘', '<p><a href=\"http://localhost:8090/cultural/dynamic/detail\" style=\"box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(162, 162, 162); text-decoration: none; font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; white-space: normal;\"><span style=\"box-sizing: border-box;\">吃货来跟你聊聊禾谷渔粉鱼汤的奥秘</span></a></p>', 'cultural', 'dynamic', '2016-10-20', 'author', '2016-10-20', 'author');
INSERT INTO `f_contents` VALUES ('94a24af0-9538-11e6-b3f3-c3e3427633b0', '014eb2a0-9517-11e6-a2b0-a3291effc0f2', '首页轮播', '<p>首页轮播</p>', 'home', 'carousel', '2016-10-18', 'author', '2016-10-20', 'author');
INSERT INTO `f_contents` VALUES ('9b3a30d0-96c3-11e6-a484-8fdfe7fa78ff', '1e95f7b0-9517-11e6-a2b0-a3291effc0f2', '​吃货来跟你聊聊禾谷渔粉鱼汤的奥秘', '<p><a href=\"http://localhost:8090/cultural/dynamic/detail\" style=\"white-space: normal; box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(162, 162, 162); text-decoration: none; font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px;\"><span style=\"box-sizing: border-box;\">吃货来跟你聊聊禾谷渔粉鱼汤的奥秘</span></a></p>', 'cultural', 'dynamic', '2016-10-20', 'author', '2016-10-20', 'author');
INSERT INTO `f_contents` VALUES ('9e8ff300-9538-11e6-b3f3-c3e3427633b0', '014f75f0-9517-11e6-a2b0-a3291effc0f2', '首页轮播', '<p>首页轮播</p>', 'home', 'carousel', '2016-10-18', 'author', '2016-10-20', 'author');
INSERT INTO `f_contents` VALUES ('a042b6a0-9539-11e6-b3f3-c3e3427633b0', '1e9868b0-9517-11e6-a2b0-a3291effc0f2', '企业实力', '<p>企业实力</p>', 'introduction', 'short', '2016-10-18', 'author', '2016-10-20', 'author');
INSERT INTO `f_contents` VALUES ('b6891350-9539-11e6-b3f3-c3e3427633b0', '1ea7f910-9517-11e6-a2b0-a3291effc0f2', '企业实力', '<p>企业实力</p>', 'introduction', 'honor', '2016-10-18', 'author', '2016-10-20', 'author');
INSERT INTO `f_contents` VALUES ('c688ebf0-96c3-11e6-a484-8fdfe7fa78ff', '014eb2a0-9517-11e6-a2b0-a3291effc0f2', '​吃货来跟你聊聊禾谷渔粉鱼汤的奥秘', '<p><a href=\"http://localhost:8090/cultural/dynamic/detail\" style=\"white-space: normal; box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(162, 162, 162); text-decoration: none; font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px;\"><span style=\"box-sizing: border-box;\">吃货来跟你聊聊禾谷渔粉鱼汤的奥秘</span></a></p>', 'cultural', 'news', '2016-10-20', 'author', '2016-10-20', 'author');
INSERT INTO `f_contents` VALUES ('cfebe7b0-9538-11e6-b3f3-c3e3427633b0', '014d5310-9517-11e6-a2b0-a3291effc0f2', '企业文化', '<p style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 10px; color: rgb(51, 51, 51); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\">禾谷渔粉在继承传统鱼粉好吃。</p>', 'home', 'cultural', '2016-10-18', 'author', null, null);
INSERT INTO `f_contents` VALUES ('d0f9f4d0-96c3-11e6-a484-8fdfe7fa78ff', '014f75f0-9517-11e6-a2b0-a3291effc0f2', '​吃货来跟你聊聊禾谷渔粉鱼汤的奥秘', '<p><a href=\"http://localhost:8090/cultural/dynamic/detail\" style=\"white-space: normal; box-sizing: border-box; background-color: rgb(255, 255, 255); color: rgb(162, 162, 162); text-decoration: none; font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px;\"><span style=\"box-sizing: border-box;\">吃货来跟你聊聊禾谷渔粉鱼汤的奥秘</span></a></p>', 'cultural', 'news', '2016-10-20', 'author', '2016-10-20', 'author');
INSERT INTO `f_contents` VALUES ('d4601540-9539-11e6-b3f3-c3e3427633b0', '1e9868b0-9517-11e6-a2b0-a3291effc0f2', '企业文化', '<p><span style=\"color: rgb(142, 142, 142); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 14px; text-align: center; background-color: rgb(255, 255, 255);\">我们拥有十余年连锁经营的成功经验，在业界具有极高的平高知名度及美誉度。</span></p>', 'introduction', 'culture', '2016-10-18', 'author', '2016-10-20', 'author');
INSERT INTO `f_contents` VALUES ('e6103d70-9538-11e6-b3f3-c3e3427633b0', '1e95f7b0-9517-11e6-a2b0-a3291effc0f2', '首页产品中心', '<p>首页产品中心</p>', 'home', 'center', '2016-10-18', 'author', '2016-10-20', 'author');
INSERT INTO `f_contents` VALUES ('eef06d20-9538-11e6-b3f3-c3e3427633b0', '1e95f7b0-9517-11e6-a2b0-a3291effc0f2', '首页产品中心', '<p>首页产品中心</p>', 'home', 'center', '2016-10-18', 'author', '2016-10-20', 'author');
INSERT INTO `f_contents` VALUES ('f60b9440-9538-11e6-b3f3-c3e3427633b0', '1e95f7b0-9517-11e6-a2b0-a3291effc0f2', '首页产品中心', '<p>首页产品中心</p>', 'home', 'center', '2016-10-18', 'author', '2016-10-20', 'author');
INSERT INTO `f_contents` VALUES ('fca560f0-9539-11e6-b3f3-c3e3427633b0', '1ea69982-9517-11e6-a2b0-a3291effc0f2', '加工过程', null, 'product', 'process', '2016-10-18', 'author', '2016-10-20', 'author');
INSERT INTO `f_contents` VALUES ('fdfecbe0-9538-11e6-b3f3-c3e3427633b0', '1e95f7b0-9517-11e6-a2b0-a3291effc0f2', '首页产品中心', '<p>首页产品中心</p>', 'home', 'center', '2016-10-18', 'author', '2016-10-20', 'author');

-- ----------------------------
-- Table structure for `f_images`
-- ----------------------------
DROP TABLE IF EXISTS `f_images`;
CREATE TABLE `f_images` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `size` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `upload_time` date DEFAULT NULL,
  `upload_name` varchar(255) DEFAULT NULL,
  `update_time` date DEFAULT NULL,
  `update_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of f_images
-- ----------------------------
INSERT INTO `f_images` VALUES ('014d5310-9517-11e6-a2b0-a3291effc0f2', '五谷', 'E:\\nodejs_workspce\\end_fen\\public\\upload\\1476783671967.jpg', '161621', 'image/jpeg', '2016-10-18', 'author', '2016-10-19', 'author');
INSERT INTO `f_images` VALUES ('014e1660-9517-11e6-a2b0-a3291effc0f2', '美食', 'E:\\nodejs_workspce\\end_fen\\public\\upload\\1476783672003.jpg', '303261', 'image/jpeg', '2016-10-18', 'author', '2016-10-19', 'author');
INSERT INTO `f_images` VALUES ('014e3d70-9517-11e6-a2b0-a3291effc0f2', '首页', 'E:\\nodejs_workspce\\end_fen\\public\\upload\\1476783672005.jpg', '260435', 'image/jpeg', '2016-10-18', 'author', '2016-10-19', 'author');
INSERT INTO `f_images` VALUES ('014eb2a0-9517-11e6-a2b0-a3291effc0f2', '1476783672008.jpg', 'E:\\nodejs_workspce\\end_fen\\public\\upload\\1476783672008.jpg', '495730', 'image/jpeg', '2016-10-18', 'author', null, null);
INSERT INTO `f_images` VALUES ('014f75f0-9517-11e6-a2b0-a3291effc0f2', '1476783672014.jpg', 'E:\\nodejs_workspce\\end_fen\\public\\upload\\1476783672014.jpg', '1073802', 'image/jpeg', '2016-10-18', 'author', null, null);
INSERT INTO `f_images` VALUES ('1e95f7b0-9517-11e6-a2b0-a3291effc0f2', '1476783721125.jpg', 'E:\\nodejs_workspce\\end_fen\\public\\upload\\1476783721125.jpg', '80822', 'image/jpeg', '2016-10-18', 'author', null, null);
INSERT INTO `f_images` VALUES ('1e9868b0-9517-11e6-a2b0-a3291effc0f2', '1476783721135.jpg', 'E:\\nodejs_workspce\\end_fen\\public\\upload\\1476783721135.jpg', '40163', 'image/jpeg', '2016-10-18', 'author', null, null);
INSERT INTO `f_images` VALUES ('1ea69981-9517-11e6-a2b0-a3291effc0f2', '1476783721239.jpg', 'E:\\nodejs_workspce\\end_fen\\public\\upload\\1476783721239.jpg', '33951', 'image/jpeg', '2016-10-18', 'author', null, null);
INSERT INTO `f_images` VALUES ('1ea69982-9517-11e6-a2b0-a3291effc0f2', '1476783721239.jpg', 'E:\\nodejs_workspce\\end_fen\\public\\upload\\1476783721239.jpg', '82119', 'image/jpeg', '2016-10-18', 'author', null, null);
INSERT INTO `f_images` VALUES ('1ea7f910-9517-11e6-a2b0-a3291effc0f2', '1476783721248.jpg', 'E:\\nodejs_workspce\\end_fen\\public\\upload\\1476783721248.jpg', '803297', 'image/jpeg', '2016-10-18', 'author', null, null);

-- ----------------------------
-- Table structure for `f_lmessage`
-- ----------------------------
DROP TABLE IF EXISTS `f_lmessage`;
CREATE TABLE `f_lmessage` (
  `id` varchar(255) NOT NULL,
  `mobile` varchar(255) NOT NULL,
  `content` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of f_lmessage
-- ----------------------------

-- ----------------------------
-- Table structure for `f_main`
-- ----------------------------
DROP TABLE IF EXISTS `f_main`;
CREATE TABLE `f_main` (
  `id` varchar(255) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `recommand` varchar(255) DEFAULT NULL,
  `create_time` date DEFAULT NULL,
  `update_time` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of f_main
-- ----------------------------

-- ----------------------------
-- Table structure for `f_user`
-- ----------------------------
DROP TABLE IF EXISTS `f_user`;
CREATE TABLE `f_user` (
  `id` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `login_time` date DEFAULT NULL,
  `create_time` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of f_user
-- ----------------------------
INSERT INTO `f_user` VALUES ('227b5a70-9141-11e6-be66-f7e51f2fc073', '0.42759784730324046', 'Lincoln', '12345656', null, '2016-10-13');
INSERT INTO `f_user` VALUES ('33c93ef0-8098-11e6-a16f-935373f3282e', '0.34504027221972233', 'xzc', '12345678', null, '2016-09-22');
