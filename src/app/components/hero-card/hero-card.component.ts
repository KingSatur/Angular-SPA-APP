import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Hero, HerosService } from 'src/app/services/heros.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  @Input() hero:Hero = null
  @Output() selectedHero: EventEmitter<number>;

  constructor(private hero_service:HerosService,
              private router:Router) {
      this.selectedHero = new EventEmitter()
  }
    
  ngOnInit() {
  }

  seeHero(){
    let index = this.hero_service.getHeroIndex(this.hero)
    this.selectedHero.emit(index)
  }

}
