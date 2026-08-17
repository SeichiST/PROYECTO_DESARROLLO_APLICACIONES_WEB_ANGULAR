import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  imports: [],
  templateUrl: './lista-usuarios.html',
  styleUrl: './lista-usuarios.css'
})
export class ListaUsuarios {
  private router = inject(Router);

  lstClientes: any[] = [];

  goRegistrarUsuario() {
    this.router.navigate(['/admin/registrar-usuario']);
  }

  goModificarUsuario(id: string) {
    this.router.navigate(['/admin/modificar-usuario', id]);
  }
}