import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../protfolio.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  info:Portfolio=new Portfolio("Mahesh",123456);
  infoarray:Array<Portfolio>= new Array();
  

  constructor() {
    let info1 = new Portfolio("vikram",123456789);
    let info2 = new Portfolio("vasu",147258369);
    this.infoarray.push(info1);
    this.infoarray.push(info2);

   }

  ngOnInit(): void {
  }

}
