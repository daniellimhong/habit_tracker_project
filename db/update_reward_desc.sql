update rewards 
set description = $1
where reward_id = $2;

select * from rewards
where reward_id = $2;