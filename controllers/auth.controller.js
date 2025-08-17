import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt"
const registerController = async (req, res) => {
    const {username, email, password} = req.body; 
    const existingUser = await User.findOne({
        username
    })
    if(existingUser){
        res.json({
            message: "User already exist"
        })
        return;
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        email,
        password: hashPassword        
    })

    res.json({
        message: "User created",
        user
    })
    
}
const loginController = async (req, res)=>{
    const {email, password} = req.body; 
    const user = await User.findOne({
        email,
    })
    if(!user){
        res.json({
            message: "User doesn't exists"
        })
        return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
        res.json({
            message: "Password not valid"
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