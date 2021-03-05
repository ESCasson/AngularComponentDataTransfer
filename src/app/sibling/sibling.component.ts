import { Component, OnInit } from '@angular/core';
import { SharingDataService } from "../sharing-data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss']
})
export class SiblingComponent implements OnInit {
   message:string;
  subscription: Subscription;

  constructor(private data: SharingDataService) { }

  ngOnInit() {
     this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
  }

   ngOnDestroy() {
    this.subscription.unsubscribe();
  }

 

}
