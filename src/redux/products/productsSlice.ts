import { createSlice, PayloadAction, isAnyOf } from "@reduxjs/toolkit";
import { getProducts, sortByCategory } from "./operations";
import { IProduct } from "./interface";

export interface UsersState {
  products: IProduct[];
  loading: boolean;
  error: string | null;
  order: string;
}

const initialState: UsersState = {
  products: [],
  loading: false,
  error: null,
  order: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    sortByOrder(state, action: PayloadAction<"desc" | "asc">) {
      state.products = state.products.sort((a: IProduct, b: IProduct) => {
        if (action.payload === "desc") {
          return b.price - a.price;
        } else {
          return a.price - b.price;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(sortByCategory.fulfilled, (state, action) => {
        state.products = action.payload;
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

export const { sortByOrder } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
