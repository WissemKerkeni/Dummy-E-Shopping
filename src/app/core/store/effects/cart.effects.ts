import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {CartService} from "../../application/services";
import {loadCart, loadCartFailure, loadCartSuccess} from "../actions";
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
}
