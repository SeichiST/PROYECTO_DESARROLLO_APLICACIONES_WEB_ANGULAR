import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Header } from '../../fragments/header/header';
import { Footer } from '../../fragments/footer/footer';

@Component({
  selector: 'app-confirmar-compra',
  imports: [Header, Footer],
  templateUrl: './confirmar-compra.html',
  styleUrl: './confirmar-compra.css'
})
export class ConfirmarCompra {
  private router = inject(Router);

  totalMonto: number = 0;

  finalizarCompra() {
    console.log('Compra finalizada');
    this.router.navigate(['/producto/inicio']);
  }

  goCarrito() {
    this.router.navigate(['/carrito/ver']);
  }
}