import { Component, OnInit } from '@angular/core';
import { ForumService } from '../forum.service';

@Component({
  selector: 'app-forum-topics',
  templateUrl: './forum-topics.component.html',
  styleUrls: ['./forum-topics.component.css']
})
export class ForumTopicsComponent implements OnInit {
  topics: any;

  constructor(private ForumService: ForumService) { }

  ngOnInit(): void {
    this.ForumService.getAllTopics()
        .subscribe(res => this.topics = res);
  }

  changeTopic(topic) {
    this.ForumService.changeTopic(topic);
  }
}
