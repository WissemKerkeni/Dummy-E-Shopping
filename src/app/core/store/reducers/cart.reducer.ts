import {createFeature, createReducer, on} from '@ngrx/store';
import {removeFromCart, clearCart, addToCartSuccess, loadCartSuccess} from '../actions';
import {Cart} from '../../domain/entities';

export interface CartState {
  cart: Cart;
}

const initialState: CartState = {
  cart: {
    id: 0,
    products: [],
    total: 0
  }
};

export const ngrxCartFeature = createFeature({
  name: 'ngrxCart',
  reducer: createReducer(
    initialState,
    on(loadCartSuccess, (state, {cart}) => ({cart})),
    on(addToCartSuccess, (state, {cart}) => ({
      ...state, cart
    })),
    on(removeFromCart, (state, {productId}) => {
      const restOfProducts = state.cart.products.filter(p => p.id !== productId);

      return {
        ...state,
        cart: {
          ...state.cart,
          products: [...restOfProducts],
          total: restOfProducts.reduce((acc, u) => acc + u.total, 0)
        }
      }
    }),
    on(clearCart, state => ({
      ...state, cart: {...state.cart, products: [], total: 0}
    }))
  )
});
