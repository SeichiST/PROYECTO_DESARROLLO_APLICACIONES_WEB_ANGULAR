import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-ventas',
  imports: [],
  templateUrl: './lista-ventas.html',
  styleUrl: './lista-ventas.css'
})
export class ListaVentas {
  private router = inject(Router);

  lstVentas: any[] = [];

  goDetalleVenta(idVenta: number | string) {
    this.router.navigate(['/admin/detalle-venta', idVenta]);
  }

  descargarBoleta(idVenta: number | string) {
    console.log('Descargar boleta venta:', idVenta);
  }
}