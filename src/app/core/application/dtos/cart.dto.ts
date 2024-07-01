export interface CartDTO {
  id: number;
  products: CartProductDTO[];
  total: number;
}

export interface CartProductDTO {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  thumbnail: string;
}
