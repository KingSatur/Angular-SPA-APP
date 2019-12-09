import { Component, OnInit } from '@angular/core';
// Para recibir el parametro que se envia por URL
import { ActivatedRoute } from '@angular/router'
import {Hero, HerosService} from '../../services/heros.service'


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero:Hero = null
  heroHomeImg:string

  constructor(private activated_route: ActivatedRoute,
              private heroService: HerosService) {
    // Obteniendo parametros 
    this.activated_route.params.subscribe( params => {
      this.hero = heroService.getHero(params['id'])
      this.heroHomeImg = this.hero.casa === "DC" ? "assets/img/DC.png" : "assets/img/marvel.png"
    })
  }
  ngOnInit() {
  }

}
