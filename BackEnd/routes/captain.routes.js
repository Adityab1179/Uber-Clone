const express=require("express")
const {registerCaptain,getCaptainProfile,loginCaptain,logoutCaptain}=require("../controllers/captain.controller")
const {body}=require("express-validator")
const {authCaptain}=require("../middleWares/Auth.middleware")
const router=express.Router();
router.post('/register',[
    
    body('email').isEmail().withMessage('Invalid Email'),
    body('firstName').isLength({min:3}).withMessage('First Name must be at least 3 characters long'),
    body('password').isLength({min:6}).withMessage('Password Name must be at least 3 characters long'),
    body('color').isLength({min:3}).withMessage('Color must be at least 3 characters long'),
    body('capacity').isNumeric().withMessage('Capacity must be a number'),
    body('plateNumber').isLength({min:3}).withMessage('Plate Number must be at least 3 characters long'),
    body('vehicleType').isIn(['car','bike','auto']).withMessage('Type must be one of car, bike, or auto'),
    body('number').isLength({min:3}).withMessage('Number must be at least 3 characters long')
],registerCaptain)
router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password Name must be at least 3 characters long'),
],loginCaptain)

router.get("/profile",authCaptain,getCaptainProfile)
router.get("/logout",authCaptain,logoutCaptain)
module.exports=router