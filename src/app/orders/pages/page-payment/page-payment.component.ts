import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from '../../services/payment.service';
import { IPayPalConfig } from 'ngx-paypal';

@Component({
  selector: 'app-page-payment',
  templateUrl: './page-payment.component.html',
  styleUrls: ['./page-payment.component.scss']
})
export class PagePaymentComponent implements OnInit {

  title = '';
  amount = 0;
  @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef;

  constructor(private router: Router, private payment: PaymentService) { }

  public payPalConfig ?: IPayPalConfig;

  ngOnInit(): void {
    this.amount = this.payment.totalAmount;
    window.paypal.Buttons({
      style: {
        label: 'paypal',
        layout: 'vertical',
        size: 'small',
        color: 'blue',
        shape: 'rect',
      },
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: this.amount.toString(),
                currency_code: 'EUR'
              }
              
            }
          ]
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
          if (details.status === 'COMPLETED') {
            this.payment.transactionID = details.id;
            this.router.navigate(['confirm']);
          }
        });
      },
        onError: (error: any) => {
        console.log(error);
      }
    }).render(this.paymentRef.nativeElement);
  }

  cancel() {
    this.router.navigate(['cart']);
  }
}

  

