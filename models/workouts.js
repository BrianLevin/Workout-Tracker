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
        required: true

    },
    reps: {
        type: Number,
        required: true

    },






})

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        required: true

    },

});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;