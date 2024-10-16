import { RootState } from "../store";

export const selectProducts = (state: RootState) => state.products;
export const selectProductsCategory = (state: RootState) =>
  state.productsCategory;
export const selectCartProducts = (state: RootState) => state.cart;
export const selectCartLoading = (state: RootState) => state.loading;
export const selectCategory = (state: RootState) => state.filter.category;
export const selectOrder = (state: RootState) => state.filter.order;
