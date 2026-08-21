import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venta, VentaDetalleResponse } from '../model/Venta';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private baseUrl = 'http://localhost:8085/api/v1/ventas';

  constructor(private http: HttpClient) { }

  getVentas(): Observable<Venta[]> {
    return this.http.get<Venta[]>(this.baseUrl);
  }

  getVentaDetalle(idVenta: number): Observable<VentaDetalleResponse> {
    return this.http.get<VentaDetalleResponse>(`${this.baseUrl}/${idVenta}`);
  }

  registrarVenta(ventaDto: any): Observable<any> {
    return this.http.post(this.baseUrl, ventaDto);
  }
}