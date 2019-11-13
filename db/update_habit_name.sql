update habits 
set habit_name = $1
where habit_id = $2;

select * from habits
where habit_id = $2;