import {Injectable} from "@angular/core";
import {Observable} from 'rxjs';
import {GetCartUseCase} from '../../domain/use-cases';
import {Cart} from "../../domain/entities";

@Injectable({  providedIn: 'root'})
export class CartService {
  constructor(private getCartUseCase: GetCartUseCase) {
  }

  getCart(): Observable<Cart> {
    return this.getCartUseCase.execute();
  }
}
