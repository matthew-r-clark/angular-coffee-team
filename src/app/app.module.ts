import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ChartsPageComponent } from './charts-page/charts-page.component';
import { CommunityPageComponent } from './community-page/community-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForumTopicsComponent } from './forum-topics/forum-topics.component';
import { ForumComponent } from './forum/forum.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'charts', component: ChartsPageComponent },
  { path: 'community', component: CommunityPageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomePageComponent,
    AboutPageComponent,
    ChartsPageComponent,
    CommunityPageComponent,
    PageNotFoundComponent,
    ForumTopicsComponent,
    ForumComponent
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
