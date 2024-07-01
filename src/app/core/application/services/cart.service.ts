import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AddToCartUseCase, GetCartUseCase, RemoveFromCartUseCase} from '../../domain/use-cases';
import {Cart} from '../../domain/entities';

@Injectable({providedIn: 'root'})
export class CartService {
  private readonly getCartUseCase = inject(GetCartUseCase);
  private readonly addToCartUseCase = inject(AddToCartUseCase);
  private readonly removeFromCartUseCase = inject(RemoveFromCartUseCase);

  getCart(): Observable<Cart> {
    return this.getCartUseCase.execute();
  }

  addToCart(productId: number): Observable<void> {
    return this.addToCartUseCase.execute(productId);
  }

  removeFromCart(productId: number, quantity: number): Observable<void> {
    return this.removeFromCartUseCase.execute(productId, quantity);
  }
}
