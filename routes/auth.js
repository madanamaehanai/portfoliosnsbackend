const router = require("express").Router();
const User = require("../schema/User");

//アカウント作成
router.post("/registration", async (req, res) => {
    try {
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        const user = await newUser.save();
        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json(err);
    }
});


//login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(404).send("ユーザーが見つかりません");

        const vailedPassword = req.body.password === user.password;
        if (!vailedPassword) return res.status(400).json("パスワードが不一致です。");

        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json(err);
    }
});
// router.get("/", (req, res) => {
//     res.send("auth router");
// });
module.exports = router;

