import { Component, OnInit, Input } from '@angular/core';
import { Crib } from './../crib';

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
export class CribCardComponent implements OnInit {

  @Input ('crib') crib: Crib;

  constructor() { }

  ngOnInit() {
    let area = this.crib.area;
    // let kitchen = this.crib.kitchens;
  }

}
