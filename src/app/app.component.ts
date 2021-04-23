import { Component } from '@angular/core';

export interface TabItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lazy-Loading-Mat-Tabs';

  tabs: TabItem[] = [
    {
      label: 'HOME',
      route: '/home',
    },
    {
      label: 'ABOUT US',
      route: '/about-us',
    },
    {
      label: 'CONTACT US',
      route: '/contact-us',
    },
    {
      label: 'CARS',
      route: '/cars',
    },
    {
      label: 'BIKES',
      route: '/bikes',
    }
    
  ];
}

