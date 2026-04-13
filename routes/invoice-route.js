import {getInvoices,postInvoice,updateInvoice,deleteInvoice} from "../controllers/invoice-controller.js"
import e from "express";

const router = e.Router();

router.get("/",getInvoices);
router.post("/",postInvoice);
router.patch("/",updateInvoice);
router.delete("/:id",deleteInvoice);

export default router;