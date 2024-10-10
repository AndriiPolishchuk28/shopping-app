import { FC, useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import { getProducts } from "../../redux/products/operations";
import ProductsList from "../../components/ProductsList";
import Filter from "../../components/Filter";
import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/products/selectors";

const Products: FC = () => {
  const dispatch = useAppDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    if (products.length) return;
    dispatch(getProducts());
  }, [dispatch, products]);

  return (
    <>
      <Filter />
      <ProductsList />
    </>
  );
};

export default Products;
