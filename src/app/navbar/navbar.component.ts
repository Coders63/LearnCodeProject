import { Component, OnInit } from '@angular/core';
import {ComponentList} from './types/AngularComponentsList';
import {CoursesList} from './types/courseheader'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  public angularList = ComponentList
  public courseList = CoursesList
  public showSideNav : boolean = false;
  constructor() {
    
   }

  ngOnInit(): void {
  }

  public ShowAndHideSideNav(){
    this.showSideNav = true;
  }

}
