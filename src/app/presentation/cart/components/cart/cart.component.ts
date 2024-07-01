import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatIcon} from '@angular/material/icon';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {CartProduct} from '../../../../core/domain/entities';
import {selectCart, selectCartProducts} from "../../../../core/store/selectors";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {ImageComponent} from "../../../../shared/components";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatTableModule, MatIcon, MatInput, MatButtonModule, AsyncPipe, FormsModule, ImageComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit, OnDestroy {
  private readonly store = inject(Store);

  dataSource = new MatTableDataSource<CartProduct>();

  cart$ = this.store.select(selectCart);

  private subscription?: Subscription;

  displayedColumns: string[] = [
    'product',
    'price',
    'quantity',
    'subtotal',
    'action'
  ];

  ngOnInit(): void {
    this.subscription = this.store.select(selectCartProducts).subscribe(
      products => this.dataSource = new MatTableDataSource<CartProduct>(products)
    )
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
