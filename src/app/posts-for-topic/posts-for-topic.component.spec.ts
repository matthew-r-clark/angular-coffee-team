import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsForTopicComponent } from './posts-for-topic.component';

describe('PostsForTopicComponent', () => {
  let component: PostsForTopicComponent;
  let fixture: ComponentFixture<PostsForTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsForTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsForTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
