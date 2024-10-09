import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, Category } from "../../constants";

import { IProduct } from "./interface";

axios.defaults.baseURL = BASE_URL;

export const getProducts = createAsyncThunk<
  IProduct[],
  undefined,
  { rejectValue: string }
>("products", async (_, thunkApi) => {
  try {
    const { data } = await axios.get<IProduct[]>("/products");
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue((error as Error).message);
  }
});

export const sortByCategory = createAsyncThunk<
  IProduct[],
  Category,
  { rejectValue: string }
>("sortCategory", async (category, thunkApi) => {
  try {
    const { data } = await axios.get<IProduct[]>(
      `/products/category/${category}`
    );
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue((error as Error).message);
  }
});
