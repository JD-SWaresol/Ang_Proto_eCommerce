import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  //Se usa para validar si se ha realizado el envio de datos dentro del SignIng Form => (Por default es FALSE)
  formSubmitted: boolean = false;

  private fb = new FormBuilder;

  constructor(fb:FormBuilder){

  }

  //Este sera el 'formGroup' que sera llamado por el form del signin.html
  loginForm: any = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  })

  login(){
    
    //Al llamar el metodo, en automatico se cambia el estado de esta variable
    this.formSubmitted = true;

    // Validamos que los campos requeridos sean validos, de no serlo, no retorna nada
    if (this,this.loginForm.invalid){
      return
    }

    // Si los campos requeridos son validos, muestra la informacion en consola
    console.log(this.loginForm);
  }
}
