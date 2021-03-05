import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { SharingDataService } from '../sharing-data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  articles;
  selectedArticle: any;

  constructor(private apiService: ApiService,
    private data : SharingDataService,
    public router: Router) { }

  ngOnInit() 
    {
    this.apiService.getNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }
    
 
  
   newMessage() {
    this.data.changeMessage("Hello from News")
  }





}
