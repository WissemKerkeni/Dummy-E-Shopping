import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {CartService} from "../../application/services";
import {
  addToCart,
  addToCartSuccess,
  loadCart,
  loadCartFailure,
  loadCartSuccess,
  removeFromCart,
  removeFromCartSuccess
} from "../actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs";

@Injectable()
export class CartEffects {

  private readonly actions$ = inject(Actions);
  private readonly cartService = inject(CartService);

  loadCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCart),
      switchMap(() =>
        this.cartService.getCart().pipe(
          map(cart => loadCartSuccess({cart})),
          catchError(error => of(loadCartFailure({error})))
        )
      )
    )
  );

  addToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToCart),
      switchMap(({product}) =>
        this.cartService.addToCart(product.id).pipe(
          map(() => addToCartSuccess({product})))
      )
    )
  );

  removeFromCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeFromCart),
      switchMap(({productId}) =>
        this.cartService.removeFromCart(productId, 0).pipe(
          map(() => removeFromCartSuccess({productId})))
      )
    )
  );
}
