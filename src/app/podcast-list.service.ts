import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PodcastListService {

  apiUrl = "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

  constructor(private http: HttpClient) {}

  getPodcasts() {
    return this.http.get<any>(this.apiUrl);
  }
}
