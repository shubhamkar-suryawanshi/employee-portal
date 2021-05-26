import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private empServ: EmployeeService, private _Activatedroute: ActivatedRoute) { }
// This one is about comment
  comment = "";
  commentArray = [];
  addComment(){
    this.commentArray.push(this.comment);
    this.comment = '';
   }
 

// This one is about profile
  arr : any = [];
  id: any;
  obj:any; 

  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.paramMap.get("ohr");
    this.arr=this.empServ.employeeDetails;
    this.obj = this.arr.filter((element:any)=>{
      return element.ohr === this.id
    });
  }

}
