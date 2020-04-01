import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  data = {
    General: [],
    Recipes: [],
    'fav brew method?': [
      { title: 'aeropress', author: 'mattata', time: '6:04pm 03/30/2020', message: 'the most versatile method i know of...', replies: [
        { author: 'jarambe', time: '6:13pm 03/30/2020', message: 'Yeah it really is!'},
        { author: 'mattata', time: '6:42pm 03/30/2020', message: 'what is your favorite recipe?'},
      ] },
      { title: 'Kalita', author: 'jarambe', time: '8:27am 04/01/2020', message: 'My favorite method now days is the Kalita. Love how consistent it is.'},
    ],
    'v60 vs aeropress': [],
    'what does everyone think of James Hoffman?': [],
  };
  public currentTopic = new BehaviorSubject<string>('General');
  public posts;

  constructor() {}

  public init(): BehaviorSubject<string> {
    return this.currentTopic;
  }

  public changeTopic(topic) {
    this.currentTopic.next(topic);
  }

  public getTopics() {
    return Object.keys(this.data);
  }
}
