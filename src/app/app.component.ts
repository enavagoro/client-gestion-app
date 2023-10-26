import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Jude', url: '/jude', icon: 'person-circle' },
    { title: 'Enterprise', url: '/enterprise', icon: 'person-circle' },
    { title: 'Client', url: '/client', icon: 'person-circle' },
    
  ];
  constructor() {}
}
