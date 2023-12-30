const mongoose = require("mongoose");


const PreparationSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        max: 200,
    },
    img: {
        type: String,
    },
    likes: {
        type: Array,
        default: [],
    },
    comment: {
        type: Array,
        default: [],
    },
    category: {
        type: Array,
        default: [],
        required: true,
    },
},
    { timestamps: true }
);

module.exports =mongoose.model("Preparation", PreparationSchema);