
const router = require("express").Router();
const Post = require("../schema/Post");
const User = require("../schema/User");
const Company = require("../schema/Company");
const Coservices = require("../schema/Coservices");
const CompanyPost = require("../schema/CompanyPost");
const Preparation = require("../schema/Preparation");
const Learn = require("../schema/Learn");



//投稿を作成する
router.post("/", async (req, res) => {
    const newPost = new Learn(req.body);
    try {
        const savedPost = await newPost.save();
        return res.status(200).json(savedPost);
    } catch (err) {
        return res.status(500).json(err);
    }
});

//会社idが一致するpostを取得しカテゴリーを検索
router.get("/:categoryname", async (req, res) => {
    try {
        const Answerposts = await Learn.find({ category: req.params.categoryname });
        return res.status(200).json(Answerposts);
    } catch (err) {
        return res.status(500).json(err);
    }
});

//投稿を削除する
router.post("/delete/:postId", async (req, res) => {
    try {
        const deletePost = await Learn.deleteOne({ _id: req.params.postId });
        return res.status(200).json(deletePost);
    } catch (err) {
        return res.status(500).json(err);
    }
});





module.exports = router;