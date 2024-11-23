import { Component, OnInit } from '@angular/core';
import { FilterBarComponent } from '../filter-bar/filter-bar.component';
import { PodcastListItemComponent } from '../podcast-list-item/podcast-list-item.component';
import { PodcastListService } from '../podcast-list.service';

@Component({
  selector: 'app-podcast-list',
  standalone: true,
  imports: [FilterBarComponent, PodcastListItemComponent],
  templateUrl: './podcast-list.component.html',
  styleUrl: './podcast-list.component.scss'
})
export class PodcastListComponent implements OnInit {
  podcasts: any[] = [];

  constructor(private podcastService: PodcastListService) {}

  ngOnInit() {
    this.podcastService.getPodcasts().subscribe(data => {
      console.log(data.feed.entry);
      
      this.podcasts = data.feed.entry.map((item: any) => {
        return {
          title: item["title"]["label"], 
          artist: item["im:artist"]["label"], 
          src: item["im:image"][item["im:image"].length - 1]["label"], 
        };
      });
    });
  }
}