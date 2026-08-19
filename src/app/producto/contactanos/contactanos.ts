import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Header } from '../../fragments/header/header';
import { Footer } from '../../fragments/footer/footer';
import { AuthService } from '../../services/auth.service';
import { UsuarioSesion } from '../../model/UsuarioSesion';
@Component({
  selector: 'app-contactanos',
  imports: [Header, Footer, FormsModule],
  templateUrl: './contactanos.html',
  styleUrl: './contactanos.css'
})
export class Contactanos implements OnInit {
  private router = inject(Router);
  private authService = inject(AuthService);

  usuarioLogueado: UsuarioSesion | null = null;
  textoMensaje: string = '';

  ngOnInit() {
    this.authService.usuario$.subscribe((user) => {
      this.usuarioLogueado = user;
    });
  }

  enviarMensaje() {
    if (!this.textoMensaje.trim()) {
      alert('Por favor escribe un mensaje.');
      return;
    }

    alert(`¡Gracias por contactarnos, ${this.usuarioLogueado?.nombres}`);
    this.textoMensaje = '';
  }

  goInicio() {
    this.router.navigate(['/producto/inicio']);
  }

  goRegistro() {
    this.router.navigate(['/producto/registro']);
  }
}