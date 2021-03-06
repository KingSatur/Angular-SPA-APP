import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Rutas
import {APP_ROUTING} from './app.routes';


// Servicios
import {HerosService} from './services/heros.service'

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HerosComponent } from './components/heros/heros.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroSearchedComponent } from './components/hero-searched/hero-searched.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HerosComponent,
    HeroComponent,
    HeroSearchedComponent,
    HeroCardComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  // Todos los servicios van aca
  providers: [
    HerosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
