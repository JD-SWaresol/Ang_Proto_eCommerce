import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit{

  // Damos acceso a rutas asociadas sobre el componente Producto
  constructor(private reoute:ActivatedRoute){

  }
  ngOnInit(): void {
    // Varifica que nos trae el route
    console.log(this.reoute);
  }
}
