import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registrar-categoria',
  imports: [FormsModule],
  templateUrl: './registrar-categoria.html',
  styleUrl: './registrar-categoria.css'
})
export class RegistrarCategoria {
  private router = inject(Router);

  categoria: any = {
    descripcion: ''
  };

  guardarCategoria() {
    console.log('Guardando categoría:', this.categoria);
  }

  goListaCategorias() {
    this.router.navigate(['/admin/lista-categorias']);
  }
}