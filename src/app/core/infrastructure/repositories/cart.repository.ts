import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Cart, CartProduct} from '../../domain/entities';
import {environment} from '../../../../environments/environment';
import {CartDTO, CartProductDTO} from '../../application/dtos';

@Injectable({providedIn: 'root'})
export class CartRepository {
  private readonly httpClient = inject(HttpClient);

  getCart(): Observable<Cart> {
    return this.httpClient.get<CartDTO>(`${environment.apiUrl}/carts/1`).pipe(
      map((cart) => this.mapCartDTOToCart(cart))
    );
  }

  private mapCartDTOToCart(cartDTO: CartDTO): Cart {
    return new Cart(
      cartDTO.id,
      cartDTO.products.map(this.mapCartProductDTOToCartProduct),
      cartDTO.id,
    );
  }

  private mapCartProductDTOToCartProduct(cartProductDTO: CartProductDTO): CartProduct {
    return new CartProduct(
      cartProductDTO.id,
      cartProductDTO.title,
      cartProductDTO.price,
      cartProductDTO.quantity,
      cartProductDTO.total,
      cartProductDTO.thumbnail,
    );
  }
}
