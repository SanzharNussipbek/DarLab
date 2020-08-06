import { Component } from '@angular/core';
import { NavItem, SideNavItem } from './shared/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dar-angular';

  navItemsFromApp: NavItem[] = [
    {
      title: 'Users',
      enabled: true,
      url: '/users'
    },
    {
      title: 'Videos',
      enabled: false,
      url: '/videos'
    },
    {
      title: 'Rooms',
      enabled: true,
      url: ''
    }
  ];

  sideNavItemsFromApp: SideNavItem[] = [
    {
      title: 'Account',
      enabled: true,
      url: '/account'
    },
    {
      title: 'Users',
      enabled: true,
      url: '/users'
    },
    {
      title: 'Videos',
      enabled: true,
      url: '/videos'
    },
    {
      title: 'Rooms',
      enabled: true,
      url: '/rooms'
    },
    {
      title: 'Posts',
      enabled: true,
      url: '/posts'
    },
    {
      title: 'Settings',
      enabled: true,
      url: '/settings'
    }
  ];
}
