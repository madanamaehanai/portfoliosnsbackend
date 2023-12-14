const router = require("express").Router();
const User = require("../schema/User");

//idからユーザー名を取得
router.get("/username/:userId", async (req, res) => {
    try {
        const currentPostUser = await User.findById(req.params.userId);
        //   res.status(200).json(currentPostUser.username);
        res.status(200).json(currentPostUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

//forrowの追加削除
router.post("/forrow/:userId1/:userId2", async (req, res) => {
    try {
        const user1 = await User.findById(req.params.userId1);
        const user2 = await User.findById(req.params.userId2);

        const isAlreadyFollowing = user1.followers.includes(user2._id);
        if (isAlreadyFollowing) {
            user1.followers = user1.followers.filter(followerId => followerId.toString() !== user2._id.toString());
            await user1.save();
            user2.followings = user2.followings.filter(followingId => followingId.toString() !== user1._id.toString());
            await user2.save();
            res.status(200).json({ message: 'フォローを解除しました', user1, user2 });
        } else {
            user1.followers.push(user2._id);
            await user1.save();
            user2.followings.push(user1._id);
            await user2.save();
            res.status(200).json({ message: 'フォローしました', user1, user2 });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;