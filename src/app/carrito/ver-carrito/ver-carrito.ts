import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Header } from '../../fragments/header/header';
import { Footer } from '../../fragments/footer/footer';
import { CarritoService, ItemCarrito } from '../../service/carritoservice';

@Component({
  selector: 'app-ver-carrito',
  imports: [Header, Footer],
  templateUrl: './ver-carrito.html',
  styleUrl: './ver-carrito.css'
})
export class VerCarrito implements OnInit {
  private router = inject(Router);
  private carritoService = inject(CarritoService);

  carritoList: ItemCarrito[] = [];
  totalMonto: number = 0;

  ngOnInit() {
    this.cargarDatosCarrito();
  }

  cargarDatosCarrito() {
    this.carritoList = this.carritoService.obtenerCarrito();
    this.calcularTotal();
  }

  calcularTotal() {
    this.totalMonto = this.carritoList.reduce((acc, item) => acc + item.subtotal, 0);
  }

  eliminarItem(idJuego: number) {
    this.carritoService.eliminarItem(idJuego);
    this.cargarDatosCarrito(); 
  }

  goCatalogo() {
    this.router.navigate(['/producto/juegos']);
  }

  goConfirmar() {
    if (this.carritoList.length === 0) {
      alert('Tu carrito está vacío. Agrega algunos juegos primero.');
      return;
    }
    this.router.navigate(['/carrito/confirmar']);
  }
}