const BlogsDb = require("../models/ArticlePost");
const UserData = require("../models/Users");
module.exports = async (req, res) => {
    const blogs = await BlogsDb.find({}).sort({_id: -1}).populate('userid')
    const user = await UserData.find({}).sort({_id: -1})
    res.render("main", {
        title: "Home page for client demo app.",
        blogs, user
    })
}