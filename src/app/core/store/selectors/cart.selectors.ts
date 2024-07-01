import {ngrxCartFeature} from '../reducers';
import {createSelector} from "@ngrx/store";

export const {selectCart} = ngrxCartFeature;

export const selectCartProducts = createSelector(selectCart, cart => cart.products);
