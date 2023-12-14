
const router = require("express").Router();
const Post = require("../schema/Post");
const User = require("../schema/User");
const Company = require("../schema/Company");




router.post("/company", async (req, res) => {
    const newCompany = new Company(req.body);
    try {
        const savedCompany = await newCompany.save();
        return res.status(200).json(savedCompany)
    } catch (err) {
        return res.status(500).json(err);
    }
});



module.exports = router;