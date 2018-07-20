import { Component, ViewChild, OnInit } from '@angular/core';
import { Hero } from './hero';
import { NgForm } from '@Angular/forms';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  title : string;
  newHeroName : string;
  @ViewChild(HeroesComponent)
  HeroesComponent:HeroesComponent;

  constructor(private heroService: HeroService){
    this.title = 'Tour Of Heroes';
    

  }

  ngOnInit(){
    this.heroService.loadMock();
  }

  validateHero(event: any, form: NgForm){
    let hero : Hero = new Hero();
    hero.name = this.newHeroName;
    this.HeroesComponent.heroes.push(hero);
    form.resetForm();
  }
 
}
