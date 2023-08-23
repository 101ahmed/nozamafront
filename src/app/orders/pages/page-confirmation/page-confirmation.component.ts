import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-page-confirmation',
  templateUrl: './page-confirmation.component.html',
  styleUrls: ['./page-confirmation.component.scss']
})
export class PageConfirmationComponent implements OnInit{
  transactionId = "";
  constructor(private payment: PaymentService) { }
  ngOnInit(): void {
    this.transactionId = this.payment.transactionID;
  }

}
