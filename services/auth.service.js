const sessionMap = new Map();

function setSession(uid, user){
    sessionMap.set(uid, user)
}

function getSession(uid){
    console.log("sdf",uid)
    console.log("sesion map", sessionMap)
    const username = sessionMap.get(uid);
    console.log(username)
    return username
}

export {
    setSession,
    getSession
}