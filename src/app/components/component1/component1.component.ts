import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  opacity:number = 1;

  constructor() { }

  ngOnInit() {
  }

  onMouseEnter() {
    this.opacity = .3;
    console.log("opacity changed to " + this.opacity);
  }

  onMouseLeave() {
    this.opacity = 1;
    console.log("opacity changed to " + this.opacity);
  }

}
