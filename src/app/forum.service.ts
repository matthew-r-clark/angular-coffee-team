import { Injectable, isDevMode } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ForumPost } from './forum-post';
import { HttpClient } from '@angular/common/http';

let developmentUrl: string = "http://localhost:8080/api/GetForumPosts";
let productionUrl: string = "https://express-coffee-team-server.herokuapp.com/api/GetForumPosts";

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  private url: string = isDevMode() ? developmentUrl : productionUrl;
  public currentTopic = new BehaviorSubject<string>('General');
  public posts: ForumPost[];

  constructor(private http: HttpClient) {}

  public getPostsForTopic(topic: string) {
    return this.http.get(`${this.url}/posts/${topic}`);
  }

  public getTopic(topic: string) {
    return this.http.get(`${this.url}/topics/${topic}`)
  }

  public getAllTopics() {
    return this.http.get(`${this.url}/topics`);
  }

  public getTopicsWithPhrase(phrase: string) {
    return this.http.get(`${this.url}/search/${phrase}`);
  }
}
