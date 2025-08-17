import jwt from 'jsonwebtoken'

function isLoggedIn(req, res, next){
    const accessToken = req.cookies.accessToken
    const decoded = jwt.verify(accessToken,process.env.JWT_SECRET);
    if(!decoded.username){
        res.status(401).json({
            message: "Unauthorized"
        })
        return;
    }
    req.user = decoded.user;
    next();
}

export default isLoggedIn