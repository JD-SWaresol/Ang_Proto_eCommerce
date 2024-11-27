import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  producto:any;

  constructor(private productoService: ProductoService){}

  
  ngOnInit(): void {
    
    // Traemos el array de objetos que tenemos en nuestro '/assets/producto.json'
    this.productoService.getProducto()
    .subscribe({
      next: (producto: any) => {
        // Seteamos el valor del producto definido en next a la variable global 'producto: any'
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
