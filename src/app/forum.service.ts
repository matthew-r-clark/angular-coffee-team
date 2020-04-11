import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ForumPost } from './forum-post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  private url: string = "http://localhost:8080/api/GetForumPosts";
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
