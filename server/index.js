require("dotenv").config();

const express = require("express");
const massive = require("massive");
const session = require("express-session");

const { 
    login, 
    register, 
    userSession, 
    logout, 
    updateProfilePic 
} = require("./controllers/userController");

const { 
    createHabit, 
    updateHabitName, 
    updateHabitDescription, 
    updateHabitWeeklyGoal, 
    deleteHabit,
    updateUserStarsEarned,
    updateUserStarsAvailable
} = require("./controllers/appController");

const {
    createReward,
    updateRewardName,
    updateRewardDescription,
    updateRewardCost,
    deleteReward
} = require("./controllers/appController");

const app = express();
app.use(express.json());

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set("db", db);
    console.log("Database connected");
});

app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 14 // two weeks
        }
    })
);

//* User Endpoints
app.post("/api/login", login);
app.post("/api/register", register);
app.post("/api/user_session", userSession);
app.get("/api/logout", logout);
app.put("/api/updatePic", updateProfilePic);

//* Habit Endpoints
app.post("/api/newHabit", createHabit);
app.put("/api/updateHabitName/:habit_id", updateHabitName);
app.put("/api/updateHabitDescription/:habit_id", updateHabitDescription);
app.put("/api/updateHabitWeeklyGoal/:habit_id", updateHabitWeeklyGoal);
app.delete("/api/deleteHabit/:habit_id", deleteHabit);

//* Reward Endpoints
app.post("/api/newReward", createReward);
app.put("/api/updateRewardName/:reward_id", updateRewardName);
app.put("/api/updateRewardDescription/:reward_id", updateRewardDescription);
app.put("/api/updateRewardCost/:reward_id", updateRewardCost);
app.delete("/api/deleteReward/:reward_id", deleteReward);

//* Star Endpoint
app.put("/api/updateUserStarsEarned", updateUserStarsEarned);
app.put("/api/updateUserStarsAvailable", updateUserStarsAvailable);


app.listen(SERVER_PORT, () => 
    console.log(`Server listening on port ${SERVER_PORT}`),
);
