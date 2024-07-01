import { createAction, props } from '@ngrx/store';
import { Product } from '../../domain/entities';

export const loadProducts = createAction('[Product] Load Products', props<{ searchText: string }>());
export const loadNextPageProducts = createAction('[Product] Load Next Page Products');
export const loadProductsSuccess = createAction('[Product] Load Products Success', props<{ products: Product[], reset?: boolean }>());
export const loadProductsFailure = createAction('[Product] Load Products Failure', props<{ error: any }>());
export const loadProductDetails = createAction('[Product] Load Product Details', props<{ id: number }>());
export const loadProductDetailsSuccess = createAction('[Product] Load Products Details Success', props<{ productDetails: Product }>());
export const loadProductDetailsFailure = createAction('[Product] Load Products Details Failure');

