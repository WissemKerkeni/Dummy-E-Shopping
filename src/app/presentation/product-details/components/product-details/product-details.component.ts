import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AsyncPipe} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {selectDetailsLoading, selectProductDetails} from '../../../../core/store/selectors';
import {Product} from '../../../../core/domain/entities';
import {ImageComponent, StarRatingComponent} from '../../../../shared/components';
import {loadProductDetails} from "../../../../core/store/actions";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [AsyncPipe, MatButtonModule, MatIcon, ImageComponent, StarRatingComponent, MatProgressSpinner],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly route = inject(ActivatedRoute);

  product$: Observable<Product> = of({} as Product);
  loading$ = this.store.select(selectDetailsLoading);
  mainImage?: string;
  quantity = 0;

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.product$ = this.store.select(selectProductDetails);
    this.store.dispatch(loadProductDetails({id: +(productId || 0)}))
  }

  quantityChange(value: number): void {
    if (this.quantity === 0 && value === -1) {
      return;
    }
    this.quantity += value;
  }

}
