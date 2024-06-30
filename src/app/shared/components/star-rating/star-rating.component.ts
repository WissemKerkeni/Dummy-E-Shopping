import {Component, input} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'star-rating',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {
  rating = input<number>(0)

  get stars() {
    return Array(Math.floor(this.rating())).fill(0);
  }

  get halfStar() {
    return this.rating() % 1 != 0;
  }

  get emptyStars() {
    return Array(Math.floor(5 - this.rating())).fill(0);
  }

}
