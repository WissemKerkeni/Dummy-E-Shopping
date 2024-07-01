import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CartRepository} from '../../infrastructure/repositories';
import {Cart} from '../entities';

@Injectable({  providedIn: 'root'})
export class GetCartUseCase {
  constructor(private cartRepository: CartRepository) {
  }

  execute(): Observable<Cart> {
    return this.cartRepository.getCart();
  }
}
