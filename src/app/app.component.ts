import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Empresas', url: '/enterprise', icon: 'people-circle' },
    { title: 'Clientes', url: '/client', icon: 'person-circle' },
  ];
  constructor() {}
}
