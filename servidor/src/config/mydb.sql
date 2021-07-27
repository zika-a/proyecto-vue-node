create database juegos_mesa;
use juegos_mesa;
create table boardgames(
	id int not null auto_increment,
    name varchar(80) not null,
    publisher varchar(60) not null,
    category varchar(2) not null,
    description varchar(200) null,
    year varchar(4) null,
    PRIMARY KEY (id)
);

create table favorites(
	id int not null auto_increment,
    idBoardgame int not null,
    primary key(id),
    foreign key(idBoardgame)
    references boardgames(id)
);