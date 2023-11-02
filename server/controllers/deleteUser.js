// database
const deletePost = require('../models/ArticlePost')
const UserProfile = require("../models/Users");

module.exports = async (req, res) => {
    await deletePost.findByIdAndDelete(req.params.id)
    await UserProfile.findByIdAndDelete(req.params.id)
    res.redirect('/')
}