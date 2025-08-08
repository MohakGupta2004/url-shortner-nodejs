import { Router } from "express"
import { shortController, urlController } from "../controllers/url.controller.js"

const router = Router()

router.route("/:shortId").get(shortController)
router.route("/url").post(urlController)

export default router