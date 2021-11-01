create table student(
    `name` varchar(20) not null,
    `year` int not null,
    `major_num` int not null,
    `student_num` int not null,
    `phone_num` int not null,
    `address` varchar(50) not null,
    `credits` int default 0,
    `avg_score` double not null,
    `is_enrolled` tinyint default 1,
    primary key(year,major_num,student_num)
);