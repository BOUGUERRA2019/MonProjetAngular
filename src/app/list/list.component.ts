import { Component, OnInit } from '@angular/core';
import {Personne} from '../Model/Personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne[];

  constructor() {
    this.personnes =[
      new Personne(
        1,
       'bouguerra',
        'amel',
        'developpeur',
        33,
       'img1.png'
    ),
    new Personne(
     2,
      'ben ahmed',
      'amin',
     'commercial',
      35,
      'img2.png'

    )



    ];




  }

  ngOnInit() {
  }

}
