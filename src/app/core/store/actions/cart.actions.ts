import {createAction, props} from '@ngrx/store';
import {Cart, Product} from '../../domain/entities';

export const loadCart = createAction('[Cart] Load Cart');
export const loadCartSuccess = createAction('[Cart] Load Cart Success', props<{ cart: Cart }>());
export const loadCartFailure = createAction('[Cart] Load Cart Failure', props<{ error: any }>());
export const addToCart = createAction('[Cart] Add to Cart', props<{ product: Product }>());
export const addToCartSuccess = createAction('[Cart] Add to Cart', props<{ cart: Cart }>());
export const editCart = createAction('[Cart] Add to Cart', props<{ product: Product }>());
export const removeFromCart = createAction('[Cart] Remove from Cart', props<{ productId: number }>());
export const clearCart = createAction('[Cart] Clear Cart');
