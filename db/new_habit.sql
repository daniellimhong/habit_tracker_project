insert into habits(user_id, habit_name, description, weekly_goal)
values($1, $2, $3, $4);

select * from habits
where habit_name = $2;