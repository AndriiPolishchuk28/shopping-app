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

const ProductItem: FC<IProduct> = ({ title, image }) => {
  return (
    <li className={scss.item}>
      <Card>
        <CardMedia
          className={scss.image}
          sx={{ height: 200 }}
          image={image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
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
