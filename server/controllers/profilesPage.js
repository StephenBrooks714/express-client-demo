// database
const UserDb = require('../models/Users');

module.exports = async (req, res) => {
    const profiles = await UserDb.find({}).sort({_id: -1})
    res.render("profiles", {
        title: "Profile page for client demonstration.",
        profiles
    })
}