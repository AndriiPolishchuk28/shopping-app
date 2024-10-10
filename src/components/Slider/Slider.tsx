import { useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  selectCartLoading,
  selectProducts,
} from "../../redux/products/selectors";
import { IProduct } from "../../redux/products/interface";
import scss from "./Slider.module.scss";
import Loader from "../Loader/Loader";

const HomeCarousel: React.FC = () => {
  const products = useSelector(selectProducts) as IProduct[];
  const loading = useSelector(selectCartLoading);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          {products.map(({ image, title, id }) => (
            <div className={scss.wrapper_slider} key={id}>
              <img
                src={image}
                alt={title}
                style={{ width: "400px", height: "auto", display: "block" }}
              />
              <p className="legend">{title}</p>
            </div>
          ))}
        </Carousel>
      )}
    </>
  );
};

export default HomeCarousel;
