update rewards 
set reward_name = $1
where reward_id = $2;

select * from rewards
where reward_id = $2;