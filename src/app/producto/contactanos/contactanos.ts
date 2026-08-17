import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Header } from '../../fragments/header/header';
import { Footer } from '../../fragments/footer/footer';

@Component({
  selector: 'app-contactanos',
  imports: [Header, Footer, FormsModule],
  templateUrl: './contactanos.html',
  styleUrl: './contactanos.css'
})
export class Contactanos {
  private router = inject(Router);

  usuarioLogueado: any = null;
  textoMensaje: string = '';

  enviarMensaje() {
    console.log('Mensaje enviado:', this.textoMensaje);
  }

  goRegistro() {
    this.router.navigate(['/producto/registro']);
  }
}