import { FC } from "react";
import { useSelector } from "react-redux";
import {
  selectCartLoading,
  selectProducts,
} from "../../redux/products/selectors";
import ProductItem from "./ProductItem";
import scss from "./ProductList.module.scss";
import Loader from "../Loader";

const ProductsList: FC = () => {
  const products = useSelector(selectProducts);
  const loading = useSelector(selectCartLoading);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ul className={scss.list}>
          {products.map((item) => (
            <ProductItem key={item.id} product={item} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ProductsList;
