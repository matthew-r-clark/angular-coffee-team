import { Injectable, isDevMode } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ForumPost } from './forum-post';
import { HttpClient } from '@angular/common/http';

let developmentUrl: string = "http://localhost:8080/api/GetForumPosts";
let productionUrl: string = "http://express-coffee-team-server.herokuapp.com/api/GetForumPosts";

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  private url: string = isDevMode() ? developmentUrl : productionUrl;
  public currentTopic = new BehaviorSubject<string>('General');
  public posts: ForumPost[];

  constructor(private http: HttpClient) {}

  public init(): BehaviorSubject<string> {
    return this.currentTopic;
  }

  public getPosts(topic: string) {
    return this.http.get(`${this.url}/${encodeURIComponent(topic)}`);
  }

  public getAllPosts() {
    return this.http.get(this.url);
  }

  public changeTopic(topic: string) {
    this.currentTopic.next(topic);
  }
}
