import { createSlice, PayloadAction, isAnyOf } from "@reduxjs/toolkit";
import { getProducts, sortByCategory } from "./operations";
import { IFilter, IProduct } from "./interface";

export interface ProductsState {
  products: IProduct[];
  productsCategory: IProduct[];
  loading: boolean;
  error: string | null;
  order: string;
  cart: IProduct[];
  filter: IFilter;
}

const initialState: ProductsState = {
  products: [],
  productsCategory: [],
  loading: false,
  error: null,
  order: "",
  cart: [],
  filter: {
    category: "",
    order: "",
  },
};

const findProduct = (state: ProductsState, id: number) => {
  return state.cart.find((item) => item.id === id);
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    sortByOrder(state, action: PayloadAction<"desc" | "asc">) {
      const sortArray = state.productsCategory.length
        ? state.productsCategory
        : state.products;
      state.productsCategory = sortArray.sort((a: IProduct, b: IProduct) => {
        if (action.payload === "desc") {
          return b.price - a.price;
        } else {
          return a.price - b.price;
        }
      });
    },
    addToCart(state, action: PayloadAction<IProduct>) {
      const checkSameProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (checkSameProduct) {
        checkSameProduct.quantity += 1;
        return;
      }
      state.cart.push(action.payload);
    },
    deleteProduct(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseQuantity(state, action: PayloadAction<number>) {
      const product = findProduct(state, action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity(state, action: PayloadAction<number>) {
      const product = findProduct(state, action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
    setFilter(state, action: PayloadAction<{ name: string; value: string }>) {
      const { name, value } = action.payload;
      state.filter[name] = value;
    },
    clearFilter(state) {
      state.filter.category = "";
      state.filter.order = "";
      state.productsCategory = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(sortByCategory.fulfilled, (state, action) => {
        state.productsCategory = action.payload;
        state.loading = false;
      })
      .addMatcher(
        isAnyOf(getProducts.pending, sortByCategory.pending),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(getProducts.rejected, sortByCategory.rejected),
        (state) => {
          state.loading = false;
          state.error = "Some error with the server";
        }
      );
  },
});

export const {
  sortByOrder,
  addToCart,
  deleteProduct,
  increaseQuantity,
  decreaseQuantity,
  setFilter,
  clearFilter,
} = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
