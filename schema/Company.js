const mongoose = require("mongoose");



const CompanySchema = new mongoose.Schema({
    companyname: {
        type: String,
        required: true,
        unique: true,
    },
    url: {
        type: String,
        required: true,
        uniqu: true,
    },
    service: {
        type: Array,
        default: [],
    },
    desc: {
        type: String,
        default: "",
    },
    language: {
        type: Array,
        default: [],
    },
    skill: {
        type: Array,
        default: [],
    },
    chat: {
        type: Array,
        default: [],
    },
    userId: {
        type: String,
        required: true,
    },
},
    //時間を格納
    { timestamps: true }
);

module.exports = mongoose.model("Company", CompanySchema);