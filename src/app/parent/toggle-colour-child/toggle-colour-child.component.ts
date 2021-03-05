import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-colour-child',
  templateUrl: './toggle-colour-child.component.html',
  styleUrls: ['./toggle-colour-child.component.scss']
})
export class ToggleColourChildComponent implements OnInit {

    @Output() messageEvent = new EventEmitter<string>();
     message: string = "Hola Mundo!"

  constructor() { }

  ngOnInit() {
  }

   toggleColour() {
    this.messageEvent.emit('toggle')
  }

}
