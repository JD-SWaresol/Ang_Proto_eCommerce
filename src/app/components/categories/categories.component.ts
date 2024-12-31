import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  categories: { id: number, title: string, desc: string }[] = [
    { "id": 1, "title": "Computo", "desc": "Software y Hardware" },
    { "id": 2, "title": "Musica", "desc": "Equipos de Sonido" },
    { "id": 3, "title": "Video Juegos", "desc": "Consolas y Streaming" },
    { "id": 4, "title": "Libros Digitales", "desc": "Biblioteca Digital" }
  ];

}
