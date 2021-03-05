import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullNewsComponent } from './news/full-news/full-news.component';
import { NewsComponent } from './news/news.component';
import {ParentComponent} from './parent/parent.component';


const routes: Routes = [
  {path:'news', component: NewsComponent},
   {path:'newsItem', component: FullNewsComponent},
   {path:'parent', component: ParentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
