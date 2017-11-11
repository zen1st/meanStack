import { Component, OnInit, ViewEncapsulation, Input, OnChanges} from '@angular/core';
import { User } from '../_models/index';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditUserComponent implements OnInit, OnChanges {
@Input() selectedUser: User；

model: User = {};

  constructor() { }

  ngOnInit(){
	  //this.model = userInfo;
  }
  
  ngOnChanges(changes) {
      this.model = changes.selectedUser.currentValue;
	  console.log(this.model);
  }

}
