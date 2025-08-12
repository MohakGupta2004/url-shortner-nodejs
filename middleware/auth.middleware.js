import { getSession } from "../services/auth.service.js";


function isLoggedIn(req, res, next){
    console.log(req.cookies.sessionId)
    const user = getSession(req.cookies.sessionId)
    console.log(user)
    if(!user){
       res.json({
        message: "Please login again"
       }) 
       return;
    }
    next()
}

export default isLoggedIn