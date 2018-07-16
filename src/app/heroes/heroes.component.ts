import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes : Array<Hero>;
  constructor() {
    this.heroes = new Array();
   }

  ngOnInit() {
    this.heroes.push(new Hero('Mario'));
    this.heroes.push(new Hero('Luigi'));
    this.heroes.push(new Hero('Luffy'));


  }

}
