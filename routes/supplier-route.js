import { getSuppliers,createSupplier,updateSupplier,deleteSupplier } from "../controllers/supplier-controller.js";
import e from "express";

const router = e.Router();

router.get('',getSuppliers);
router.post('',createSupplier);
router.put("/:id", updateSupplier);
router.delete("/:id", deleteSupplier);

export default router