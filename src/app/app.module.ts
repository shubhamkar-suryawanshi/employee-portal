import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeService } from './service/employee.service';
import { ListComponent } from './list/list.component';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { AuthGuard } from './service/guard/auth.guard';

const route: Routes = [
  
  { path:'auth', loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule) },
  { path:'profile', loadChildren:() => import('./profile/profile.module').then(m => m.ProfileModule), 
  // canActivate: ['AuthGuard'] 
},  
  { path:'list', component:ListComponent },
  { path:'', redirectTo:'auth/login', pathMatch:'full' },

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    FormsModule,
    Ng2FilterPipeModule,
    HttpClientModule,
  ],
  exports:[RouterModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
