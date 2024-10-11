import { FC } from "react";
import { useSelector } from "react-redux";
import {
  selectCartLoading,
  selectProducts,
  selectProductsCategory,
} from "../../redux/products/selectors";
import ProductItem from "./ProductItem";
import scss from "./ProductList.module.scss";
import Loader from "../Loader";

const ProductsList: FC = () => {
  const productsCategory = useSelector(selectProductsCategory);
  const productsAll = useSelector(selectProducts);
  const products = productsCategory.length > 0 ? productsCategory : productsAll;

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
