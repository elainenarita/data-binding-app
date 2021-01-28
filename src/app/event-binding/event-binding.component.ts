import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public buttonName: string = "My Button";
  public i: number = 0;

  constructor() { }

  ngOnInit(): void {

  };

  public save() {
    console.log('Click');
  };

  public inc() {
    this.i++;
    this.buttonName = "It was click" + " " + this.i + " " + "times"
  }

}
