import { Component, OnInit } from '@angular/core';
import { ForumService } from '../forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  posts;
  topic: string;

  constructor(private ForumService: ForumService) { }

  ngOnInit(): void {
    this.ForumService.init().subscribe(topic => {
      this.ForumService.getPosts(topic).subscribe(res => this.posts = res);
      this.topic = topic;
    });
  }
}
