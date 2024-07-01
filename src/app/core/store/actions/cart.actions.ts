import {createAction, props} from '@ngrx/store';
import {Cart, Product} from '../../domain/entities';

export const loadCart = createAction('[Cart] Load Cart');
export const loadCartSuccess = createAction('[Cart] Load Cart Success', props<{ cart: Cart }>());
export const loadCartFailure = createAction('[Cart] Load Cart Failure', props<{ error: any }>());
export const addToCart = createAction('[Cart] Add To Cart', props<{ product: Product }>());
export const addToCartSuccess = createAction('[Cart] Add To Cart Success', props<{ product: Product }>());
export const updateCartProductSuccess = createAction('[Cart] Update Cart Product Success', props<{
  productId: number, quantity: number
}>());
export const removeFromCart = createAction('[Cart] Remove From Cart', props<{ productId: number }>());
export const removeFromCartSuccess = createAction('[Cart] Remove From Cart Success', props<{ productId: number }>());
export const clearCart = createAction('[Cart] Clear Cart');
