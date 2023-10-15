const express = require('express');
const { loginController, registerController ,authController} = require('../controllers/userCtrl');
const authMiddlware = require('../middlewares/authMiddlware');



// router object

const router = express.Router();

// routes
//login || POST
router.post('/login',loginController);
// register
router.post('/register',registerController);

//Auth || POST
router.post('/getUserData',authMiddlware, authController)

module.exports = router;