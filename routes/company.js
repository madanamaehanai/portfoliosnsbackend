
const router = require("express").Router();
const Post = require("../schema/Post");
const User = require("../schema/User");
const Company = require("../schema/Company");



//会社プロフィールを追加
router.post("/company", async (req, res) => {
    const newCompany = new Company(req.body);
    try {
        const savedCompany = await newCompany.save();
        return res.status(200).json(savedCompany)
    } catch (err) {
        return res.status(500).json(err);
    }
});


//会社情報を取得
router.get("/company/:categoryname", async (req, res) => {
    try {
        const companyPosts = await Company.find({ category: req.params.categoryname }).exec();
        res.status(200).json(companyPosts);
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;