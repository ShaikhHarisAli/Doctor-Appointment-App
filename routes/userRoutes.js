const express = require('express');
const { loginController, registerController ,authController,applyDoctorController} = require('../controllers/userCtrl');
const authMiddleware = require('../middlewares/authMiddlware');



// router object

const router = express.Router();

// routes
//login || POST
router.post('/login',loginController);
// register
router.post('/register',registerController);

//Auth || POST
router.post('/getUserData',authMiddleware, authController)


//APply Doctor || POST

router.post("/apply-doctor", authMiddleware, applyDoctorController);

module.exports = router;