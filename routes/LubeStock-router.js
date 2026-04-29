import e from "express";
import { getStock, postStock } from "../controllers/LubeStock-controller.js";

const router = e.Router();

router.get('/',getStock);
router.post('/',postStock);

export default router