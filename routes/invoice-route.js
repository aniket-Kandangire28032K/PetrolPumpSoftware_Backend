import {getInvoices,postInvoice} from "../controllers/invoice-controller.js"
import e from "express";

const router = e.Router();

router.get("/",getInvoices);
router.post("/",postInvoice);

export default router;