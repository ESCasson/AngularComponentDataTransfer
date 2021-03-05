import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { AnotherChildComponent } from './another-child/another-child.component';
import { SharingDataService } from "../sharing-data.service";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewInit, OnDestroy  {
   parentMessage = "message from parent";
   message: string;
   isBlack: boolean = true;

   serviceMessage: string;
   subscription: Subscription
   
   @ViewChild(AnotherChildComponent, {static: true}) anotherChild;

  constructor(private data: SharingDataService) { }



  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(message => this.serviceMessage = message)
    this.message = this.anotherChild.message
  }

   ngAfterViewInit() {
    
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleColour($event){
    this.isBlack = !this.isBlack;
    console.log(this.isBlack);
  }

}
