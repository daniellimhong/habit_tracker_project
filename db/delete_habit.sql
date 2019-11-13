delete from habits
where user_id = $1 and habit_id = $2;