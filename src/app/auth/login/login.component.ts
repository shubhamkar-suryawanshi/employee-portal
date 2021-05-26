import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';
// import { Employeervice } from '../../list';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logindata: any = {
    username:'',
    password: ''
  }
  public hasLoginButtonClicked: boolean = false;

  constructor(private empServ: EmployeeService, private router:Router) { }

  ngOnInit(): void {
    
  }

  public onSubmit(data: any): void{
    this.hasLoginButtonClicked = true;
    console.log(data);

    this.empServ.login(data).subscribe((res:any) => {
      if(res.token && res.token != ''){
        console.log('Login Successful');
        this.router.navigate(['../../list']);
      } else {
        console.log('Login Failed');
      }
    })
  }

}
