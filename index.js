//express??
const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
require("dotenv").config();

const authRoute = require("./routes/auth");
const postsRoute = require("./routes/post");
const userRoute = require("./routes/user");


mongoose
    .connect(process.env.MONGOURL)
    .then(() => {
        console.log("dbと接続中");
    }).catch((err) => {
        console.log(err);
    });

//コールバック関数とは？？
//"/"はエンドポイントの指定
// app.get("/", (req, res) => {
//     res.send("hello express");
// })

//ミドルウェア
app.use(express.json());//json形式に変換
app.use("/api/auth", authRoute);
app.use("/api/post", postsRoute);
app.use("/api/user", userRoute);

//express??
app.listen(PORT, () => console.log("サーバーが起動中・・・"));