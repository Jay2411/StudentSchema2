const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    name : {
        type: String,
        required:true
    },
    number : {
        type: String,
        required:true
    },
    subject : {
        type: [String],
        required:true
    },
    classs : {
        type: String,
        required:true
    },
    year : {
        type: String,
        required:true
    },
    society : {
        type: [String],
        required:true,
    },
})

const Index = new mongoose.model("Index", studentSchema);

module.exports = Index;