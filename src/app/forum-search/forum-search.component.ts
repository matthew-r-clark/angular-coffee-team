import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum-search',
  templateUrl: './forum-search.component.html',
  styleUrls: ['./forum-search.component.css']
})
export class ForumSearchComponent implements OnInit {
  data = 'here is some data from ForumSearchComponent';

  constructor() { }

  ngOnInit(): void {
  }

}
