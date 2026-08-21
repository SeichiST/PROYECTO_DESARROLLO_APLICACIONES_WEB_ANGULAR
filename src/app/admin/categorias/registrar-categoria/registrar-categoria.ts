import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Categoria } from '../../../model/Categoria';
import { CategoriaService } from '../../../service/categoriaservice';

@Component({
  selector: 'app-registrar-categoria',
  imports: [FormsModule],
  templateUrl: './registrar-categoria.html',
  styleUrl: './registrar-categoria.css'
})
export class RegistrarCategoria {
  private router = inject(Router);
  private categoriaService = inject(CategoriaService);

  categoria: Categoria = {
    idcategoria: '',
    descripcion: ''
  };

  guardarCategoria() {
    this.categoriaService.registrarCategoria(this.categoria).subscribe({
      next: (res) => {
        console.log('Categoría registrada correctamente:', res);
        this.goListaCategorias();
      },
      error: (err) => {
        console.error('Error al registrar categoría:', err);
      }
    });
  }

  goListaCategorias() {
    this.router.navigate(['/admin/lista-categorias']);
  }
}