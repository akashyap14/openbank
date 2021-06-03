import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  rangeValue: number = 100000;
  loanAmount : number = 100000;
  min : number = 100000;
  max:number = 300000;
  rangeValueExpense:number = 0;
  emiTenure = [
    { id:1, months : 3},
    { id:2, months : 6},
    { id:3, months : 9},
    { id:4, months : 12},
  ];
  emi : number = 15000;

  constructor() { }

  ngOnInit(): void {
  }
  sliderValue(val: string){
    (this.rangeValue) = parseInt(val);
  }
  sliderValueExpense(val : string){
    this.rangeValueExpense = parseInt(val);
  }
}
