import {ngrxProductFeature} from '../reducers';
import {createSelector} from "@ngrx/store";
import {Product} from "../../domain/entities";

export const {selectProducts, selectLoading, selectError} = ngrxProductFeature;

export const selectProductDetails = (id: number) => createSelector(selectProducts, products => products.find(p => p.id === id) || {} as Product);
