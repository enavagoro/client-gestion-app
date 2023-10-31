import { Component, OnInit } from '@angular/core';
import { EnterpriseService } from '../_services/enteprise.service'

interface Enteprise{
  name: string
  key: string
  paymentStatus: string
}

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.page.html',
  styleUrls: ['./enterprise.page.scss'],
})
export class EnterprisePage implements OnInit {
  enterprises: Enteprise[] = []


  constructor(private enterpriseService: EnterpriseService) { 

  }

  ngOnInit() {
    /*this.enterpriseService.listEnterprise().subscribe(result => {
        this.enterprises = result;
    })
    /*this.enterpriseService.listByStatus(true).subscribe(result => {
      this.enterprises = result;
    })
    this.enterpriseService.getOneByName('mespinosa abogados').subscribe(result => {
      this.enterprises = result;
    });
    this.enterpriseService.listByPaymentStatus('onDemo').subscribe(result => {
      this.enterprises = result; 
    this.enterpriseService.listEnterprise().subscribe(result => {
        this.enterprises = result;*/
    this.enterpriseService.listByClosenessPaymentDate(100).subscribe(result => {
        this.enterprises = result;
  })};


  
  getPaymentStatus(paymentStatus: string){
    const names: any = {'onDemo':'En demo', 'expired':'expirado', 'active':'activo'}

    return names[paymentStatus] || ''
  }
  
}
