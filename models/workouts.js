const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const exerciseSchema = new Schhema({
    type: {
        type: String,
        required: true

    },
    duration: {
        type: Number,
        required: true

    },
    weight: {
        type: Number,
        required: false

    },
    reps: {
        type: Number,
        required: false

    },

    sets: {
        type: Number,
        required: false

    },
    name: {
        type: String,
        required: true

    },
    distance: {
        type: Number,
        required: false
    }





})

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        required: true

    },
    exercises: [exerciseSchema]



});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;