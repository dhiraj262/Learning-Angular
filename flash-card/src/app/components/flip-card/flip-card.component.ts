import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      state('',style({
        visibility: "false",
        transform: "scale(0.05)",
        opacity: 0
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class FlipCardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  flip = {
    state:'inactive',
    id:0
  };

  toggleFlip() {
    this.flip.state = (this.flip.state == 'inactive') ? 'active' : 'inactive';
  }
}
