import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, switchMap, concatMap, tap} from 'rxjs/operators';
import {ProductService} from '../../application/services/product.service';
import {loadProducts, loadProductsSuccess, loadProductsFailure, loadNextPageProducts} from '../actions';

interface ProductQuery {
  searchText: string;
  page: number;
}

@Injectable()
export class ProductEffects {

  private readonly actions$ = inject(Actions);
  private readonly productService = inject(ProductService);

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      tap(({searchText}) => this.query = {searchText, page: 0}),
      switchMap(() =>
        this.productService.getProducts(this.query.searchText, this.query.page).pipe(
          map(products => loadProductsSuccess({products, reset: true})),
          catchError(error => of(loadProductsFailure({error})))
        )
      )
    )
  );

  loadNextPageProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadNextPageProducts),
      tap(() => this.query.page++),
      concatMap(() =>
        this.productService.getProducts(this.query.searchText, this.query.page).pipe(
          map(products => loadProductsSuccess({products})),
          catchError(error => of(loadProductsFailure({error})))
        )
      )
    )
  );

  private query: ProductQuery = {searchText: '', page: 0};
}
