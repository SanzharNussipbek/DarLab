import { NgModule } from '@angular/core'
import { AuthComponent } from './auth.component'
import { AuthRoutingModule } from './auth-routing.module'
import { FormsModule } from '@angular/forms';

@NgModule ({
    declarations: [
        AuthComponent,
    ],
    imports: [
        AuthRoutingModule,
        FormsModule
    ]
})

export class AuthModule { }