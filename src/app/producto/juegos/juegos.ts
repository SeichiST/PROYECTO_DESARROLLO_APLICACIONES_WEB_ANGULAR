import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Header } from '../../fragments/header/header';
import { Footer } from '../../fragments/footer/footer';

@Component({
  selector: 'app-juegos',
  imports: [Header, Footer],
  templateUrl: './juegos.html',
  styleUrl: './juegos.css'
})
export class Juegos {
  private router = inject(Router);

  lstCategorias: any[] = [];
  lstJuegos: any[] = [];

  filtrarPorCategoria(idCategoria: string) {
    console.log('Filtrar por categoría:', idCategoria);
  }

  goDetallesJuego(id: number) {
    this.router.navigate(['/producto/detalles-juego', id]);
  }
}