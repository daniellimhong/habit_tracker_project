update rewards 
set star_cost = $1
where reward_id = $2;

select * from rewards
where reward_id = $2;