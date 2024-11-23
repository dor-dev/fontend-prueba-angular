import { Routes } from '@angular/router';
import { PodcastListComponent } from './podcast-list/podcast-list.component';
import { PodcastDetailComponent } from './podcast-detail/podcast-detail.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';

export const routes: Routes = [
  { path: "", component: PodcastListComponent, }, 
  { path: "podcast-detail/:id", component: PodcastDetailComponent, children: [
    { path: "episode-detail/:id", component: EpisodeDetailComponent }, 
  ] }, 
];
