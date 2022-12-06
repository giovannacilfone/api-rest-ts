import { Router } from "express";
import { getAllProducts } from "../controllers/orders";
import { checkJWT } from "../middleware/session";

const router = Router();
router.get("/", checkJWT, getAllProducts);
//A esta ruta  solo pueden acceder usuarios con sesion activa
// que tengan JWT VALIDO

export { router };
