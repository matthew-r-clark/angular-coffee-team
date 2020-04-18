import { Component, OnInit } from '@angular/core';
import { ForumService } from '../forum.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-for-topic',
  templateUrl: './posts-for-topic.component.html',
  styleUrls: ['./posts-for-topic.component.css']
})
export class PostsForTopicComponent implements OnInit {
  topic: any;
  posts: any;
  topic_id: string;

  constructor(
    private route: ActivatedRoute,
    private ForumService: ForumService
  ) { }

  ngOnInit(): void {
    this.topic_id = this.route.snapshot.paramMap.get('id');

    this.ForumService.getTopic(this.topic_id)
        .subscribe(topic => this.topic = topic);

    this.ForumService.getPostsForTopic(this.topic_id)
        .subscribe(posts => this.posts = posts);
  }
}
