import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  categories: { id: number, name: string, desc: string }[] = [
    { "id": 1, "name": "Computo", "desc": "Software y Hardware" },
    { "id": 2, "name": "Musica", "desc": "Equipos de Sonido" },
    { "id": 3, "name": "Video Juegos", "desc": "Consolas y Streaming" },
    { "id": 4, "name": "Libros Digitales", "desc": "Biblioteca Digital" }
];

}
