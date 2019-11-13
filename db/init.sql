drop table if exists profile;
drop table if exists users;

create table users(
    user_id serial primary key,
    username varchar(32) not null,
    password text not null,
    email text not null,
    picture text, 
    stars_earned int default 0,
    stars_available int default 0
);

insert into users(username, password, email)
values('danielhong', 'test', 'danhong13@gmail.com');

create table habits(
    habit_id serial primary key,
    user_id int references users(user_id),
    habit_name text not null,
    description text not null,
    weekly_goal integer not null
);

create table rewards(
    reward_id serial primary key,
    user_id int references users(user_id),
    reward_name text not null,
    description text not null,
    star_cost integer not null
);