import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Juego } from '../../../model/Juego';
import { JuegoService } from '../juegoservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-juego-list',
  imports: [],
  templateUrl: './juego-list.html',
  styleUrl: './juego-list.css'
})
export class JuegoList implements OnInit {
  juegoList: Juego[] = [];

  constructor(
    private juegoService: JuegoService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { } 

  ngOnInit() {
    this.juegoService.getJuegos().subscribe({
      next: (res) => {
        this.juegoList = res;
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.error("Error:", err.message);
      }
    });
  }

  goNewJuego() {
    this.router.navigate(["nuevo"], {relativeTo: this.route});
  }

  goDetailJuego(id: number | undefined) {
    if (id) {
      this.router.navigate([id.toString()], {relativeTo: this.route});
    }
  }
}