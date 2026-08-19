import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Header } from '../../fragments/header/header';
import { Footer } from '../../fragments/footer/footer';
import { AuthService } from '../../services/auth.service';
import { UsuarioSesion } from '../../model/UsuarioSesion';

@Component({
  selector: 'app-inicio',
  imports: [Header, Footer, FormsModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio implements OnInit{
  private router = inject(Router);
  private authService = inject(AuthService);

  usuarioLogueado: UsuarioSesion | null = null;

  loginData = {
    email: '',
    password: ''
  };

  ngOnInit() {
    this.authService.usuario$.subscribe((user) => {
      this.usuarioLogueado = user;
    });
  }

  login() {
    if (!this.loginData.email || !this.loginData.password) {
      alert('Por favor complete todos los campos');
      return;
    }

    this.authService.login({
      correo: this.loginData.email,
      password: this.loginData.password
    }).subscribe({
      next: (user) => {
        console.log('Usuario autenticado:', user);
      },
      error: (err) => {
        alert(err.error?.mensaje || 'Error al iniciar sesión');
      }
    });
  }

  goRegistro() {
    this.router.navigate(['/producto/registro']);
  }

  logout() {
    this.authService.logout();
  }
}