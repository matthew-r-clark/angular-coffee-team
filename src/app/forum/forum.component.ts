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
  searchQuery: string;
  queryResults: any;

  constructor(private ForumService: ForumService) { }

  ngOnInit(): void {
    this.ForumService.getAllTopics()
        .subscribe(topics => this.topics = topics);
  }

  searchFieldKeyUp(event: any) {
    this.searchQuery = event.target.value;

    if (this.searchQuery) {
      let self = this;
      let timeoutId: any;
  
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = undefined;
      }
  
      timeoutId = setTimeout(() => {
        self.ForumService.getTopicsWithPhrase(self.searchQuery)
            .subscribe(results => self.queryResults = results);
      }, 500);
    } else {
      this.queryResults = undefined;
    }
  }
}
