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

  idVenta: number | null = null;
  lstDetalles: any[] = [];
  totalMonto: number = 0;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const paramId = params.get('id') || params.get('idVenta') || params.get('idventa');
      console.log('ID capturado de la URL:', paramId);
      if (paramId) {
        this.idVenta = Number(paramId);
        this.cargarDetalles(this.idVenta);
      }
    });
  }

  cargarDetalles(id: number) {
    this.ventasService.getVentaDetalle(id).subscribe({
      next: (res: VentaDetalleResponse) => {
        console.log('Detalles recibidos del backend:', res);
        this.lstDetalles = res.detalles || [];
        this.totalMonto = res.montoTotal || 0;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error al cargar detalle de venta:', err);
      }
    });
  }

  goListaVentas() {
    this.router.navigate(['/admin/lista-ventas']);
  }

  descargarBoleta() {
    console.log('Imprimiendo PDF desde admin');
    this.cdr.detectChanges();
  }
}