import { Component, OnInit } from '@angular/core';
import { ForumService } from '../forum.service';
import { ForumTopic } from '../forum-topic';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  topics: any;

  constructor(private ForumService: ForumService) { }

  ngOnInit(): void {
    this.ForumService.getAllTopics()
        .subscribe(topics => this.topics = topics);
  }
}
