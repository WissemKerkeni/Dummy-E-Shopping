import {Component, input, output} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatChipSet} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {CustomChipComponent, StarRatingComponent} from '../../../../shared/components';
import {Product} from '../../../../core/domain/entities';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [MatCardModule, MatChipSet, MatIconModule, CustomChipComponent, StarRatingComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  product = input<Product>();
  navigateTo = output<number | undefined>();
  purchase = output<number | undefined>();

}
