import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-categorias',
  imports: [],
  templateUrl: './lista-categorias.html',
  styleUrl: './lista-categorias.css'
})
export class ListaCategorias {
  private router = inject(Router);

  lstCategorias: any[] = [];

  goRegistrarCategoria() {
    this.router.navigate(['/admin/registrar-categoria']);
  }

  goModificarCategoria(id: string) {
    this.router.navigate(['/admin/modificar-categoria', id]);
  }
}