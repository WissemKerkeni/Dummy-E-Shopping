import {Component, inject, OnInit} from '@angular/core';
import {selectProductDetails} from "../../../../core/store/selectors";
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {Observable, of} from "rxjs";
import {Product} from "../../../../core/domain/entities";
import {AsyncPipe} from "@angular/common";
import {ImageComponent} from "../../../../shared/components";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [AsyncPipe, ImageComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly route = inject(ActivatedRoute);

  product$: Observable<Product> = of({} as Product);
  mainImage?: string;

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.product$ = this.store.select(selectProductDetails(+(productId || 0)));
  }

}
