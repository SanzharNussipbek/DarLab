import { Component } from '@angular/core';
import { NavItem, SideNavItem } from '../shared/types';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

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
      url: '/rooms'
    }
  ];

  srcLogoFromApp: string = '../assets/dar_logo.png';

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
