export interface IProduct {
  id: number;
  title: string;
  image: string;
  category: string;
  price: number;
  quantity: number;
}

export interface IFilter {
  [key: string]: string;
  category: string;
  order: string;
}
