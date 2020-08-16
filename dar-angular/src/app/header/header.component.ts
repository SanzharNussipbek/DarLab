import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from '../shared/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showLoginBtn = true;


  @Input()
  navItems: NavItem[] = [];

  @Input()
  srcLogoFromNav: string = '';

  constructor(
    private router : Router,
  ) { }

  ngOnInit(): void {
  }

  onLoginClick(): void {
    this.showLoginBtn = false;
    this.router.navigate(['/login']);
  }

}
