import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
// Implementamos un OnDestroy
export class ProductoComponent implements OnInit, OnDestroy{

  slug: string | undefined;

  // Actualizamos para indicar que buscamos obtener un objeto de propiedades y no un array como tal
  producto: Producto | undefined;
  productoSub: Subscription | undefined;


  // Galeria son imagenes que van debajo de la imagen del principal del producto
  // - Como por ahora no se tiene nada modelado, se define la galeria como un Array de tipo 'any'
  galeria: Array<any> = [];

  // renderGaleria: Nos ayuda a definir que si se encuentra algo en la galeria entonces nos regresa 'true'
  renderGaleria: Boolean = true;

  // Creamos el elemento que usaremos para la imagen a renderizar
  currentImg: string | undefined;

  // - Damos acceso a rutas asociadas sobre el componente Producto
  // - Creamos un ProductoService, para desuscribirse
  constructor(private route:ActivatedRoute, private productoService: ProductoService){

  }


  ngOnInit(): void {

    // Traemos la propiedad slug que identifica (id) al producto que hemos seleccionado en base al ActivatedRoute con 'route'
    this.slug = this.route.snapshot.params['id'];
    console.log(this.slug);
    this.productoSub = this.productoService.getProducto()
      .subscribe( {
        next: (productos: Producto[]) => {
          //Se hace un filtrado para que reconozca el arreglo por el que queremos llegar principalmente
          this.producto = productos.filter(p => p.slug === this.slug )[0];
          
          // Traemos la imagen principal actual, que se encuentra en la posicion cero [0]
          this.currentImg = this.producto.imageUrl[0];


        },
        error: (err: any) => {
          console.error('Error', err)
        }
      }
    )
  }


  ngOnDestroy(): void {
    this.productoSub?.unsubscribe();
  }
}
