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
    category: {
        type: Array,
        default: [],
        required: true,
    },
    employees: {
        type: String,
        default: "",
    },
    income: {
        type: String,
        default: "",
    },
    office: {
        type: Array,
        default: [],
    },
    salary: {
        type: String,
        default: "",
    },
    philosophy: {
        type: String,
        default: "",
    },
    capital: {
        type: String,
        default: "",
    },
    founding: {
        type: String,
        default: "",
    },
    listed: {
        type: String,
        default: "",
    },
    banks: {
        type: Array,
        default: [],
    },
},
    //時間を格納
    { timestamps: true }
);

module.exports = mongoose.model("Company", CompanySchema);