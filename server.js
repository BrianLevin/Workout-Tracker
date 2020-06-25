const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/workout", { useNewUrlParser: true });

app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(Workout => {
            res.json(Workout);
        })
        .catch(err => {
            res.json(err);
        });
});

app.put('/api/workouts/:id', function (req, res) {
    var id = req.params.id;
    var exercise = req.body;
    db.Workout.findByIdAndUpdate(id, { $push: { exercises: exercise } })
    res.end("successfully updated workout");
    // update the workout by its id (use Mongoose) and add the new exercise
    // using the the push function (Mongoose)
});

app.post("/api/workouts/", ({ body }, res) => {
    db.Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });

});

app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(Workout => {
            res.json(Workout);
        })
        .catch(err => {
            res.json(err);
        });
});
app.get("/exercise", (req, res) => {
    res.sendFile(__dirname + "/public/exercise.html")
});
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
});

app.get("/stats", (req, res) => {
    res.sendFile(__dirname + "/public/stats.html")
});


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});