import { Injectable, isDevMode } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ForumPost } from './forum-post';
import { HttpClient } from '@angular/common/http';

let apiUrl: string;
if (isDevMode()) {
  apiUrl = "http://localhost:8080/api/GetForumPosts";
} else {
  apiUrl = "http://express-coffee-team-server.herokuapp.com/api/GetForumPosts";
}

@Injectable({
  providedIn: 'root'
})
export class ForumService {  
  public currentTopic = new BehaviorSubject<string>('General');
  public posts: ForumPost[];

  constructor(private http: HttpClient) {}

  public init(): BehaviorSubject<string> {
    return this.currentTopic;
  }

  public getPosts(topic: string) {
    return this.http.get(`${apiUrl}/${encodeURIComponent(topic)}`);
  }

  public getAllPosts() {
    return this.http.get(apiUrl);
  }

  public changeTopic(topic: string) {
    this.currentTopic.next(topic);
  }
}
