insert into rewards(user_id, reward_name, description, star_cost)
values($1, $2, $3, $4);

select * from rewards
where reward_name = $2;