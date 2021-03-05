import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { SelectedArticleService } from 'src/app/selected-article.service';

@Component({
  selector: 'app-highlighted-article',
  templateUrl: './highlighted-article.component.html',
  styleUrls: ['./highlighted-article.component.scss']
})
export class HighlightedArticleComponent implements OnInit {

  article: any;
  subscription: Subscription;

  constructor(private selectedArticle: SelectedArticleService) { }

  ngOnInit() {
    this.subscription = this.selectedArticle.currentArticle.subscribe(article => this.article = article)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
