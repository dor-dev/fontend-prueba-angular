import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-podcast-list-item',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './podcast-list-item.component.html',
  styleUrl: './podcast-list-item.component.scss'
})
export class PodcastListItemComponent {
  @Input() item: any;
}
