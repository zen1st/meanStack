import { Component } from '@angular/core';
import { User } from './_models/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  currentUser: User;
  
  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
	
  logout(event) 
  {
	localStorage.removeItem('currentUser');
	location.reload();
  }
}
