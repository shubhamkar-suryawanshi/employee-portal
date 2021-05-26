import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const authroute:Routes = [
  { path:'login', component:LoginComponent },
  { path:'signup', component:SignupComponent },
  { path:'', redirectTo:'login', pathMatch:'full' }
]

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(authroute),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
