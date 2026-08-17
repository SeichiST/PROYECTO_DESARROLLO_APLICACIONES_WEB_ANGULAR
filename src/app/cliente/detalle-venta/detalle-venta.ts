import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Header } from '../../fragments/header/header';
import { Footer } from '../../fragments/footer/footer';

@Component({
  selector: 'app-detalle-venta',
  imports: [Header, Footer],
  templateUrl: './detalle-venta.html',
  styleUrl: './detalle-venta.css'
})
export class DetalleVenta {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  lstDetalles: any[] = [];
  totalMonto: number = 0;

  goHistorial() {
    this.router.navigate(['/cliente/historial']);
  }

  descargarBoleta() {
    console.log('Imprimiendo PDF');
  }
}