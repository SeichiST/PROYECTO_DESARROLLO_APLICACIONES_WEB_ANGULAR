import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Categoria } from '../../../model/Categoria';
import { CategoriaService } from '../../../service/categoriaservice';

@Component({
  selector: 'app-lista-categorias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-categorias.html',
  styleUrl: './lista-categorias.css'
})
export class ListaCategorias implements OnInit {
  private router = inject(Router);
  private categoriaService = inject(CategoriaService);
  private cdr = inject(ChangeDetectorRef);

  lstCategorias: Categoria[] = [];

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe({
      next: (res) => {
        console.log('Categorías recibidas:', res);
        this.lstCategorias = res;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error al cargar categorías:', err);
      }
    });
  }

  goRegistrarCategoria() {
    this.router.navigate(['/admin/registrar-categoria']);
  }

  goModificarCategoria(id: string) {
    this.router.navigate(['/admin/modificar-categoria', id]);
  }
}