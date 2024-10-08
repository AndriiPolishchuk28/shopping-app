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
import { sortByCategory, sortByOrder } from "../../redux/products/operations";
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
    <>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Category
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={category}
          onChange={handleCategory}
          autoWidth
          label="category"
        >
          {Object.values(Category).map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={order}
          onChange={handleOrder}
          autoWidth
          label="Age"
        >
          <MenuItem value="desc">desc</MenuItem>
          <MenuItem value="asc">asc</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default Filter;
