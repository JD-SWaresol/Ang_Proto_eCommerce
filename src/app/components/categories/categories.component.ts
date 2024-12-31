import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  slug: number | undefined;

  suscription: Subscription | undefined;

  categories: { id: number, title: string, desc: string }[] = [
    { "id": 1, "title": "Computo", "desc": "Software y Hardware" },
    { "id": 2, "title": "Musica", "desc": "Equipos de Sonido" },
    { "id": 3, "title": "Video Juegos", "desc": "Consolas y Streaming" },
    { "id": 4, "title": "Libros Digitales", "desc": "Biblioteca Digital" }
  ];

  constructor(private route:ActivatedRoute, private router: Router){
    // Nos suscribimos al envento de 'router-events' para verificar todos y cada uno de los eventos de ruteo
    // Indicamos al enrutardor que no agregue la navegación actual del enrutador a su historial.
    // Al recargar el componente cada evento se activa solo para el componente para realizar el SPA
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.suscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });
  }

  ngOnInit(): void {
    this.slug = this.route.snapshot.params['id'];
    console.log('Id: ' + this.slug);
  }

  ngOnDestroy(): void {
    // Cancelamos la suscripción para los eventos del enrutador  cuando se destruye el componente
    if (this.suscription) {
      this.suscription.unsubscribe();
    }
  }

}
