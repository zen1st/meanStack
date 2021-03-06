import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
  //moduleId: module.id,
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class UserListComponent implements OnInit {
	
    currentUser: User;
    users: User[] = [];
	
	selectedUser: User;
	
    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(_id: string) {
        this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
    }
	
	editUser(user: User) {
		this.selectedUser = user;
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}
