
const router = require("express").Router();
const Post = require("../schema/Post");
const User = require("../schema/User");
const Company = require("../schema/Company");
const Coservices = require("../schema/Coservices");
const CompanyPost = require("../schema/CompanyPost");



//後で削除
//投稿を作成する
router.post("/", async (req, res) => {
    const newPost = new CompanyPost(req.body);
    try {
        const savedPost = await newPost.save();
        const company = await Company.findOne({ _id: req.body.companyid });
        if (company) {
            company.chat.push(savedPost._id);
            await company.save();
            return res.status(200).json(savedPost);

        } else {
            return res.status(404).json({ error: "Company not found" });
        }
    } catch (err) {
        return res.status(500).json(err);
    }
});

//会社post取得
router.get("/:companyid", async (req, res) => {
    try {
        const Companyposts = await CompanyPost.find({ companyid: req.params.companyid });
        return res.status(200).json(Companyposts);
    } catch (err) {
        return res.status(500).json(err);
    }
});

//投稿を削除する
router.post("/delete/:postId", async (req, res) => {
    try {
        const deletePost = await CompanyPost.deleteOne({_id: req.params.postId});
        return res.status(200).json(deletePost);
    } catch (err) {
        return res.status(500).json(err);
    }
});

//会社idが一致するpostを取得しカテゴリーを検索
router.get("/:companyid/:tagname", async (req, res) => {
    try {
        const Companyposts = await CompanyPost.find({ companyid: req.params.companyid, tag: req.params.tagname });
        return res.status(200).json(Companyposts);
    } catch (err) {
        return res.status(500).json(err);
    }
});





module.exports = router;