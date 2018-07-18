import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from '../../node_modules/rxjs';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private subject: BehaviorSubject<Array<Hero>>;

  constructor() {
    this.subject = new BehaviorSubject(new Array());
  }

  get heroes(): Observable<Array<Hero>>{
     return this.subject.asObservable();
  }

  loadMock(){
    let mock : Array<Hero>= [
      {
        "id":1,
        "name" : "zelda"
    },
    {
        "id":2,
        "name" : "Kakashi"
    },
    {
        "id":3,
        "name" : "Mario"
    },
    {
        "id":4,
        "name" : "Luigi"
    },
    {
        "id":5,
        "name" : "Luffy"
    },
    {
        "id":6,
        "name" : "Sakura"
    }
    ];

    this.subject.next(mock);
  }

}
