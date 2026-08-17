import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Header } from '../../fragments/header/header';
import { Footer } from '../../fragments/footer/footer';

@Component({
  selector: 'app-registro',
  imports: [Header, Footer, FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {
  private router = inject(Router);

  cliente: any = {
    nombres: '',
    apellidos: '',
    dni: '',
    telefono: '',
    direccion: '',
    fechaNacimiento: '',
    sexo: '',
    correo: '',
    password: ''
  };

  registrarCliente() {
    console.log('Registrando cliente:', this.cliente);
  }

  goInicio() {
    this.router.navigate(['/producto/inicio']);
  }
}