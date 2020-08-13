import { ComponentFactory } from '@angular/core';
import { pipe } from 'rxjs';

export interface NavItem {
    title: string;
    enabled: boolean;
    url: string;
}

export interface SideNavItem {
    title: string;
    enabled: boolean;
    url: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    username: string;
    phone: string;
    website: string;
    address: Address;
    company: Company;
}

export interface Address {
    suite: string;
    street: string;
    city: string;
    zipcode: string;
}

export interface Company {
    name: string;
    catchPhrase: string;
}