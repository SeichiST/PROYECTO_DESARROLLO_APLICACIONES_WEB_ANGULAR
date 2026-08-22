import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Header } from '../../fragments/header/header';
import { Footer } from '../../fragments/footer/footer';
import { JuegoService } from '../../dashboard/juego/juegoservice';
import { Juego } from '../../model/Juego';
import { CategoriaService } from '../../service/categoriaservice';
import { Categoria } from '../../model/Categoria';
import { Paginador } from '../../fragments/paginador/paginador';


@Component({
  selector: 'app-juegos',
  imports: [Header, Footer, Paginador],
  templateUrl: './juegos.html',
  styleUrl: './juegos.css'
})
export class Juegos implements OnInit {
  private router = inject(Router);
  private juegoService = inject(JuegoService);
  private categoriaService = inject(CategoriaService);
  private cdr = inject(ChangeDetectorRef);

  lstCategorias: Categoria[] = [];
  lstJuegos: Juego[] = [];
  lstJuegosFiltrados: Juego[] = [];

  ngOnInit() {
    this.juegoService.getJuegos().subscribe({
      next: (res) => {
        this.lstJuegos = res;
        this.lstJuegosFiltrados = res;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("Error al cargar juegos:", err.message);
      }
    });
    this.categoriaService.getCategorias().subscribe({
      next: (res) => {
        this.lstCategorias = res;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("Error al cargar categorías:", err.message);
      }
    });
  }

  filtrarPorCategoria(idCategoria: string) {
    this.paginaActual = 1;
    if (idCategoria === '') {
      this.lstJuegosFiltrados = this.lstJuegos;
      return;
    }
    this.lstJuegosFiltrados = this.lstJuegos.filter(
      juego => juego.categoria.idcategoria === idCategoria
    );
  }

  goDetallesJuego(id: number) {
    this.router.navigate(['/producto/detalles-juego', id]);
  }

  paginaActual: number = 1;
elementosPorPagina: number = 6;

get juegosPaginados(): any[] {
  const inicio = (this.paginaActual - 1) * this.elementosPorPagina;
  return this.lstJuegosFiltrados.slice(inicio, inicio + this.elementosPorPagina);
}

get totalPaginas(): number {
  return Math.ceil(this.lstJuegosFiltrados.length / this.elementosPorPagina);
}

setPagina(pagina: number) {
  this.paginaActual = pagina;
}

}