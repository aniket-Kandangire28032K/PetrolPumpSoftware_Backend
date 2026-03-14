import e from "express";
import { getCustomers,postCustomers,deleteCustomer } from "../controllers/customer-controller.js";

const router = e.Router();

router.get('/',getCustomers);
router.post('/',postCustomers);
router.delete('/:id',deleteCustomer);

export default router;