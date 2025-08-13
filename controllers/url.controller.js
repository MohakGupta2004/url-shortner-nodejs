import { nanoid } from "nanoid"
import URL from "../models/url.model.js"
const shortController = async(req ,res)=>{
    const {shortId} = req.params
    const mainUrl = await URL.findOne({
        shorten: shortId
    })

    res.redirect(mainUrl.original)
}
const urlController = async(req, res)=>{    
    console.log("URL CONTROLLER USER VALUE", req.user)

    const {original} = req.body;
    const id = nanoid(10)
    const url = await URL.create({
        original: original,
        shorten: id
    })

    res.json(url)
}


export {
    shortController,
    urlController
}