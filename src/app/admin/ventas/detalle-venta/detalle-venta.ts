import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VentasService } from '../../../service/ventaservice';
import { VentaDetalleResponse } from '../../../model/Venta';

@Component({
  selector: 'app-detalle-venta-admin',
  imports: [],
  templateUrl: './detalle-venta.html',
  styleUrl: './detalle-venta.css'
})
export class DetalleVenta implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private ventasService = inject(VentasService);
  private cdr = inject(ChangeDetectorRef);

  lstDetalles: any[] = [];
  totalMonto: number = 0;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.ventasService.getVentaDetalle(id).subscribe({
        next: (res: VentaDetalleResponse) => {
          this.lstDetalles = res.detalles;
          this.totalMonto = res.montoTotal;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Error al cargar detalle de venta:', err);
        }
      });
    }
  }

  goListaVentas() {
    this.router.navigate(['/admin/lista-ventas']);
  }

  descargarBoleta() {
    console.log('Imprimiendo PDF desde admin');
    this.cdr.detectChanges();
  }
}