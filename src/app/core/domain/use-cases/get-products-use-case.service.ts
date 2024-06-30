import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductRepository} from '../../infrastructure/repositories/product.repository';
import {Product} from '../entities';

@Injectable({
  providedIn: 'root'
})
export class GetProductsUseCase {
  constructor(private productRepository: ProductRepository) {
  }

  execute(searchText: string, page: number): Observable<Product[]> {
    return this.productRepository.getProducts(searchText, page);
  }
}
