import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export class SingupComponent {

  // Traemos los elementos de Sign In que fueron colocados en su apartado TS

  formSubmitted: boolean = false;

  private fb = new FormBuilder;

  constructor(fb:FormBuilder){

  }

  submittedForm: any = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]],
    confirmpassword: ['', [Validators.required, Validators.minLength(3)]]
  })

  register(){
    
    this.formSubmitted = true;

    if (this,this.submittedForm.invalid){
      return
    }

    console.log(this.submittedForm);
  }

}
