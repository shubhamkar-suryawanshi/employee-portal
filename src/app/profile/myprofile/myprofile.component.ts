import { Component, OnChanges, OnInit } from '@angular/core';
// import { HeaderComponent } from '../../header/header.component'
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit{

  constructor() { }
  // constructor(private isVis: HeaderComponent) { }

  ngOnInit(): void {
    // this.isVis.isVisible = true;
  }

  // ngOnChanges(): void{
  // // this.isVis.isVisible = true;

  // }

}
