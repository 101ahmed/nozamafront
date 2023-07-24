import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  // Variables pour stocker les valeurs des champs du formulaire
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  // Méthode pour soumettre le formulaire
  onSubmit() {
    // Vous pouvez ajouter ici la logique d'envoi de votre formulaire, par exemple en utilisant un service pour envoyer les données au backend.
    console.log('Prénom:', this.firstname);
    console.log('Nom:', this.lastname);
    console.log('E-mail:', this.email);
    console.log('Sujet:', this.subject);
    console.log('Message:', this.message);

    // Remise à zéro du formulaire après la soumission
    this.resetForm();
  }

  // Méthode pour réinitialiser le formulaire après la soumission
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
