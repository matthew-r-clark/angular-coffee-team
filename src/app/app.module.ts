import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ChartsPageComponent } from './charts-page/charts-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForumComponent } from './forum/forum.component';
import { PostsForTopicComponent } from './posts-for-topic/posts-for-topic.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'charts', component: ChartsPageComponent },
  { path: 'community', component: ForumComponent },
  { path: 'community/posts/:id', component: PostsForTopicComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomePageComponent,
    AboutPageComponent,
    ChartsPageComponent,
    PageNotFoundComponent,
    ForumComponent,
    PostsForTopicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
