import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Adress } from './model/adress';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-adresse',
  templateUrl: './add-adresse.component.html',
  styleUrls: ['./add-adresse.component.scss']
})
export class AddAdresseComponent {

  constructor(
    private accountService: AccountService,
    private router: Router
  ) {
  }

  createAdress(adress: Adress) {
    this.accountService.postAdress(adress)
      .subscribe((res) => {
        this.goToAdressList();
      });
  }

  goToAdressList() {
    this.router.navigate(['/', 'my-account', 'my-addresses']);
  }

}
