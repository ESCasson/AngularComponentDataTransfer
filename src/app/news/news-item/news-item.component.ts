import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SelectedArticleService } from 'src/app/selected-article.service';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {
  @Input() article
 

  constructor(private articleService: SelectedArticleService,
    public router: Router) { }

  

  ngOnInit() {

  }

  sendArticle() {
    this.articleService.changeArticle(this.article)
  }

    navigateToFullNews(){
      


  this.router.navigateByUrl('newsItem', {state: {article: this.article}})
  }

}
