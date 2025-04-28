const express=require("express")
const {registerCaptain}=require("../controllers/captain.controller")
const {body}=require("express-validator")
const router=express.Router();
router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('firstName').isLength({min:3}).withMessage('First Name must be at least 3 characters long'),
    body('password').isLength({min:6}).withMessage('Password Name must be at least 3 characters long'),
    body('vehicle.color').isLength({min:3}).withMessage('Color must be at least 3 characters long'),
    body('vehicle.capacity').isNumeric().withMessage('Capacity must be a number'),
    body('vehicle.plateNumber').isLength({min:3}).withMessage('Plate Number must be at least 3 characters long'),
    body('vehicle.type').isIn(['car','bike','auto']).withMessage('Type must be one of car, bike, or auto'),
    body('vehicle.number').isLength({min:3}).withMessage('Number must be at least 3 characters long')
],registerCaptain)

module.exports=router