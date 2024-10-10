import { RootState } from "../store";

export const selectProducts = (state: RootState) => state.products;
export const selectCartProducts = (state: RootState) => state.cart;
export const selectCartLoading = (state: RootState) => state.loading;
