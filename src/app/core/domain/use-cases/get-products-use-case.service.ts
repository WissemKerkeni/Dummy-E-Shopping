import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductRepository} from '../../infrastructure/repositories';
import {Product} from '../entities';

@Injectable({  providedIn: 'root'})
export class GetProductsUseCase {
  private readonly productRepository = inject(ProductRepository);


  execute(searchText: string, page: number): Observable<Product[]> {
    return this.productRepository.getProducts(searchText, page);
  }
}
