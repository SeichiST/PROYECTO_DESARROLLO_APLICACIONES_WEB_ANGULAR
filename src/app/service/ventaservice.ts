import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  private http = inject(HttpClient);
  private url = 'http://localhost:8085/api/v1/ventas';

  registrarVenta(ventaDto: any): Observable<any> {
    return this.http.post(this.url, ventaDto);
  }
}