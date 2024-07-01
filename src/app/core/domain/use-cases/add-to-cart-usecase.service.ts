import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CartRepository} from '../../infrastructure/repositories';


@Injectable({providedIn: 'root'})
export class AddToCartUseCase {
  private readonly cartRepository = inject(CartRepository);

  execute(productId: number): Observable<void> {
    return this.cartRepository.addToCart(productId);
  }

}
