import {Component, input} from '@angular/core';
import {MatChipsModule} from "@angular/material/chips";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'custom-chip',
  standalone: true,
  imports: [CommonModule, MatChipsModule],
  templateUrl: './custom-chip.component.html',
  styleUrl: './custom-chip.component.scss'
})
export class CustomChipComponent {
  color = input<string>();
  backgroundColor = input<string>();

}
