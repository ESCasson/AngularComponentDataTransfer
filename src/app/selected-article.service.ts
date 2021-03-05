import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SelectedArticleService {

  private articleSource = new BehaviorSubject({})
  currentArticle = this.articleSource.asObservable()

  constructor() { }

  changeArticle(article){
    this.articleSource.next(article)
  }
}
