import { FC } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { IProduct } from "../../../redux/products/interface";
import scss from "./ProductItem.module.scss";
import { useAppDispatch } from "../../../hooks";
import { useLocation } from "react-router-dom";
import {
  addToCart,
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "../../../redux/products/productsSlice";
import { toast } from "react-toastify";

interface ProductItemProps {
  product: IProduct;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const { image, title, price, id, quantity } = product;

  const location = useLocation();
  const dispatch = useAppDispatch();

  const handleAddProduct = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    toast.success("Product was succesfully added to the cart");
  };
  const handleDeleteProduct = () => {
    dispatch(deleteProduct(id));
  };

  return (
    <li className={scss.item}>
      <Card className={scss.card}>
        <img className={scss.image} src={image} alt="product" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {price}
          </Typography>
        </CardContent>
        <div>
          {location.pathname === "/products" && (
            <Button onClick={handleAddProduct} size="small">
              Add to cart
            </Button>
          )}

          {location.pathname === "/cart" && (
            <div className={scss.btn_wrapper}>
              <div className={scss.product_quantity}>
                <button
                  onClick={() => dispatch(decreaseQuantity(id))}
                  className={scss.btn}
                >
                  -
                </button>
                <span className={scss.quantity}>{quantity}</span>
                <button
                  onClick={() => dispatch(increaseQuantity(id))}
                  className={scss.btn}
                >
                  +
                </button>
              </div>
              <Button onClick={handleDeleteProduct} size="small">
                Delete
              </Button>
            </div>
          )}
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
