import { Component, OnInit } from '@angular/core';
import { ForumService } from '../forum.service';

@Component({
  selector: 'app-forum-topics',
  templateUrl: './forum-topics.component.html',
  styleUrls: ['./forum-topics.component.css']
})
export class ForumTopicsComponent implements OnInit {
  topics: string[];

  constructor(private ForumService: ForumService) { }

  ngOnInit(): void {
    this.topics = this.ForumService.getTopics();
  }

  changeTopic(topic) {
    this.ForumService.changeTopic(topic);
  }
}
