import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiples-three-and-five',
  templateUrl: './multiples-three-and-five.component.html',
  styleUrls: ['./multiples-three-and-five.component.scss']
})
export class MultiplesThreeAndFiveComponent implements OnInit {


  sum = this.math();

  constructor() { }

  ngOnInit() {
  }

  math() {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
  }

}
