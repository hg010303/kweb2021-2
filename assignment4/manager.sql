CREATE TABLE `users` (
    `ID` int not null,
    `passwd` int not null,
    `nickname` varchar(20) not null,
    `profile_img` varchar(50) not null,
    `profile_msg` varchar(50) not null,
    `is_withdraw` tinyint not null default(0),
    `reg_date` date not null,
    primary key(`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `channels` (
    `name` varchar(20) not null,
    `user_ID` int not null,
    `channel_link` varchar(50) not null,
    `max_people` int not null,
    `is_withdraw` tinyint not null default(0),
    `create_date` date not null,
    primary key(`name`),
    foreign key(`user_ID`) references `users`(`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
create TABLE `chats` (
    `ID` int not null AUTO_INCREMENT,
    `contents` varchar(50) not null,
    `user_ID` int not null,
    `channel` varchar(20) not null,
    `chatting_date` date not null,
    primary key(`ID`),
    foreign key(`user_ID`) references `users`(`ID`),
    foreign key(`channel`) references `channels`(`name`)
)  ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `follows` (
    `follower` int not null,
    `followee` int not null,
    `follow_date` date not null,
    primary key(`follower`,`followee`),
    foreign key(`follower`) references `users`(`ID`),
    foreign key(`followee`) references `users`(`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `blocks` (
    `blocker` int not null,
    `blockee` int not null,
    `block_date` date not null,
    primary key(`blocker`,`blockee`),
    foreign key(`blocker`) references `users`(`ID`),
    foreign key(`blockee`) references `users`(`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
