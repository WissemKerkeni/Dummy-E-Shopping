import {createFeature, createReducer, on} from '@ngrx/store';
import {Product} from '../../domain/entities/product.entity';
import {loadProducts, loadProductsSuccess, loadProductsFailure} from '../actions/product.actions';

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: any;
}

export const initialState: ProductState = {
  products: [],
  loading: true,
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
    on(loadProductsFailure, (state, {error}) => ({...state, loading: false, error}))
  )
});
