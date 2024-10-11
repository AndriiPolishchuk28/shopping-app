import { FC, useEffect, useRef } from "react";
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  Button,
} from "@mui/material";
import { Category } from "../../constants";
import { useAppDispatch } from "../../hooks";
import { sortByCategory } from "../../redux/products/operations";
import {
  clearFilter,
  setFilter,
  sortByOrder,
} from "../../redux/products/productsSlice";
import scss from "./Filter.module.scss";
import { Order } from "../../constants/constants";
import { useSelector } from "react-redux";
import { selectCategory, selectOrder } from "../../redux/products/selectors";

const Filter: FC = () => {
  const dispatch = useAppDispatch();
  const category = useSelector(selectCategory) as Category | "";
  const order = useSelector(selectOrder) as Order | "";
  const prevCategoryRef = useRef<Category | "">("");
  const prevOrderRef = useRef<Order | "">("");

  const handleCategory = (event: SelectChangeEvent) => {
    const selected = event.target.value as Category;
    dispatch(setFilter({ name: "category", value: selected }));
    prevCategoryRef.current = selected;
  };

  const handleOrder = (event: SelectChangeEvent) => {
    dispatch(setFilter({ name: "order", value: event.target.value as Order }));
  };

  const handleClearFilters = () => {
    dispatch(clearFilter());
  };

  useEffect(() => {
    if (category && category === prevCategoryRef.current) {
      prevCategoryRef.current = category;
      dispatch(sortByCategory(category)).then(() => {
        if (order) {
          dispatch(sortByOrder(order));
        }
      });
    }
  }, [category, dispatch, order]);

  useEffect(() => {
    if (order && order !== prevOrderRef.current) {
      prevOrderRef.current = order;
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
      <Button onClick={handleClearFilters} variant="outlined">
        Clear Filters
      </Button>
    </div>
  );
};

export default Filter;
