import { Product } from "../interface/product.interface";
import { Schema, Types, model, Model } from "mongoose";

const ProductSchema = new Schema<Product>(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    stock: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ProductModel = model("products", ProductSchema);

export default ProductModel;
