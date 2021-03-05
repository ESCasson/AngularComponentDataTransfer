import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-full-news',
  templateUrl: './full-news.component.html',
  styleUrls: ['./full-news.component.scss']
})
export class FullNewsComponent implements OnInit {
  article: any;

  constructor(private router: Router) { 
     this.article = this.router.getCurrentNavigation().extras.state.article
  }

  ngOnInit() {
     
    console.log('Article', this.article);


 
console.log('from ngOnInit', history.state)
  }

}
