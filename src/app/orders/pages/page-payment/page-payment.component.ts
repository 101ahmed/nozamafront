import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { window } from 'rxjs';
import { PaymentService } from 'src/app/payment.service';


@Component({
  selector: 'app-page-payment',
  templateUrl: './page-payment.component.html',
  styleUrls: ['./page-payment.component.scss']
})
export class PagePaymentComponent implements OnInit{

  title = '';
  amount = 0;
  @ViewChild('paymentRef', {static: true}) paymentRef!: ElementRef;
  constructor(private router: Router, private payment: PaymentService) { }

  ngOnInit(): void {
    this.amount = this.payment.totalAmount;
    window.paypal.Buttons(
      {
        style: {
          layout: 'horizontal',
          color: 'blue',
          shape: 'rect',
          label: 'paypal',
        },
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: this.amount.toString(),
                  currency_code: 'USD'
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
      }
    ).render(this.paymentRef.nativeElement);
  }

  cancel() {
    this.router.navigate(['cart']);
  }

 // private initConfig(): void {
   // this.payPalConfig = {
     // currency: 'EUR',
      //clientId: 'AdETruMgZWzONLAqq7Sa72zg6ShEANX645RQVXsVNiJ7BrOhRQ0KabXGg-Rn95FcJ5biDDXv6Ck6aFxY', 
      //createOrderOnClient: (data) => <ICreateOrderRequest> {
      //  intent: 'CAPTURE',
       // purchase_units: [{
        //  amount: {
         //   currency_code: 'EUR',
           // value: '0.01',
           // breakdown: {
           //   item_total: {
           //     currency_code: 'EUR',
             //   value: '0.01'
          //    }
          //  }
          //},
        //  items: [{
         //   name: 'The Swag Coder',
         //   quantity: '1',
          //  category: 'DIGITAL_GOODS',
          //  unit_amount: {
          //    currency_code: 'EUR',
          //    value: '0.01',
           // },
        //  }]
      //  }]
    //  },
     // advanced: {
     //   commit: 'true'
   //   },
    //  style: {
     //   label: 'paypal',
     //   layout: 'vertical',
     //  // size: 'small',
        //color: 'blue',
     //   shape: 'rect'
    //  },
    //  onApprove: (data: any, actions: any) => {
      //  console.log('onApprove - transaction was approved, but not authorized', data, actions);
       // actions.order.get().then((details: any) => {
      //    console.log('onApprove - you can get full order details inside onApprove: ', details);
     //   });

   //   },
    //  onClientAuthorization: (data) => {
    //    console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
   //   },
    //  onCancel: (data, actions) => {
     //   console.log('OnCancel', data, actions);

 //     },
   //   onError: err => {
   //     console.log('OnError', err);
  //    },
   //   onClick: (data, actions) => {
   //     console.log('onClick', data, actions);
   //   }
  //  };

  
  
  }

