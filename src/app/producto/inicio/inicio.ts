import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Header } from '../../fragments/header/header';
import { Footer } from '../../fragments/footer/footer';

@Component({
  selector: 'app-inicio',
  imports: [Header, Footer, FormsModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {
  private router = inject(Router);

  usuarioLogueado: any = null;

  loginData = {
    email: '',
    password: ''
  };

  login() {
    console.log('Datos de login:', this.loginData);
    // Aquí se llamará a tu servicio de autenticación con Spring Boot
  }

  goRegistro() {
    this.router.navigate(['/producto/registro']);
  }

  logout() {
    this.usuarioLogueado = null;
  }
}