import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UsersComponent } from './users/users.component' 
import { UserComponent } from './user/user.component' 
import { UsersRoutingModule } from './users-routing.module'
import { SharedModule } from '../shared/shared.module'
import { UserService } from './services/user.service'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { UserDetailResolver } from './services/userDetail.resolver';
import { UserFormComponent } from './user-form/user-form.component'

@NgModule ({
    declarations: [
        UserComponent,
        UsersComponent,
        UserFormComponent
    ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        HttpClientModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        UserService,
        UserDetailResolver
    ]
})

export class UsersModule { }