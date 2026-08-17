import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterOutlet],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  private router = inject(Router);

  goInicio() {
    this.router.navigate(['/producto/inicio']);
  }

  goListaJuegos() {
    this.router.navigate(['/admin/lista-juegos']);
  }

  goListaCategorias() {
    this.router.navigate(['/admin/lista-categorias']);
  }

  goListaUsuarios() {
    this.router.navigate(['/admin/lista-usuarios']);
  }

  goMensajes() {
    this.router.navigate(['/admin/mensajes']);
  }

  goListaVentas() {
    this.router.navigate(['/admin/lista-ventas']);
  }

  logout() {
    // Aquí limpiarás la sesión/token
    this.router.navigate(['/producto/inicio']);
  }
}