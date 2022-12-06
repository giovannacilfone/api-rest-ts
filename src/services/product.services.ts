import { Product } from "../interface/product.interface";
import ProductModel from "../models/product";

const insertProduct = async (product: Product) => {
  const responseProduct = await ProductModel.create(product);
  return responseProduct;
};

const getProducts = async () => {
  const responseProducts = await ProductModel.find({});
  return responseProducts;
};

const getProduct = async (id: string) => {
  const responseProduct = await ProductModel.findOne({ _id: id });
  return responseProduct;
};

const updateProduct = async (id: string, data: Product) => {
  const responseProduct = await ProductModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseProduct;
};

const deleteProduct = async (id: string) => {
  const responseProduct = await ProductModel.remove({ _id: id });
  return responseProduct;
};

export { insertProduct, getProducts, getProduct, updateProduct, deleteProduct };
