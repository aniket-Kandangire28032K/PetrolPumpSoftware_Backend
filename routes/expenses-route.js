import e from "express";
import { getExpenses, postExpenses } from "../controllers/expense-controller.js";

const router = e.Router();

router.get("/",getExpenses);
router.post("/",postExpenses);

export default router;
