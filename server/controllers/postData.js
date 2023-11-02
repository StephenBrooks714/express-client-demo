// database
const PostDB = require('../models/ArticlePost')

module.exports = async (req, res) => {
    const post = await PostDB.findById(req.params.id).populate('userid')
    res.render("post", {
        title: "More information on the individual post",
        post
    })
}