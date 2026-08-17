import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Juego } from '../../../model/Juego';
import { Juegoservice } from '../juegoservice';

@Component({
  selector: 'app-lista-juegos',
  imports: [],
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
}