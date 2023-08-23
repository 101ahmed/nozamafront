import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/users/models/users';
import { UsersService } from 'src/app/users/services/users.service';

@Component({
  selector: 'app-page-sign-up',
  templateUrl: './page-sign-up.component.html',
  styleUrls: ['./page-sign-up.component.scss']
})
export class PageSignUpComponent implements OnInit{

  @Input() user! : User;

  signUpForm!: FormGroup;
  firstname!: string;
  lastname!: string;
  mail!: string;
  password!: string;

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router
  ){}

  ngOnInit(): void{
    const currentDate = new Date();
    const gmtPlus2Date = new Date(currentDate.getTime() + 2 * 60 * 60 * 1000); // Ajoute 2 heures (en millisecondes)


    this.signUpForm = this.fb.group({
      firstname:['', Validators.required],
      lastname:['', Validators.required],
      mail:['', Validators.required],
      password:['', Validators.required],
      signInDate: gmtPlus2Date
    });
    
  }
  onSignUp() {
    if (this.signUpForm.valid) {
      const user: User = { ...this.signUpForm.value } as User;
      
      // Appel de la méthode createUser pour enregistrer l'utilisateur
      this.createUser(user);
    } else {
      this.validateAllFormFields(this.signUpForm);
      alert("Votre formulaire n'est pas validé");
    }
  }
    
  
  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field =>{
      const control = formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true})
      }else if (control instanceof FormGroup){
        this.validateAllFormFields(control)
      }
    })
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

