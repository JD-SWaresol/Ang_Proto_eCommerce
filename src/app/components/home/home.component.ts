import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  // Actualizamos esta variable a un arreglo de tipo Producto
  producto: Producto[] = [];

  constructor(private productoService: ProductoService){}

  
  ngOnInit(): void {
    
    // Traemos el array de objetos que tenemos en nuestro '/assets/producto.json'
    this.productoService.getProducto()
    .subscribe({
      next: (producto: Producto[]) => {

        this.producto = producto
        console.log(this.producto);
      },
      error: (err: any) => {
        console.error(err);
      },
      complete: () => {
        console.log('completado');
      }
    })
  }
}
