import { Component, OnInit } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { User } from '../../models/users';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-page-list-users',
  templateUrl: './page-list-users.component.html',
  styleUrls: ['./page-list-users.component.scss']
})
export class PageListUsersComponent implements OnInit {

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

   //search products
   searchText: string = '';
   onSearchTextEntered(searchValue: string){
     this.searchText =  searchValue;
     console.log(this.searchText)
   }

}
