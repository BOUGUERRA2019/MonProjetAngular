import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {
  title = 'app works!';
  result: any ='N/A';
  //5-Executer la methode showValue
  showValue(value){
    this.result = value;

  }

  constructor() { }

  ngOnInit() {
  }

}
