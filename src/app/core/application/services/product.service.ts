import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../domain/entities';
import {GetProductsUseCase} from "../../domain/use-cases";
import {GetProductDetailsUseCase} from "../../domain/use-cases/get-product-details-usecase.service";

@Injectable({providedIn: 'root'})
export class ProductService {
  private readonly getProductsUseCase = inject(GetProductsUseCase);
  private readonly getProductDetailsUseCase = inject(GetProductDetailsUseCase);

  getProducts(searchText: string, page: number): Observable<Product[]> {
    return this.getProductsUseCase.execute(searchText, page);
  }

  getProductDetails(id: number): Observable<Product> {
    return this.getProductDetailsUseCase.execute(id);
  }
}
