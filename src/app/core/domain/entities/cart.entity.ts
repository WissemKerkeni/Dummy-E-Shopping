export class Cart {
  constructor(
    public id: number,
    public products: CartProduct[],
    public total: number,
  ) {
  }
}

export class CartProduct {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public quantity: number,
    public total: number,
    public thumbnail: string,
  ) {
  }
}
