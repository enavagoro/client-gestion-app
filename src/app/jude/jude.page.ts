import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jude',
  templateUrl: './jude.page.html',
  styleUrls: ['./jude.page.scss'],
})
export class JudePage implements OnInit {
  cards = [
            {name:'Empresas', content:'Empresas de jude', url:'/enterprise'},
            {name:'Clientes', content:'Clientes de juge', url:'/client'}
          ]

  constructor(private router:Router) { 

  }
  
  goTo(route: string){
    this.router.navigate([route])
  }

  ngOnInit() {
  }

}