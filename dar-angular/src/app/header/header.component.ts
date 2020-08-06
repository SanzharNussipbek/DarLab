import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from '../shared/types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showLoginBtn = true;


  @Input()
  navItems: NavItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onLoginClick(): void {
    this.showLoginBtn = false;
  }

}
