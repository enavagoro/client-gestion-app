import { Component, OnInit } from '@angular/core';
import { EnterpriseService } from '../_services/enteprise.service';

interface Enteprise{
  status?: boolean,
  name: string
}

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.page.html',
  styleUrls: ['./enterprise.page.scss'],
})
export class EnterprisePage implements OnInit {
  title: string = 'holahola'
  title1: string = 'chaochao'

  colorFlag: boolean = false

  enteprises: Enteprise[] = []

  constructor(private enterpriseService: EnterpriseService) { }

  ngOnInit() {
    this.enterpriseService.listEnterprise().subscribe(result => {
      this.enteprises = result
    })
  }

  toggleColorFlag(){
    this.colorFlag = !this.colorFlag
  }
}
