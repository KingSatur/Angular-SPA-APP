import { Component, OnInit } from '@angular/core';
// Importando el servicio
import {HerosService, Hero} from '../../services/heros.service'

// Importando router
import {Router} from '@angular/router'

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styles: []
})
export class HerosComponent implements OnInit {

  heros:Hero[] = []


  // Este es el primero que se inicia
  constructor(private heros_service:HerosService,
              private router:Router) { 
    
  }

// Utilizado cuando la pagina ya esta renderizada
  ngOnInit() {
    this.heros = this.heros_service.getHeros()
    console.log(this.heros)
  }

  seeHero(index:number){
    this.router.navigate(['/Hero', index])
  }

}
