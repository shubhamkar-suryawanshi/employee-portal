import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public isVisible: boolean = false;

  private url: string = "/assets/data/employees.json";
  constructor(private http: HttpClient) { }

  public getUserData(): Observable<Object>{
    return this.http.get(this.url);
  }

  public login(data:any): Observable<Object>{
    return this.http.post('https://reqres.in/api/login', data)
  }

  employeeDetails:any = [{
    id: '1',
    ohr:'703281034',
    name: 'Shubhamkar Suryawansh', 
    role: 'Consultant', 
    rating: '⭐⭐⭐', 
    profile:"../../assets/a5.jpg" 
  },{
    id: '2',
    ohr:'703282025', 
    name: 'Shashank Patil', 
    role: 'Developer', 
    rating: '⭐⭐⭐⭐', 
    profile:"../../assets/a2.png"
  },{
    id: '3',ohr:'703283034', 
    name: 'Hemanshu Dagade', 
    role: 'Data Scientist', 
    rating: '⭐⭐⭐', 
    profile:"../../assets/a3.png"
  },{
    id: '4',ohr:'703284058', 
    name: 'Vaibhav Pawar', 
    role: 'EPA Developer', 
    rating: '⭐⭐⭐', 
    profile:"../../assets/a4.jpg"
  },{
    id: '5',ohr:'703282315', 
    name: 'Omkar Waghmare', 
    role: 'Backend Developer', 
    rating: '⭐⭐⭐⭐', 
    profile:"../../assets/a5.png"
  },
  ]
}
