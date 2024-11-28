import { Component, OnDestroy, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.css'
})
export class ProductoListComponent implements OnInit, OnDestroy{
  
  producto: Producto[] = [];

  //Para destruir la subscripcion de un producto, creamos el siguiente elemento
  productoSub: Subscription | undefined;

  constructor(private productoService: ProductoService){}
  
  ngOnInit(): void {
    
    // Aqui indicamos que vamos a trabjar con un Subscriber
    this.productoSub = this.productoService.getProducto()
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


  // Una vez de que la informacion de los productos haya sido mostrada en el metodo anterior, vamos a indicar que al terminar, vamos a destruir el productSub para que no
  // se siga cargando el componente
  ngOnDestroy(): void {
    this.productoSub?.unsubscribe();
  }
  

}
