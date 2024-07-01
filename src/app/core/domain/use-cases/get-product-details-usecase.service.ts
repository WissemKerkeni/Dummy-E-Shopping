import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductRepository} from '../../infrastructure/repositories';
import {Product} from '../entities';


@Injectable({providedIn: 'root'})
export class GetProductDetailsUseCase {
  private readonly productRepository = inject(ProductRepository);

  execute(id: number): Observable<Product> {
    return this.productRepository.getProductDetails(id);
  }

}
