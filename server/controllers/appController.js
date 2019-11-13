module.exports = {

    //* Habit controller
    createHabit: (req, res, next) => {
        const db = req.app.get("db");
        const { habit_name, description, weekly_goal } = req.body;
        const { user_id } = req.session.user;

        db.new_habit([user_id, habit_name, description, weekly_goal])
        .then(newHabit => {
            console.log(habit_name);
            res.status(200).send(newHabit);
        }).catch(err => console.log(err))
    },

    updateHabitName: (req, res, next) => {
        const db = req.app.get("db");
        const { habit_name } = req.body;
        const { habit_id } = req.params;
    

        db.update_habit_name([habit_name, habit_id])
        .then(updatedHabit => {
            res.status(200).send(updatedHabit);
        }).catch(err => console.log(err))
    },

    updateHabitDescription: (req, res, next) => {
        const db = req.app.get("db");
        const { description } = req.body;
        const { habit_id } = req.params;


        db.update_habit_desc([description, habit_id])
        .then(updatedHabit => {
            res.status(200).send(updatedHabit);
        }).catch(err => console.log(err))
    },

    updateHabitWeeklyGoal: (req, res, next) => {
        const db = req.app.get("db");
        const { weekly_goal } = req.body;
        const { habit_id } = req.params;

        db.update_habit_week([weekly_goal, habit_id])
        .then(updatedHabit => {
            res.status(200).send(updatedHabit);
        }).catch(err => console.log(err))
    },

    deleteHabit: (req, res, next) => {
        const db = req.app.get("db");
        const { habit_id } = req.params;
        const { user_id } = req.session.user;

        db.delete_habit([user_id, habit_id]).then( () => {
            res.status(200).send(console.log("Habit deleted"))
        });
    },

    //* Reward controller
    createReward: (req, res, next) => {
        const db = req.app.get("db");
        const { reward_name, description, star_cost } = req.body;
        const { user_id } = req.session.user;

        db.new_reward([user_id, reward_name, description, star_cost])
        .then(newReward => {
            console.log(reward_name)
            res.status(200).send(newReward);
        }).catch(err => console.log(err))
    },

    updateRewardName: (req, res, next) => {
        const db = req.app.get("db");
        const { reward_name } = req.body;
        const { reward_id } = req.params;

        db.update_reward_name([reward_name, reward_id])
        .then(updatedReward => {
            res.status(200).send(updatedReward);
        }).catch(err => console.log(err))
    },

    updateRewardDescription: (req, res, next) => {
        const db = req.app.get("db");
        const { description } = req.body;
        const { reward_id } = req.params;

        db.update_reward_desc([description, reward_id])
        .then(updatedReward => {
            res.status(200).send(updatedReward);
        }).catch(err => console.log(err))
    },

    updateRewardCost: (req, res, next) => {
        const db = req.app.get("db");
        const { star_cost } = req.body;
        const { reward_id } = req.params;

        db.update_reward_cost([star_cost, reward_id])
        .then(updatedReward => {
            res.status(200).send(updatedReward)
        }).catch(err => console.log(err))
    },

    deleteReward: (req, res, next) => {
        const db = req.app.get("db");
        const { reward_id } = req.params;
        const { user_id } = req.session.user;

        db.delete_reward([user_id, reward_id]).then( () => {
            res.status(200).send(console.log("Reward deleted"))
        })
    }

    //* Star controller (note: stars are in Users table)

}