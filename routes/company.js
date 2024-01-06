
const router = require("express").Router();
const Post = require("../schema/Post");
const User = require("../schema/User");
const Company = require("../schema/Company");
const Coservices = require("../schema/Coservices");


//会社プロフィールの作成
router.post("/company", async (req, res) => {
    const newCompany = new Company(req.body);
    try {
        const savedCompany = await newCompany.save();
        return res.status(200).json(savedCompany)
    } catch (err) {
        return res.status(500).json(err);
    }
});

//会社プロフィールの取得
router.get("/companyinfo/:id", async (req, res) => {
    try {
        const CompanyInfo = await Company.findById(req.params.id);
        return res.status(200).json(CompanyInfo);
    } catch (err) {
        return res.status(500).json(err);
    }
});

//カテゴリー毎の会社情報を取得
router.get("/company/:categoryname", async (req, res) => {
    try {
        const companyPosts = await Company.find({ category: req.params.categoryname }).exec();

        res.status(200).json({
            companyPosts
        });
    } catch (err) {
        res.status(500).json(err);
    }
});







//会社サービスを追加
router.post("/company/services/:company_id", async (req, res) => {
    const addservices = new Coservices(req.body);
    try {
        const savedservices = await addservices.save();
        // return res.status(200).json(savedservices)

        const savedId = savedservices._id;
        // const coId = mongoose.Types.ObjectId(req.params.company_id);
        // console.log(coId);
        const company = await Company.findOne({ _id: req.params.company_id });
        if (company) {
            company.service.push(savedId);
            await company.save();
            return res.status(200).json(savedservices);

        } else {
            return res.status(404).json({ error: "Company not found" });
        }
    } catch (err) {
        return res.status(500).json(err);
    }
});


//会社サービス情報を取得
router.get("/company/services/:id", async (req, res) => {
    try {
        const companyservicesPosts = await Coservices.findOne({ _id: req.params.id }).exec();
        res.status(200).json({
            companyservicesPosts
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


//投稿を修正する
router.post("/update/:id", async (req, res) => {
    try {
        const Companyupdate = await Company.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
        return res.status(200).json(Companyupdate);
    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router;