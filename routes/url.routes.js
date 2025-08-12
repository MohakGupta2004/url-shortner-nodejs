import { Router } from "express"
import { shortController, urlController } from "../controllers/url.controller.js"
import isLoggedIn from "../middleware/auth.middleware.js"

const router = Router()

router.route("/:shortId").get(shortController)
router.route("/url").post(isLoggedIn, urlController)

export default router