import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { Venta } from '../../../model/Venta';
import { VentasService } from '../../../service/ventaservice';

@Component({
  selector: 'app-lista-ventas',
  standalone: true,
  imports: [CommonModule,DatePipe],
  templateUrl: './lista-ventas.html',
  styleUrl: './lista-ventas.css'
})
export class ListaVentas implements OnInit {
  private router = inject(Router);
  private ventasService = inject(VentasService);
  private cdr = inject(ChangeDetectorRef);

  lstVentas: Venta[] = [];

  ngOnInit(): void {
    this.ventasService.getVentas().subscribe({
      next: (res) => {
        console.log('Ventas recibidas:', res);
        this.lstVentas = res;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error al cargar ventas:', err);
      }
    });
  }

  goDetalleVenta(idVenta: number) {
    this.router.navigate(['/admin/detalle-venta', idVenta]);
  }

  descargarBoleta(idVenta: number) {
    console.log('Descargar boleta venta:', idVenta);
  }
}