import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modificar-categoria',
  imports: [FormsModule],
  templateUrl: './modificar-categoria.html',
  styleUrl: './modificar-categoria.css'
})
export class ModificarCategoria {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  categoria: any = {
    idCategoria: '',
    descripcion: ''
  };

  actualizarCategoria() {
    console.log('Actualizando categoría:', this.categoria);
  }

  goListaCategorias() {
    this.router.navigate(['/admin/lista-categorias']);
  }
}