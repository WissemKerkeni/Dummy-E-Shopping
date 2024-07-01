import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AsyncPipe} from '@angular/common';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {selectProductDetails} from '../../../../core/store/selectors';
import {Product} from '../../../../core/domain/entities';
import {ImageComponent, StarRatingComponent} from "../../../../shared/components";
import {MatButton, MatButtonModule, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [AsyncPipe, MatButtonModule, MatIcon, ImageComponent, StarRatingComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly route = inject(ActivatedRoute);

  product$: Observable<Product> = of({} as Product);
  mainImage?: string;
  quantity = 0;

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.product$ = this.store.select(selectProductDetails(+(productId || 0)));
  }

  quantityChange(value: number): void {
    if (this.quantity === 0 && value === -1) {
      return;
    }
    this.quantity += value;
  }

}
