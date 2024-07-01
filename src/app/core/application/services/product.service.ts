import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../domain/entities';
import {GetProductsUseCase} from "../../domain/use-cases";

@Injectable({providedIn: 'root'})
export class ProductService {
  constructor(private getProductsUseCase: GetProductsUseCase) {
  }

  getProducts(searchText: string, page: number): Observable<Product[]> {
    return this.getProductsUseCase.execute(searchText, page);
  }
}
