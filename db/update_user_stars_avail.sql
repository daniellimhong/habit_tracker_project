update users
set stars_available = $1
where user_id = $2;

select * from users
where user_id = $2;