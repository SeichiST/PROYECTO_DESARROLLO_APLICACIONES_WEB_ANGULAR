import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Header } from '../../fragments/header/header';
import { Footer } from '../../fragments/footer/footer';
import { CarritoService } from '../../service/carritoservice';
import { VentasService } from '../../service/ventaservice';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-confirmar-compra',
  imports: [Header, Footer],
  templateUrl: './confirmar-compra.html',
  styleUrl: './confirmar-compra.css'
})
export class ConfirmarCompra implements OnInit {
  private router = inject(Router);
  private carritoService = inject(CarritoService);
  private ventasService = inject(VentasService);
  private authService = inject(AuthService);

  totalMonto: number = 0;

  ngOnInit() {
    const items = this.carritoService.obtenerCarrito();
    this.totalMonto = items.reduce((acc, item) => acc + item.subtotal, 0);
  }

  finalizarCompra() {
    const itemsCarrito = this.carritoService.obtenerCarrito();
    
    if (itemsCarrito.length === 0) {
      alert('Tu carrito está vacío.');
      return;
    }

    const usuarioLogueado = this.authService.getUsuarioStorage();

    if (!usuarioLogueado) {
      alert('Por favor, inicia sesión para finalizar tu compra.');
      return;
    }

    const ventaDto = {
      idCliente: usuarioLogueado.idcliente,
      montoTotal: this.totalMonto,
      detalles: itemsCarrito.map(item => ({
        idJuego: item.juego.idjuegos,
        cantidad: item.cantidad,
        precio: item.juego.precio
      }))
    };

    this.ventasService.registrarVenta(ventaDto).subscribe({
      next: (res) => {
        alert('¡' + res.mensaje + '! Número de ticket: ' + res.idVenta);
        this.carritoService.limpiarCarrito();
        this.router.navigate(['/producto/inicio']);
      },
      error: (err) => {
        alert('Hubo un error en el servidor al registrar la compra.');
        console.error(err);
      }
    });
  }

  goCarrito() {
    this.router.navigate(['/carrito/ver']); 
  }
}