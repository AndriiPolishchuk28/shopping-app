import Slider from "../../components/Slider";
import { FC, useEffect } from "react";
import { getProducts } from "../../redux/products/operations";
import { useAppDispatch } from "../../hooks";
import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/products/selectors";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    if (products.length) return;
    dispatch(getProducts());
  }, [dispatch, products]);
  return (
    <div>
      <Slider />
    </div>
  );
};

export default Home;
