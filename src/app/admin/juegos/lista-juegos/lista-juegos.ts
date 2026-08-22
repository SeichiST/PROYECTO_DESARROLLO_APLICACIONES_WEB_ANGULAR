import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Juego } from '../../../model/Juego';
import { Juegoservice } from '../../../service/juegoservice';
import { Paginador } from "../../../fragments/paginador/paginador";

@Component({
  selector: 'app-lista-juegos',
  imports: [Paginador],
  templateUrl: './lista-juegos.html',
  styleUrl: './lista-juegos.css'
})
export class ListaJuegos implements OnInit {
  juegoList: Juego[] = [];

  constructor(
    private juegoService: Juegoservice,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.juegoService.getJuegos().subscribe({
      next: (res) => {
        this.juegoList = res;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error:', err.message);
      }
    });
  }

  goNewJuego() {
    this.router.navigate(['/admin/registrar-juego']);
  }

  goDetailJuego(id: number | undefined) {
    if (id) {
      this.router.navigate(['/admin/modificar-juego', id]);
    }
  }

  paginaActual: number = 1;
elementosPorPagina: number = 10;

get juegosPaginados(): any[] {
  const inicio = (this.paginaActual - 1) * this.elementosPorPagina;
  return this.juegoList.slice(inicio, inicio + this.elementosPorPagina);
}

get totalPaginas(): number {
  return Math.ceil(this.juegoList.length / this.elementosPorPagina);
}

setPagina(pagina: number) {
  this.paginaActual = pagina;
}
}