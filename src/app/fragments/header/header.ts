import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UsuarioSesion } from '../../model/UsuarioSesion';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  private router = inject(Router);
  private authService = inject(AuthService);

  usuarioLogueado: UsuarioSesion | null = null;

  ngOnInit() {
    this.authService.usuario$.subscribe((user) => {
      this.usuarioLogueado = user;
    });
  }

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
    this.authService.logout();
    this.router.navigate(['/producto/inicio']);
  }
}