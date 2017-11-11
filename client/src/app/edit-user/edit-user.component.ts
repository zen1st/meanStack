import { Component, OnInit, ViewEncapsulation, Input, OnChanges} from '@angular/core';
import { User } from '../_models/index';
import { Router } from '@angular/router';
import { AlertService, UserService } from '../_services/index';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class EditUserComponent implements OnInit, OnChanges {
	
@Input() selectedUser: User;

model: any = {};

loading = false;

	constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

  ngOnInit(){
	  //this.model = userInfo;
  }
  
  ngOnChanges(changes) {
      this.model = changes.selectedUser.currentValue;
	  console.log(this.model);
  }

  edit() {
      this.loading = true;
	  console.log(this.model);
	  this.userService.update(this.model)
			.subscribe(data => 
			{
				this.alertService.success('Editing was successful', true);
				location.reload();
			},
			error => {
				this.alertService.error(error);
				this.loading = false;
			});
  }
}
