update habits 
set weekly_goal = $1
where habit_id = $2;

select * from habits
where habit_id = $2;