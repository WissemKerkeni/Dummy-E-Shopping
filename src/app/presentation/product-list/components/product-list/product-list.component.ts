import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {Store} from '@ngrx/store';
import {InfiniteScrollDirective} from 'ngx-infinite-scroll';
import {Subscription} from 'rxjs';
import {selectError, selectLoading, selectProducts} from '../../../../core/store/selectors';
import {addToCart, loadNextPageProducts, loadProducts} from '../../../../core/store/actions';
import {ProductCardComponent} from '../product-card/product-card.component';
import {Product} from "../../../../core/domain/entities";

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [AsyncPipe, ProductCardComponent, MatGridListModule, InfiniteScrollDirective],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit, OnDestroy {
  private readonly store = inject(Store);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  private subscription?: Subscription;

  products$ = this.store.select(selectProducts);
  loading$ = this.store.select(selectLoading);
  error$ = this.store.select(selectError);

  ngOnInit(): void {
    this.subscription = this.route.queryParams.subscribe(params => {
      const searchText = params['search'];
      this.store.dispatch(loadProducts({searchText}));
    });
  }

  onScroll() {
    this.store.dispatch(loadNextPageProducts());
  }

  navigateTo(id: number) {
    this.router.navigate(['products', id]);
  }

  addToCart(product: Product) {
    this.store.dispatch(addToCart({product}));
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
