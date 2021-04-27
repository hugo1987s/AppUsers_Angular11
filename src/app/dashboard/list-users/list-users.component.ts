import { devOnlyGuardedExpression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  loading: boolean = true;
  listUsers: any[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.listUsers = data.data;
      this.loading = false;
    })
  }

}
