import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseUrl = 'http://localhost:8085/api/v1/categoria';

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.baseUrl);
  }

  getCategoriaById(id: string): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.baseUrl}/${id}`);
  }

  registrarCategoria(categoria: Categoria): Observable<any> {
    return this.http.post(this.baseUrl, categoria);
  }

  actualizarCategoria(id: string, categoria: Categoria): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${id}`, categoria);
  }
}