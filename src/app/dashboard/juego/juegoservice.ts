import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juego } from '../../model/Juego';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  constructor(private httpClient: HttpClient) { }

  getJuegos(): Observable<Juego[]> {
    return this.httpClient.get<Juego[]>("http://localhost:8085/api/v1/juego");
  }

  createJuego(juego: Juego): Observable<any> {
    return this.httpClient.post<any>("http://localhost:8085/api/v1/juego", juego);
  }

  actualizarJuego(id: number, juego: Juego): Observable<any> {
    return this.httpClient.patch<any>("http://localhost:8085/api/v1/juego/" + id, juego);
  }

  eliminarJuego(id: number): Observable<any> {
    return this.httpClient.delete<any>("http://localhost:8085/api/v1/juego/" + id);
  }

  getJuegoById(id: number): Observable<Juego> {
    return this.httpClient.get<Juego>("http://localhost:8085/api/v1/juego/" + id);
  }
}