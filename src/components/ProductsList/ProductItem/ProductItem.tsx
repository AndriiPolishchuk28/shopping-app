import { FC } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { IProduct } from "../../../redux/products/interface";
import scss from "./ProductItem.module.scss";

const ProductItem: FC<IProduct> = ({ title, image, price }) => {
  return (
    <li className={scss.item}>
      <Card className={scss.card}>
        <img className={scss.image} src={image} alt="product" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add to cart</Button>
        </CardActions>
      </Card>
    </li>
  );
};

export default ProductItem;
