import { Component, OnInit, HostListener } from '@angular/core';
import { EnterpriseService } from '../_services/enteprise.service'

interface Enteprise{
  name: string
  key: string
  paymentStatus: string
}

interface OptionButton {
  text: string
  icon: string
}

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.page.html',
  styleUrls: ['./enterprise.page.scss'],
})
export class EnterprisePage implements OnInit {
  enterprises: Enteprise[] = []
  searchTerm: string = ''
  currentSearchTerm: string = ''

  selectedButtonIndex: number = 0;

  listStatus: boolean = false;
  

  optionButtons: OptionButton[] = [
    {text: 'Listar Empresas', icon:'person'},
    {text: 'Listar por estatus', icon:'pin'},
    {text: 'Listar por estado de pago', icon:'trash'},
    {text: 'Listar por pago expirado', icon:'person-circle'},
    {text: 'Listar por días de cercania a expirar', icon:'text'},
]

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if(event.keyCode == 13){
      if(this.searchTerm.trim() != ''){
        this.listEntepriseByName(this.searchTerm)
        this.currentSearchTerm = this.searchTerm;
      }
    }
  }

  constructor(private enterpriseService: EnterpriseService) { 

  }

  ngOnInit() {
    this.listEnterprise()
    /*
    /*
    this.enterpriseService.getOneByName('mespinosa abogados').subscribe(result => {
      this.enterprises = result;
    });
    this.enterpriseService.listByPaymentStatus('onDemo').subscribe(result => {
      this.enterprises = result; 
    this.enterpriseService.listEnterprise().subscribe(result => {
        this.enterprises = result;*/
  //   this.enterpriseService.listByClosenessPaymentDate(100).subscribe(result => {
  //       this.enterprises = result;
  // })
};

  listEntepriseByName(name: string){
    this.enterpriseService.getOneByName(name).subscribe(result => {
      this.enterprises = result;
    });
  }

  listEntepriseByStatus(status: boolean){
    this.enterpriseService.listByStatus(status).subscribe(result => {
      this.enterprises = result;
    })
  }


  listEnterprise(){
      this.enterpriseService.listEnterprise().subscribe(result => {
        this.enterprises = result;
    })
  }

  getPaymentStatus(paymentStatus: string){
    const names: any = {'onDemo':'En demo', 'expired':'expirado', 'active':'activo'}

    return names[paymentStatus] || ''
  }

  setSearch(event: any){
    this.searchTerm = event.target.value
  }

  clearSearchTerm(){
    this.currentSearchTerm = '';
    this.listEnterprise();
  }
  
  selectOption(option: any, index: number){
    this.selectedButtonIndex = index;
    console.log('option:', option)

    if(index == 0){ // index 0 es listar empresas
      this.listEnterprise()
    }
  }

  selectFilterOption(){
    if(this.selectedButtonIndex == 1){
      this.listEntepriseByStatus(this.listStatus)
    }
  }
}
