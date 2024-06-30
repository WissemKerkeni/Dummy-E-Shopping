export class Review {
  constructor(
    public rating: number,
    public comment: string,
    public date: Date,
    public reviewerName: string,
    public reviewerEmail: string
  ) {
  }

}
