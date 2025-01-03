import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  //Se usa para validar si se ha realizado el envio de datos dentro del SignIng Form => (Por default es FALSE)
  formSubmitted: boolean = false;

  private fb = new FormBuilder;

  private router = new Router;

  constructor(fb:FormBuilder, private cookieService: CookieService, router: Router){

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

    //Mostramos en Consola el contenido del FormGroup (email y password)
    console.log('Email: ' + this.loginForm.controls['email'].value);
    console.log('Passw: ' + this.loginForm.controls['password'].value);

    //En caso de que los campos sean correctos redirecciona a Index (Primer prueba)
    if (this.loginForm.controls['email'].value === 'ydelgado@example.com' && this.loginForm.controls['password'].value === '123') {
      console.log('Ingresaste con Exito!!!');

      // Cookie de sesión con la que vamos a trabajar
      this.cookieService.set('email', this.loginForm.controls['email'].value);
      
      //Redirecciona a Index una vez que se ingreso con Exito
      this.router.navigate(['/'])
    }
    else {
      alert('Correo o Contraseña incorrectos!!');
      console.log('Error al Ingresar!!!');
      return
    }
  }
}
