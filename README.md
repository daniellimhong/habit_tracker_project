# DAM Habit - Daily Goal Tracker

## Client (Front-end)
### Dependencies 
    - axios 
    - react-router-dom (BrowserRouter) 
    - redux 
    - react-redux
    - redux-promise-middleware
    - node-sass
    - http-proxy-middleware

### Routes
    - Login.js (Landing Page/Log-in)
        - Login.js, will redirect to user’s page 
        - /login
    - User.js (User’s goal information)
        - /user
    - Leaderboard.js (Track other user’s progress)
        - /leaderboard

### File-structure
    - src/
        - components
                - Login
                        - Login.js
                        - Login.scss
                - User.js
                        - User.js
                        - User.scss
                - Leaderboard
                        - Leaderboard.js
                        - Leaderboard.scss
        - App.js - routes here
        - Index.js
        - Reset.css
        - redux.js
                - store.js
                - reducer.js    

## Server (Back-end)
### Dependencies 
    - express 
    - massive
    - dotenv
    - express-session
    - bcrypt

### Endpoints

**authorization**
    - login: => /api/login
    - register: => /api/register
    - logout => /api/logout
    - userSession => /api/user_session

**user endpoints**
    - getAllUsers => /api/all_users [Leaderboard]
    - getUser => /api/user?={id}
    - myProfile => /api/me
    - deleteUser => /api/delete_user

**goal endpoints**
    - addGoal => /api/newGoal
    - updateGoal => /api/updateGoal
    - deleteGoal => /api/deleteGoal

**reward endpoints**
    - addReward => /api/newReward
    - getRewards => /api/getRewards
    - add more

**star endpoints**
    - getStars => /api/getStars [will not need, can get from user table or getUser]
    - earnStar => /api/earnStar
    - spendStar => /api/spendStar

### Database (PostgreSQL)

- Users
```sql 
create table users(
    user_id serial primary key,
    username varchar(32) not null,
    password text not null,
    email text not null
);
```

- Habits table
```sql 
create table habits(
    habit_id serial primary key,
    user_id int references users(user_id),
    description text not null,
    weekly_goal integer not null
);
```
- Rewards table
```sql 
create table rewards(
    reward_id serial primary key,
    user_id int references users(user_id),
    title text not null,
    description text not null,
    star_cost integer not null
);
``` 


                    