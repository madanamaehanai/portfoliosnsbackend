const mongoose = require("mongoose");


const CompanyPostSchema = new mongoose.Schema({
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
    companyid: {
        type: String,
        required: true,
    },
    tag: {
        type: Array,
        default: [],
    },
},
    { timestamps: true }
);

module.exports = mongoose.model("CompanyPost", CompanyPostSchema);