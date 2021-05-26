import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public employees:any;
  constructor(private empServ: EmployeeService) { }

  ngOnInit(): void {
    this.empServ.getUserData().subscribe((res:any)=>{ this.employees = res.data })
  }

}
