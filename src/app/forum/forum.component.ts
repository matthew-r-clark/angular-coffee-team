import { Component, OnInit } from '@angular/core';
import { ForumService } from '../forum.service';
import { ForumTopic } from '../forum-topic';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  topics: any;

  constructor(private ForumService: ForumService) { }

  ngOnInit(): void {
    // this.ForumService.init().subscribe(topic => {
    //   this.ForumService.getPostsForTopic(topic).subscribe(res => this.posts = res);
    //   this.topic = topic;
    // });

    this.ForumService.getAllTopics()
        .subscribe(topics => this.topics = topics);
  }
}
