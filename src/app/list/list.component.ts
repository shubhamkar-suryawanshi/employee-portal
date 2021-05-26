import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public employees: any = [];
  searchName: any = { name: '' };

  constructor(private empList: EmployeeService) { }

  ngOnInit(){
    // this.empList.getUserData().subscribe( res => this.employees = res );
  this.employees = this.empList.employeeDetails;

  }

}
