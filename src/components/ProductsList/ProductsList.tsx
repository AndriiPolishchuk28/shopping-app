import { FC } from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/products/selectors";
import ProductItem from "./ProductItem";
import scss from "./ProductList.module.scss";

const ProductsList: FC = () => {
  const products = useSelector(selectProducts);

  return (
    <ul className={scss.list}>
      {products.map((item) => (
        <ProductItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default ProductsList;
