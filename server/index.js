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
    deleteHabit 
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
app.put("/api/updateHabitName", updateHabitName);
app.put("/api/updateHabitDescription", updateHabitDescription);
app.put("/api/updateHabitWeeklyGoal", updateHabitWeeklyGoal);
app.delete("/api/deleteHabit/:user_id/:habit_id", deleteHabit);

//* Reward Endpoints
app.post("/api/newReward", createReward);
app.put("/api/updateRewardName", updateRewardName);
app.put("/api/updateRewardDescription", updateHabitDescription);
app.put("/api/updateRewardCost", updateRewardCost);
app.delete("/api/deleteReward/:user_id/:reward_id", deleteReward);



app.listen(SERVER_PORT, () => 
    console.log(`Server listening on port ${SERVER_PORT}`),
);
