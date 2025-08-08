import mongoose from "mongoose"

const urlSchema = {
    shorten: {
        type: String,
        required: true
    },
    original: {
        type: String,
        required: true
    }
}
const URL = new mongoose.model("URL", urlSchema)
export default URL 