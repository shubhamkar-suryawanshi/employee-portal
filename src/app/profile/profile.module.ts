import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignoutComponent } from './signout/signout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const proroute:Routes = [
  { path: 'myprofile', component: MyprofileComponent},
  { path: 'userprofile', component: UserprofileComponent},
  { path: 'signout', component: SignoutComponent},
  { path: 'edit', component: EditComponent},
  { path: 'cp', component: ChangePasswordComponent},
  { path: 'userprofile/:ohr', component: UserprofileComponent},
]

@NgModule({
  declarations: [
    SignoutComponent,
    EditComponent,
    ChangePasswordComponent,
    MyprofileComponent,
    UserprofileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(proroute)
  ]
})
export class ProfileModule { }
