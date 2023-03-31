import { Component, OnInit } from '@angular/core';
import {ComponentList} from './types/AngularComponentsList';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  public angularList = ComponentList
  constructor() {
    
   }

  ngOnInit(): void {
  }

  

}
