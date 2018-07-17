import { Component, ViewChild } from '@angular/core';
import { Hero } from './hero';
import { NgForm } from '../../node_modules/@Angular/forms';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title : string;
  newHeroName : string;
  @ViewChild(HeroesComponent)
  HeroesComponent:HeroesComponent;

  constructor(){
    this.title = 'Tour Of Heroes';
    this.newHeroName='';

  }

  validateHero(event: any, form:NgForm){
    let hero : Hero = new Hero();
    hero.name = this.newHeroName;
    this.HeroesComponent.heroes.push(hero);
    form.resetForm();
  }
 
}
