import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Header } from '../../fragments/header/header';
import { Footer } from '../../fragments/footer/footer';

@Component({
  selector: 'app-detalle-juego',
  imports: [Header, Footer, FormsModule],
  templateUrl: './detalle-juego.html',
  styleUrl: './detalle-juego.css'
})
export class DetalleJuego {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  cantidad: number = 1;
  juego: any = {
    idJuegos: 0,
    descripcion: '',
    precio: 0,
    imagen: ''
  };

  goCatalogo() {
    this.router.navigate(['/producto/juegos']);
  }

  agregarAlCarrito() {
    console.log('Agregado al carrito:', this.juego, 'Cantidad:', this.cantidad);
  }
}