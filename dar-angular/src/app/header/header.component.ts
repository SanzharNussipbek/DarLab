import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from '../shared/types';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  navItems: NavItem[] = [];

  @Input()
  srcLogoFromNav: string = '';

  isLoggedIn: boolean;
  
  constructor(
    private router : Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.authService.isLoggedIn$
      .subscribe(val => this.isLoggedIn = val)
  }

  onLoginClick(): void {
    this.router.navigate(['/auth/login']);
  }

  onLogoutClick(): void {
    this.router.navigate(['/auth/login']);
    this.isLoggedIn = false;
  }

}
