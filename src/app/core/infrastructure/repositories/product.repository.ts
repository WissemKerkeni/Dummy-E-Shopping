import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ProductDTO} from '../../application/dtos/product.dto';
import {Product} from '../../domain/entities';
import {environment} from '../../../../environments/environment';

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
      map(({products}) => products.map(this.mapProductDTOToProduct))
    );
  }

  private mapProductDTOToProduct(productDTO: ProductDTO): Product {
    const createdAt = new Date(productDTO.createdAt);
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
      (new Date().getTime() - createdAt.getTime()) / (1000 * 3600 * 24) <= 3
    );
  }
}
