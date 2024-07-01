import {createFeature, createReducer, on} from '@ngrx/store';
import {Product} from '../../domain/entities';
import {
  loadProducts,
  loadProductsSuccess,
  loadProductsFailure,
  loadProductDetails,
  loadProductDetailsSuccess, loadProductDetailsFailure
} from '../actions';

export interface ProductState {
  products: Product[];
  loading: boolean;
  productDetails: Product;
  detailsLoading: boolean;
  error: any;
}

export const initialState: ProductState = {
  products: [],
  loading: true,
  productDetails: {} as Product,
  detailsLoading: true,
  error: null
};


export const ngrxProductFeature = createFeature({
  name: 'ngrxProduct',
  reducer: createReducer(
    initialState,
    on(loadProducts, state => ({...state, loading: true})),
    on(loadProductsSuccess, (state, {products, reset}) => ({
      ...state,
      products: reset ? products : [...state.products, ...products],
      loading: false,
    })),
    on(loadProductsFailure, (state, {error}) => ({...state, loading: false, error})),
    on(loadProductDetails, state => ({...state, detailsLoading: true})),
    on(loadProductDetailsSuccess, (state, {productDetails}) => ({...state, productDetails, detailsLoading: false})),
    on(loadProductDetailsFailure, state => ({...state, detailsLoading: false})),
  )
});
