const mongoose = require('mongoose');

const DatabaseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "You must have a title"],
        minLength: [3, "Title must be at least 3 characters"],
        maxLength: [50, "Title must be less than 50 characters"]
    }
}, {timestamps: true})

const Database = mongoose.model("Database", DatabaseSchema);

module.exports = Database;