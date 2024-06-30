export class Product {

  constructor(
    public id: number,
    public title: string,
    public description: string,
    public price: number,
    public oldPrice: number,
    public discountPercentage: number,
    public rating: number,
    public stock: number,
    public brand: string,
    public category: string,
    public thumbnail: string,
    public images: string[],
    public createdAt: Date,
    public hasDiscount: boolean,
    public isNew: boolean,
    public isFlashSale: boolean,
  ) {}
}
