import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.list().subscribe((response) => {
      this.users = response;
    });
  }

  public delete(index: number) {
    this.users.splice(index, 1);
  }

}
