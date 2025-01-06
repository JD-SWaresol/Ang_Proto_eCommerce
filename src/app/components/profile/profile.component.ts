import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  email: string | undefined;

  private router = new Router;

  constructor(private cookieService: CookieService){
    
  }

  ngOnInit(): void {
    this.email = this.cookieService.get('email');
    if (this.email) {
      console.log('Este es el email ==> ' + this.email);
    }
    else {
      console.log('Email Indefinido!!! ' + this.email);
    }
  }

  isValid(){
    if (this.email){
      return true;
    }
    else {
      return false;
    }
  }

}
