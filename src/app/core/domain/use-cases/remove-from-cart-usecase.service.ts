import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CartRepository} from '../../infrastructure/repositories';


@Injectable({providedIn: 'root'})
export class RemoveFromCartUseCase {
  private readonly cartRepository = inject(CartRepository);

  execute(productId: number, quantity: number): Observable<void> {
    return this.cartRepository.removeFromCart(productId, quantity);
  }

}
