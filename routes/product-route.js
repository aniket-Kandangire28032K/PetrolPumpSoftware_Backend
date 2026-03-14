import { getProducts, postProducts } from "../controllers/product-controller.js";
import express from "express";

const router = express.Router();

router.get("/",getProducts);
router.post('/',postProducts);

export default router