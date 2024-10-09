import { useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { selectProducts } from "../../redux/products/selectors";
import { IProduct } from "../../redux/products/interface";
import scss from "./Slider.module.scss";

const HomeCarousel: React.FC = () => {
  const products = useSelector(selectProducts) as IProduct[];

  return (
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
  );
};

export default HomeCarousel;
