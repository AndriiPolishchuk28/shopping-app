import Slider from "../../components/Slider";
import { FC, useEffect } from "react";
import { getProducts } from "../../redux/products/operations";
import { useAppDispatch } from "../../hooks";

const Home: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      <Slider />
    </div>
  );
};

export default Home;
