import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Jude', url: '/jude', icon: 'briefcase' },
    { title: 'Otro', url: '/a', icon: 'briefcase' },
  ];
  constructor() {}
}
