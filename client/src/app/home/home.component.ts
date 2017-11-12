import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../_models/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  currentUser: User;
  
  constructor() 
  {
	  this.currentUser = JSON.parse(localStorage.getItem('currentUser')).username;
	}

  ngOnInit() {
	  
  }

}
