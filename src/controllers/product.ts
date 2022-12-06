import { Request, Response } from "express";
import {
  insertProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} from "../services/product.services";
import { handleHTTP } from "../utils/error.handle";

const getOneProduct = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getProduct(id);
    res.send(response);
  } catch (err) {
    handleHTTP(res, "ERROR_GET_ITEM");
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const response = await getProducts();
    res.send(response);
  } catch (err) {
    handleHTTP(res, "ERROR_GET_ITEMS");
  }
};

const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateProduct(id, body);
    res.send(response);
  } catch (err) {
    handleHTTP(res, "ERROR_UPDATE_ITEM");
  }
};

const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseProduct = await insertProduct(body);
    res.send(responseProduct);
  } catch (err) {
    handleHTTP(res, "ERROR_POST_ITEM", err);
  }
};

const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteProduct(id);
    res.send(response);
  } catch (err) {
    handleHTTP(res, "ERROR_DELETE_ITEM");
  }
};

export { getOneProduct, getAllProducts, updateItem, deleteItem, postItem };
