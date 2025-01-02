import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-suscribe',
  templateUrl: './suscribe.component.html',
  styleUrl: './suscribe.component.css'
})
export class SuscribeComponent {

  constructor(private cookieService: CookieService){

  }

  ngOnInit(): void {
    
    console.log('Cookie Iniciada: ' + this.cookieService.get('name'));
    
  }

}
