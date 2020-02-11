import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   userInputs: string[];
   displayLetter: string[];

  constructor() { }

  ngOnInit() {
    this.userInputs = [];
    this.displayLetter = [];
  }

  addNewLetter(event: string[]) {
    if (this.userInputs) {
      console.log('the box value is :' + this.userInputs);
      this.displayLetter.push(this.userInputs[this.userInputs.length - 1]);
    }
  }
}
