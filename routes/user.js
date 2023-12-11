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


module.exports = router;