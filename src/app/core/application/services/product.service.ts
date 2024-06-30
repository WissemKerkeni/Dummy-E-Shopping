import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../domain/entities/product.entity';
import {GetProductsUseCase} from "../../domain/use-cases/get-products-use-case.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private getProductsUseCase: GetProductsUseCase) {
  }

  getProducts(searchText: string, page: number): Observable<Product[]> {
    return this.getProductsUseCase.execute(searchText, page);
  }
}
