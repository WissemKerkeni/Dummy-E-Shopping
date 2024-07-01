import {createFeature, createReducer, on} from '@ngrx/store';
import {clearCart, addToCartSuccess, loadCartSuccess, removeFromCartSuccess} from '../actions';
import {Cart, CartProduct, Product} from '../../domain/entities';

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
    on(addToCartSuccess, (state, {product}) => {
      const products = addOrUpdateProduct(state.cart.products, product);
      return {
        ...state,
        cart: {
          ...state.cart,
          products,
          total: products.reduce((acc, u) => acc + u.total, 0)
        }
      }
    }),
    on(removeFromCartSuccess, (state, {productId, quantity}) => {
      let product = state.cart.products.find(p => p.id === productId) || {} as CartProduct;
      product.quantity -= quantity;
      const restOfProducts = state.cart.products.filter(p => p.id !== product.id);
      const products = product.quantity === 0 ? [...restOfProducts] : updateProduct(state.cart.products, product);

      return {
        ...state,
        cart: {
          ...state.cart,
          products,
          total: products.reduce((acc, u) => acc + u.total, 0)
        }
      }
    }),
    on(clearCart, state => ({
      ...state, cart: {...state.cart, products: [], total: 0}
    }))
  )
});

const updateProduct = (products: CartProduct[], payload: CartProduct): CartProduct[] => {
  const index = products.findIndex((p) => p.id === payload.id);
  return [
    ...products.slice(0, index),
    Object.assign({}, products[index], payload),
    ...products.slice(index + 1),
  ];
}

const addOrUpdateProduct = (products: CartProduct[], product: Product): CartProduct[] => {
  const index = products.findIndex((p) => p.id === product.id);
  if (index < 0) {
    const newCartProduct: CartProduct = {
      id: product.id,
      title: product.title,
      quantity: 1,
      total: product.price,
      price: product.price,
      thumbnail: product.thumbnail,

    };
    return [...products, newCartProduct];
  }
  products[index].quantity++;
  const updatedProduct = products[index];
  return [
    ...products.slice(0, index),
    Object.assign({}, products[index], updatedProduct),
    ...products.slice(index + 1),
  ];
}