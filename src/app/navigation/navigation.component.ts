import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  selected: string;

  constructor() { }

  ngOnInit(): void {
  }

  public setSelected(page:string): void {
    this.selected = page;
  }
}
