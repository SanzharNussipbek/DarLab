import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component'
import { LayoutComponent } from './layout/layout.component';
import { AuthModule } from './auth/auth.module'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: () => AuthModule
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }