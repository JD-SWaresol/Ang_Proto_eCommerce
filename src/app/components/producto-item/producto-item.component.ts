import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrl: './producto-item.component.css'
})
export class ProductoItemComponent implements OnInit {
  
  // Con esta implementacion de tipo Item y List se puede reutilizar los componentes y usarse en otros lados

  // Este Input sera usado para cargar la informacion de un producto dentro de producto-list.component.html
  @Input() producto: Producto | undefined

  ngOnInit(): void {
    console.log(this.producto);
  }

}
