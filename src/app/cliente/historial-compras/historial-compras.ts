import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { Header } from '../../fragments/header/header';
import { Footer } from '../../fragments/footer/footer';
import { VentasService } from '../../service/ventaservice';
import { AuthService } from '../../services/auth.service';
import { Venta } from '../../model/Venta';
import { UsuarioSesion } from '../../model/UsuarioSesion';

@Component({
  selector: 'app-historial-compras',
  imports: [Header, Footer, CommonModule, DatePipe],
  templateUrl: './historial-compras.html',
  styleUrl: './historial-compras.css'
})
export class HistorialCompras implements OnInit {
  private router = inject(Router);
  private ventasService = inject(VentasService);
  private authService = inject(AuthService);
  private cdr = inject(ChangeDetectorRef);

  lstVentas: Venta[] = [];
  usuarioLogueado: UsuarioSesion | null = null;

  ngOnInit(): void {
    this.authService.usuario$.subscribe((user) => {
      this.usuarioLogueado = user;
      if (this.usuarioLogueado) {
        this.cargarMisCompras();
      }
    });
  }

  cargarMisCompras() {
    this.ventasService.getVentas().subscribe({
      next: (ventas: Venta[]) => {
        if (this.usuarioLogueado?.idcliente) {
          this.lstVentas = ventas.filter(
            v => v.cliente?.idcliente === this.usuarioLogueado?.idcliente
          );
        } else {
          this.lstVentas = ventas;
        }
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error al cargar mis compras:', err);
      }
    });
  }

  goInicio() {
    this.router.navigate(['/producto/inicio']);
  }

  goDetalleCompra(idVenta: number | string | undefined) {
  if (idVenta) {
    this.router.navigate(['/cliente/detalle-compra', idVenta]);
  }
}

  descargarBoleta(idVenta: number | string | undefined) {
    console.log('Descargando boleta:', idVenta);
  }
}