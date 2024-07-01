import {Component, input} from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'image',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent {
  url = input<string>('');
  padding = input<string>('0.875rem');
  background = input<string>('#F5F5F5');
  loading = true;

}
