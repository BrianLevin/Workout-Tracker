const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const exerciseSchema = new Schhema({
    type: {
        type: String,
        required: true

    },
    duration: {
        type: Data,
        required: true

    },

})

const WorkoutSchema = new Schema({
    day: {
        type: Data,
        required: true

    },
    author: String,
    title: String
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;