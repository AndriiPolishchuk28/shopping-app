import { FC } from "react";
import { selectCartProducts } from "../../redux/products/selectors";
import scss from "./CartList.module.scss";
import { useSelector } from "react-redux";
import ProductItem from "../ProductsList/ProductItem";

const CartList: FC = () => {
  const products = useSelector(selectCartProducts);
  return (
    <ul className={scss.list}>
      {products.length ? (
        products.map((item) => <ProductItem key={item.id} product={item} />)
      ) : (
        <p className={scss.text}>No items in your cart</p>
      )}
    </ul>
  );
};

export default CartList;
