import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Header } from '../../fragments/header/header';
import { Footer } from '../../fragments/footer/footer';

@Component({
  selector: 'app-historial-compras',
  imports: [Header, Footer],
  templateUrl: './historial-compras.html',
  styleUrl: './historial-compras.css'
})
export class HistorialCompras {
  private router = inject(Router);

  lstVentas: any[] = [];

  goInicio() {
    this.router.navigate(['/producto/inicio']);
  }

  goDetalleCompra(idVenta: number | string) {
    this.router.navigate(['/cliente/detalle-compra', idVenta]);
  }

  descargarBoleta(idVenta: number | string) {
    console.log('Descargando boleta:', idVenta);
  }
}