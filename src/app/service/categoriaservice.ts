import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../model/Categoria'; // ajusta la ruta según tu estructura

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private httpClient: HttpClient) { }

  getCategorias(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>("http://localhost:8085/api/v1/categoria");
  }
}