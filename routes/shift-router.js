import {getShiftData,postShiftData} from "../controllers/shift-controller.js"
import e from "express"

const router = e.Router();

router.get('/',getShiftData)
router.post('/',postShiftData)

export default router;