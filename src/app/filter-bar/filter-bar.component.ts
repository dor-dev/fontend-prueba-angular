import { Component } from '@angular/core';
import { PodcasterInputComponent } from '../podcaster-input/podcaster-input.component';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [PodcasterInputComponent],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.scss'
})
export class FilterBarComponent {

}
