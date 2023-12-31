//express??
const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoute = require("./routes/auth");
const postsRoute = require("./routes/post");
const userRoute = require("./routes/user");
const companyRoute = require("./routes/company");
const companypostRoute = require("./routes/companypost");
const preparationSchema = require("./routes/preparation");
const LearnSchema = require("./routes/learn");


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
app.use(cors());
app.use(express.json());//json形式に変換
app.use("/api/auth", authRoute);
app.use("/api/post", postsRoute);
app.use("/api/user", userRoute);
app.use("/api/company", companyRoute);
app.use("/api/companypost", companypostRoute);
app.use("/api/preparation", preparationSchema);
app.use("/api/learn", LearnSchema);

//express??
app.listen(PORT, () => console.log("サーバーが起動中・・・"));