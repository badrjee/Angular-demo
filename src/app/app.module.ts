import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@Angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { AppComponent } from './app.component';
import { HeroService } from './hero.service';
import { ROUTES } from './route';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
