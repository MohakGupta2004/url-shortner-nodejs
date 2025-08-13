import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const registerController = async (req, res) => {
    const {username, email, password} = req.body; 
    const user = await User.create({
        username,
        email,
        password        
    })
    
}
const loginController = async (req, res)=>{
    const {email, password} = req.body; 
    const user = await User.findOne({
        email,
        password        
    })
    if(!user){
        res.json({
            message: "User doesn't exists"
        })
        return;
    }
    const token = await jwt.sign({
        "username": user.username
    }, process.env.JWT_SECRET, {
        expiresIn: "1d"
    })

    res.cookie("accessToken",token)
    res.json({
        message: "User logged in"
    })
}


export {
    loginController,
    registerController
}