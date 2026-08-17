import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-juegos',
  imports: [],
  templateUrl: './lista-juegos.html',
  styleUrl: './lista-juegos.css'
})
export class ListaJuegos {
  private router = inject(Router);

  lstJuegos: any[] = [];

  goRegistrarJuego() {
    this.router.navigate(['/admin/registrar-juego']);
  }

  goModificarJuego(id: number) {
    this.router.navigate(['/admin/modificar-juego', id]);
  }
}