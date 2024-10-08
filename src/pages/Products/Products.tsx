import { FC, useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import { getProducts } from "../../redux/products/operations";
import ProductsList from "../../components/ProductsList";
import Filter from "../../components/Filter";

const Products: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Filter />
      <ProductsList />
    </>
  );
};

export default Products;
