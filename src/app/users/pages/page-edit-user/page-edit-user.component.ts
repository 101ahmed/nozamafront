import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { User } from '../../models/users';

@Component({
  selector: 'app-page-edit-user',
  templateUrl: './page-edit-user.component.html',
  styleUrls: ['./page-edit-user.component.scss']
})
export class PageEditUserComponent implements OnInit {

  @Input() id!: number;

  user$!: Observable<User>;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.user$ = this.usersService.getUserById(this.id);
      
  }

  goToUsersList(): void {
    this.router.navigate(['/', 'users', 'list'])
  }

  updateUser(user: User): void {
    this.usersService.putUser({...user, id: this.id})
    .subscribe((res: User) : void => {
      this.goToUsersList();
    })
  }

}
