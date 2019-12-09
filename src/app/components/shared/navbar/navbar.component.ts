import { Component, OnInit } from '@angular/core';
import { HerosService, Hero } from 'src/app/services/heros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) {
   }
  
  ngOnInit() {
  }

  searchHero(words:string){
    // console.log(actualHeros)
    this.router.navigate(['/HerosSearched', words])
  }

}
