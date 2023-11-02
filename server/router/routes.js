const express = require("express");
const router = express.Router();
const cache = require("../cache/mcache");

const homeController = require("../controllers/homePage");
const galleryController = require("../controllers/galleryPage");
const mainController = require("../controllers/mainPage");
const contactController = require("../controllers/contactPage");
const sendContactFormController = require("../controllers/sendContactForm");

const newUserController = require('../controllers/registerPage');
const loginPageController = require('../controllers/loginPage');
const storeUserController = require('../controllers/storeUser');
const profileController = require("../controllers/profilesPage");
const loginUserController = require('../controllers/loginUser');
const logoutUserController = require('../controllers/logoutUser');
const deleteUserController = require("../controllers/deleteUser");

const NewPostController = require("../controllers/newPostPage");
const storePostController = require("../controllers/storePost");
const blogsController =require("../controllers/blogsData");
const postController = require("../controllers/postData");
const deletePostController = require("../controllers/deletePost");

const ifLoggedIn = require("../middleware/ifLoggedIn");
const auth = require("../middleware/ifAuthorized");
const form = require("../middleware/form");

router.get("/", cache(2), homeController);
router.get("/main", auth, cache(2), mainController);
router.get("/gallery", galleryController);
//contact form
router.get("/contact", contactController);
router.post("/send/form", sendContactFormController);
// users
router.get('/register', ifLoggedIn, newUserController);
router.get('/login', ifLoggedIn, loginPageController);
router.post('/store/user', storeUserController);
router.get("/profiles", profileController);
router.post('/login/user', loginUserController);
router.get('/logout', logoutUserController);
router.get("/delete/user/:id", deleteUserController);
// new post
router.get("/newPost", form, auth, NewPostController);
router.post("/store/post", storePostController);
router.get("/post/:id", cache(2), postController);
router.get("/blogs", cache(2), blogsController);
router.get("/delete/post/:id", auth, deletePostController);

module.exports = router;