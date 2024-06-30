import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ProductDTO} from '../../application/dtos/product.dto';
import {Product} from '../../domain/entities';
import {environment} from '../../../../environments/environment';
import {Review} from "../../domain/entities/review.entity";
import {ReviewDTO} from "../../application/dtos";

@Injectable({
  providedIn: 'root'
})
export class ProductRepository {
  private readonly httpClient = inject(HttpClient);

  getProducts(searchText: string, page: number): Observable<Product[]> {
    const limit = 20;
    const skip = page * limit;
    const pagination = `skip=${skip}&limit=${limit}`
    const search = searchText ? `/search?q=${searchText}&` : '?';
    return this.httpClient.get<{ products: ProductDTO[] }>(`${environment.apiUrl}/products${search}${pagination}`).pipe(
      map(({products}) => products.map(product => this.mapProductDTOToProduct(product)))
    );
  }

  private mapProductDTOToProduct(productDTO: ProductDTO): Product {
    const createdAt = new Date(productDTO.createdAt);
    const isNewProduct = (new Date().getTime() - createdAt.getTime()) / (1000 * 3600 * 24) <= 3;

    return new Product(
      productDTO.id,
      productDTO.title,
      productDTO.description,
      productDTO.price,
      productDTO.price * 100 / (100 - productDTO.discountPercentage),
      productDTO.discountPercentage,
      productDTO.rating,
      productDTO.stock,
      productDTO.brand,
      productDTO.category,
      productDTO.thumbnail,
      productDTO.images,
      createdAt,
      productDTO.price < 50,
      productDTO.price < 10,
      isNewProduct,
      productDTO.reviews.length ? productDTO.reviews.map(this.mapReviewDTOToReview) : [],
    );
  }

  private mapReviewDTOToReview(reviewDTO: ReviewDTO): Review {
    return new Review(
      reviewDTO.rating,
      reviewDTO.comment,
      new Date(reviewDTO.date),
      reviewDTO.reviewerName,
      reviewDTO.reviewerEmail,
    );
  }
}
