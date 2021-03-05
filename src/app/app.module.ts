import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './news/news.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { NewsItemComponent } from './news/news-item/news-item.component';
import { AnotherChildComponent } from './parent/another-child/another-child.component';
import { ToggleColourChildComponent } from './parent/toggle-colour-child/toggle-colour-child.component';
import { HighlightedArticleComponent } from './news/highlighted-article/highlighted-article.component';
import { SiblingComponent } from './sibling/sibling.component';
import { FullNewsComponent } from './news/full-news/full-news.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ParentComponent,
    ChildComponent,
    NewsItemComponent,
    AnotherChildComponent,
    ToggleColourChildComponent,
    HighlightedArticleComponent,
    SiblingComponent,
    FullNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
