import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Header } from '../../fragments/header/header';
import { Footer } from '../../fragments/footer/footer';

@Component({
  selector: 'app-ver-carrito',
  imports: [Header, Footer],
  templateUrl: './ver-carrito.html',
  styleUrl: './ver-carrito.css'
})
export class VerCarrito {
  private router = inject(Router);

  carritoList: any[] = [];
  totalMonto: number = 0;

  eliminarItem(idJuego: number) {
    this.carritoList = this.carritoList.filter(item => item.idJuego !== idJuego);
  }

  goCatalogo() {
    this.router.navigate(['/producto/juegos']);
  }

  goConfirmar() {
    this.router.navigate(['/carrito/confirmar']);
  }
}