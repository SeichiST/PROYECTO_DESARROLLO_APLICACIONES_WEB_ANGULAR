import { Component, inject, ChangeDetectorRef, OnInit  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Header } from '../../fragments/header/header';
import { Footer } from '../../fragments/footer/footer';
import { JuegoService } from '../../dashboard/juego/juegoservice';
import { Juego } from '../../model/Juego';

@Component({
  selector: 'app-detalle-juego',
  imports: [Header, Footer, FormsModule],
  templateUrl: './detalle-juego.html',
  styleUrl: './detalle-juego.css'
})
export class DetalleJuego implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private juegoService = inject(JuegoService);
  private cdr = inject(ChangeDetectorRef);
  cantidad: number = 1;
    juego!: Juego;

    ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.juegoService.getJuegoById(id).subscribe({
      next: (res) => {
        console.log('Juego recibido:', res);
        this.juego = res;
        this.cdr.detectChanges();   
      },
      error: (err) => {
        console.error('Error al cargar el juego:', err);
      }
    });
}

  goCatalogo() {
    this.router.navigate(['/producto/juegos']);
  }

   agregarAlCarrito() {
    console.log(
      'Agregado al carrito:',
      this.juego,
      'Cantidad:',
      this.cantidad
    );
  }
}