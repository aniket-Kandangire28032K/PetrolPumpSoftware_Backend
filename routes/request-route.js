import { getRequests,postRequest,delRequest,patchRequest } from "../controllers/expenses-request-controller.js";
import e from "express";

const router = e.Router();

router.get('/',getRequests)
router.post('/',postRequest)
router.delete('/',delRequest)
router.patch('/',patchRequest)

export default router;