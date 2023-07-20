import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-sign-in',
  templateUrl: './page-sign-in.component.html',
  styleUrls: ['./page-sign-in.component.scss']
})
export class PageSignInComponent implements OnInit{

  loginForm!: FormGroup;
  email!: string
  password!: string

  constructor(
    private fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
     email: ['', Validators.required],
    password: ['', Validators.required]
    });
  }

  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      //send the object to database
    }else{
      this.validateAllFormFields(this.loginForm);
      alert("La formulaire n'a pas validé");
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

}
