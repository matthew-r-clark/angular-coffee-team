import { Component, OnInit } from '@angular/core';
import { ForumService } from '../forum.service';
import { Observable } from 'rxjs';

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
      this.posts = this.ForumService.data[topic];
      this.topic = topic;
    });
  }
}
