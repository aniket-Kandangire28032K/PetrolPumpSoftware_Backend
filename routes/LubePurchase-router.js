import e from "express";
import { getInvoices,postInvoice,deleteInvoice } from "../controllers/LubePerchase-controller.js";

const router = e.Router();

router.get('/',getInvoices);
router.post('/',postInvoice);
router.delete('/:id',deleteInvoice);

export default router;