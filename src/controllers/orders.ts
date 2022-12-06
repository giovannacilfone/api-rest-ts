import { JwtPayload } from "jsonwebtoken";
import { Request, Response } from "express";
import { handleHTTP } from "../utils/error.handle";

interface RequestExt extends Request {
  user?: string | JwtPayload;
}

const getAllProducts = async (req: RequestExt, res: Response) => {
  try {
    res.send({ data: "Esto solo lo ven las personas con sesion activa", user: req.user });
  } catch (err) {
    handleHTTP(res, "ERROR_GET_ITEMS");
  }
};

export { getAllProducts };
