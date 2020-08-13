import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UsersComponent } from './users/users.component' 
import { UserComponent } from './user/user.component' 
import { UsersRoutingModule } from './users-routing.module'
import { SharedModule } from '../shared/shared.module'
import { UserService } from './services/user.service'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

@NgModule ({
    declarations: [
        UserComponent,
        UsersComponent
    ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        HttpClientModule,
        SharedModule,
        FormsModule,
    ],
    providers: [
        UserService,
    ]
})

export class UsersModule { }