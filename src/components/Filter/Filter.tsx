import { FC, useEffect, useState } from "react";
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { Category } from "../../constants";
import { useAppDispatch } from "../../hooks";
import { sortByCategory } from "../../redux/products/operations";
import { sortByOrder } from "../../redux/products/productsSlice";
import scss from "./Filter.module.scss";
import { Order } from "../../constants/constants";

const Filter: FC = () => {
  const [category, setCategory] = useState<Category | "">("");
  const [order, setOrder] = useState<Order | "">("");
  const dispatch = useAppDispatch();

  const handleCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value as Category);
  };

  const handleOrder = (event: SelectChangeEvent) => {
    setOrder(event.target.value as Order);
  };

  useEffect(() => {
    if (category) {
      dispatch(sortByCategory(category));
    }
  }, [category, dispatch]);

  useEffect(() => {
    if (order) {
      dispatch(sortByOrder(order));
    }
  }, [order, dispatch]);

  return (
    <div className={scss.filter_wrapper}>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="category">Category</InputLabel>
        <Select
          labelId="category"
          value={category}
          onChange={handleCategory}
          autoWidth
          label="Category"
        >
          {Object.values(Category).map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="order">Order</InputLabel>
        <Select
          labelId="order"
          value={order}
          onChange={handleOrder}
          autoWidth
          label="Order"
        >
          <MenuItem value="desc">Desc</MenuItem>
          <MenuItem value="asc">Asc</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Filter;
