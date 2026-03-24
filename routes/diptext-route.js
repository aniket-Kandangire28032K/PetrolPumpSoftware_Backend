import { getDiptests,postDiptextData } from "../controllers/diptest-controller.js";
import e from "express";
const router = e.Router();

router.get("/",getDiptests);
router.post("/",postDiptextData)

export default router;

