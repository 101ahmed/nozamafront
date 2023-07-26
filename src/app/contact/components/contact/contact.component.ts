import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit{
  constructor(){}

  ngOnInit(): void{

  }

  firstname: string = '';
  lastname: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

 
  onSubmit() {
    
    console.log('Prénom:', this.firstname);
    console.log('Nom:', this.lastname);
    console.log('E-mail:', this.email);
    console.log('Sujet:', this.subject);
    console.log('Message:', this.message);

   
    this.resetForm();
  }

  
  resetForm() {
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.subject = '';
    this.message = '';

    const contactFormElement: HTMLFormElement | null = document.querySelector('#contactForm');
    if (contactFormElement) {
      contactFormElement.reset();

    
  }
 
  }
}
