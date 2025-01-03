import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  //Cookie de Sesión de Prueba
  email: string | undefined;

  //Suscription para eventos de Router
  suscription: Subscription | undefined;

  constructor(private route:ActivatedRoute, private router: Router, private cookieService: CookieService){
    // Carga los eventos de Routeo para la suscription
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.suscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        //Captura la variable de sesión
        this.email = this.cookieService.get('name');
        console.log('HEADER: ' + this.email);
        this.router.navigated = false;
      }
    });
  }

  ngOnInit(): void {
    //Captura la variable de sesión
    
  }

  ngOnDestroy(): void {
    //Cancela la suscription para los eventos de ruteo
    if (this.suscription) {
      this.suscription.unsubscribe();
    }
  }

}
