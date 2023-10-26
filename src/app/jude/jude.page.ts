import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jude',
  templateUrl: './jude.page.html',
  styleUrls: ['./jude.page.scss'],
})
export class JudePage implements OnInit {

  constructor(private router:Router) { }
  goToEnterprises(){
    this.router.navigate(['/enterprise'])
  }
  goToClients(){
    this.router.navigate(['/client'])
  }

  ngOnInit() {
  }

}