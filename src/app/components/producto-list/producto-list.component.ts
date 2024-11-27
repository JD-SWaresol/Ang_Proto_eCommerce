import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.css'
})
export class ProductoListComponent implements OnInit{
  
  producto: Producto[] = [];

  constructor(private productoService: ProductoService){}
  
  ngOnInit(): void {
    
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
