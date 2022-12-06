import { Router, Request, Response } from "express";
import {
  getOneProduct,
  getAllProducts,
  postItem,
  updateItem,
  deleteItem,
} from "../controllers/product";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", getAllProducts);
router.get("/:id", logMiddleware, getOneProduct);
router.post("/", postItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export { router };
