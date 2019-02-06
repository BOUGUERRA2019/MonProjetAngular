import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
@Input() external: string;
valeur : number = 0;

//1-On crée un evenement au niveau fils
  @Output() valueChange = new EventEmitter();
  //2-On crée une méthode qui emet l'événement
  incrementer(){
    this.valeur++;
    this.valueChange.emit(this.valeur);
  }
  constructor() { }

  ngOnInit() {
  }

}
