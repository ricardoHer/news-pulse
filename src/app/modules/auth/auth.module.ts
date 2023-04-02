import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from '../../shared/shared.module'


@NgModule({
    declarations: [
        LoginComponent,
        AuthComponent
    ],
    imports: [
        AuthRoutingModule,
        CommonModule,
        MaterialModule,
        SharedModule
    ]
})
export class AuthModule { }
