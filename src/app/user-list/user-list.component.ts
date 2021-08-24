import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title = 'DependencyInjection02';
  usersDataURL: string = 'https://reqres.in/api/users';
  users: any;
  number = '9998884433';
  date : Date = new Date();

  constructor(private userService: UserDataService) {}

  ngOnInit() {
    this.getUsersData();
  }

  getUsersData() {
    this.userService.getUsersData(this.usersDataURL).subscribe(response=>{
      this.users = response;
    })
  }

}
