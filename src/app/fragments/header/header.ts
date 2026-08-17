import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  private router = inject(Router);

  // Variable de usuario (null si no está autenticado)
  usuarioLogueado: any = null;

  goInicio() {
    this.router.navigate(['/producto/inicio']);
  }

  goJuegos() {
    this.router.navigate(['/producto/juegos']);
  }

  goNosotros() {
    this.router.navigate(['/producto/nosotros']);
  }

  goContacto() {
    this.router.navigate(['/producto/contactanos']);
  }

  goCarrito() {
    this.router.navigate(['/carrito/ver']);
  }

  goRegistro() {
    this.router.navigate(['/producto/registro']);
  }

  goHistorial() {
    this.router.navigate(['/cliente/historial']);
  }

  goAdmin() {
    this.router.navigate(['/admin/lista-juegos']);
  }

  logout() {
    this.usuarioLogueado = null;
    this.router.navigate(['/producto/inicio']);
  }
}