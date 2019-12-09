import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { HerosService,Hero } from 'src/app/services/heros.service';

@Component({
  selector: 'app-hero-searched',
  templateUrl: './hero-searched.component.html',
  styleUrls: ['./hero-searched.component.css']
})
export class HeroSearchedComponent implements OnInit {

  heroSearch: Hero[]

  constructor(private activated_route:ActivatedRoute,
              private hero_service:HerosService,
              private router:Router) { 

  }

  ngOnInit() {
    this.activated_route.params.subscribe( params => {
      let words = params['words']
      this.heroSearch = this.hero_service.searchHeros(words)
    })
  }

  seeHero(index:number){
    this.router.navigate(['/Hero', index])
  }

}
