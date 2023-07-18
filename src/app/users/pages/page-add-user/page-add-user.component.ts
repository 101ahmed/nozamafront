import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { User } from '../../models/users';

@Component({
  selector: 'app-page-add-user',
  templateUrl: './page-add-user.component.html',
  styleUrls: ['./page-add-user.component.scss']
})
export class PageAddUserComponent {

  constructor(
    private userService: UsersService,
    private router: Router
  ) {

  }

  createUser(user: User) {
    this.userService.postUser(user)
      .subscribe((res) => {
        this.goToUserList();
      });
  }

  goToUserList() {
    this.router.navigate(['/', 'users', 'list']);
  }


}
