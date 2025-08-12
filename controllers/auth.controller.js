import { User } from "../models/user.model.js";
import { v4 as uuidv4 } from 'uuid';
import { setSession } from "../services/auth.service.js";

const registerController = async (req, res) => {
    const {username, email, password} = req.body; 
    const user = await User.create({
        username,
        email,
        password        
    })
    
    const uid = uuidv4();
    setSession(uid, username);
    res.cookie("sessionId", uid);
    res.json({
        message: user
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
    const uid = uuidv4();
    setSession(uid, user.username);
    res.cookie("sessionId", uid);
    res.json({
        message: user
    })
}


export {
    loginController,
    registerController
}