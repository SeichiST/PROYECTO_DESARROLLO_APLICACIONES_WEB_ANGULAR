import { Component, OnInit, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Categoria } from '../../../model/Categoria';
import { CategoriaService } from '../../../service/categoriaservice';

@Component({
  selector: 'app-modificar-categoria',
  imports: [FormsModule],
  templateUrl: './modificar-categoria.html',
  styleUrl: './modificar-categoria.css'
})
export class ModificarCategoria implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private categoriaService = inject(CategoriaService);

  categoria: Categoria = {
    idcategoria: '',
    descripcion: ''
  };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.categoriaService.getCategoriaById(id).subscribe({
        next: (res) => {
          this.categoria = res;
        },
        error: (err) => {
          console.error('Error al cargar categoría:', err);
        }
      });
    }
  }

  actualizarCategoria() {
    this.categoriaService.actualizarCategoria(this.categoria.idcategoria, this.categoria).subscribe({
      next: () => {
        console.log('Categoría actualizada correctamente');
        this.goListaCategorias();
      },
      error: (err) => {
        console.error('Error al actualizar categoría:', err);
      }
    });
  }

  goListaCategorias() {
    this.router.navigate(['/admin/lista-categorias']);
  }
}