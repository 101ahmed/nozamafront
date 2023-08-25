import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/users/models/users';
import { UsersService } from 'src/app/users/services/users.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit{

  isLoading = true;
  data = new BehaviorSubject<User[]>([]);

  constructor(
    private usersService: UsersService
  ) {

  }

  ngOnInit(): void {
      this.getData();
      this.isLoading = true;
  }

  getData(){
    this.usersService.getUser().subscribe((res => {this.data.next(res); 
      this.isLoading=false}))
  }

  delete(user: User) {
    if(confirm("Voulez vous supprimer l'utilisateur ?"))
    this.usersService.deleteUserById(user.id)
    .subscribe(() => {
      this.getData();
    })

  }
}
