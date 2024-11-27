import { Injectable } from '@angular/core';

import { apiServer } from '../apiServer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  //Guardamos la URL del Api server que hemos creado
  private apiUrl: string = apiServer.serverUrl;

  constructor(private http: HttpClient) { }

  getProducto(){
    return this.http.get(`${this.apiUrl}`);
  }
}
