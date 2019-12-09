import {RouterModule, Routes} from '@angular/router'
import {Component} from '@angular/core'
import {HomeComponent} from './components/home/home.component';
import {HerosComponent} from './components/heros/heros.component';
import {AboutComponent} from './components/about/about.component';
import {HeroComponent} from './components/hero/hero.component';
import {HeroSearchedComponent} from './components/hero-searched/hero-searched.component';


const APP_ROUTES: Routes = [
    {path: 'Home', component: HomeComponent},
    {path: 'About', component: AboutComponent},
    {path: 'Heros', component: HerosComponent},
    // La ruta Hero necesita usar un parametro el cual sera el id del hero
    /* Otra cuestion importante es que Hero es una subpagina,
    lo que quiere decir que para llegar a ella primero
    debemos llegar a otra pagina por lo tanto se debe especificar en el path */
    {path: 'Hero/:id', component: HeroComponent},
    {path: 'HerosSearched/:words', component: HeroSearchedComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'Home'}
]

// useHashes es para indicar que se usara el hashtag en el routing
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)