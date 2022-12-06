import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../utils/jwt.handle";

interface RequestExt extends Request {
  user?: string | JwtPayload;
}
const checkJWT = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtUser = req.headers.authorization || null;
    const jwt = jwtUser?.split(" ").pop();

    const isUser = verifyToken(`${jwt}`);
    if (!isUser) {
      res.status(401);
      res.send("No tienes sesion valida");
    } else {
      req.user = isUser;
      next();
    }
  } catch (e) {
    res.status(400);
    res.send("Sesion no valida");
  }
};

export { checkJWT };
