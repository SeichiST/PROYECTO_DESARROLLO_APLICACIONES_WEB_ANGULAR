import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-venta-admin',
  imports: [],
  templateUrl: './detalle-venta.html',
  styleUrl: './detalle-venta.css'
})
export class DetalleVenta {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  lstDetalles: any[] = [];
  totalMonto: number = 0;

  goListaVentas() {
    this.router.navigate(['/admin/lista-ventas']);
  }

  descargarBoleta() {
    console.log('Imprimiendo PDF desde admin');
  }
}