import e from "express";
import { getFuel,postFuel,deleteFuel,putFuel,updateRates } from "../controllers/fuel-controller.js";

const router = e.Router();

router.get('/',getFuel);
router.post('/',postFuel);
router.delete('/:id',deleteFuel); 
router.put('/:id',putFuel);
router.patch("/",updateRates)

export default router;
