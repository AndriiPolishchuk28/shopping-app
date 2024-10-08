import { createSlice, PayloadAction, isAnyOf } from "@reduxjs/toolkit";
import { getProducts, sortByCategory, sortByOrder } from "./operations";
import { IProduct } from "./interface";

export interface UsersState {
  products: IProduct[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  products: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(sortByCategory.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(sortByOrder.fulfilled, (state, action) => {
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

// export const { setFilter, clearFilter } = usersSlice.actions;

export const productsReducer = productsSlice.reducer;
