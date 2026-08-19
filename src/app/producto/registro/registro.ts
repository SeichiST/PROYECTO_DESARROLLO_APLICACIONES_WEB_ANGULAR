import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Header } from '../../fragments/header/header';
import { Footer } from '../../fragments/footer/footer';
import { AuthService } from '../../services/auth.service';
import { Cliente } from '../../model/Cliente';

@Component({
  selector: 'app-registro',
  imports: [Header, Footer, FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {
  private router = inject(Router);
  private authService = inject(AuthService);

  cliente: any = {
    nombres: '',
    apellidos: '',
    dni: '',
    telefono: '',
    direccion: '',
    fechanacimiento: '',
    sexo: '',
    correo: '',
    password: ''
  };

  registrarCliente() {
    this.authService.registro(this.cliente).subscribe({
      next: (res) => {
        alert(res.mensaje || '¡Cuenta registrada con éxito!');
        this.router.navigate(['/producto/inicio']);
      },
      error: (err) => {
        alert(err.error?.mensaje || 'Error al registrar la cuenta');
      }
    });
  }

  goInicio() {
    this.router.navigate(['/producto/inicio']);
  }
}