import { Injectable } from '@angular/core';

import { apiServer } from '../apiServer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  //Guardamos la URL del Api server que hemos creado
  private apiUrl: string = apiServer.serverUrl;

  constructor(private http: HttpClient) { }

  // Indicamos que lo que vamos a retornar es un arreglo de la clase Producto
  getProducto(): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.apiUrl}`);
  }
}
