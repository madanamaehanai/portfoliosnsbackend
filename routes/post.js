
const router = require("express").Router();
const Post = require("../schema/Post");
const User = require("../schema/User");




//投稿を作成する
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        return res.status(200).json(savedPost)
    } catch (err) {
        return res.status(500).json(err);
    }
});


//全ての投稿を取得
router.get("/timeline/:userId", async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({ userId: currentUser._id });
          const friendPosts = await Promise.all(
            currentUser.followings.map((friendId) => {  
              return Post.find({ userId: friendId });
            })
          );
          res.status(200).json(userPosts.concat(...friendPosts));
        // res.status(200).json(currentUser);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;