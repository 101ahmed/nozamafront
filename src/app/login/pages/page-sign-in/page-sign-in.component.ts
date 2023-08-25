import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-page-sign-in',
  templateUrl: './page-sign-in.component.html',
  styleUrls: ['./page-sign-in.component.scss']
})
export class PageSignInComponent implements OnInit{

  loginForm!: FormGroup;
  

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router : Router,
    

  ){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
     email: ['', Validators.required],
    password: ['', Validators.required]
    });
  }

  
  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      
      // const { email, password } = this.loginForm.value;
  
      // this.authService.simulateLogin(email, password).subscribe(
      //   response => {
      //     if (response.success) {
      //       this.router.navigate(['/catalogue']);
      //     } else {
      //       console.log(response.message);
      //     }
      //   },
      //   error => {
      //     console.error(error);
      //   }
      // );
    } else {
      this.validateAllFormFields(this.loginForm);
      alert("Le formulaire n'est pas validé");
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
