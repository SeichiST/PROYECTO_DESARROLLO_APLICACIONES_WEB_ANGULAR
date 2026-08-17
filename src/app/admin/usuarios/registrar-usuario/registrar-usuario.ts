import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registrar-usuario',
  imports: [FormsModule],
  templateUrl: './registrar-usuario.html',
  styleUrl: './registrar-usuario.css'
})
export class RegistrarUsuario {
  private router = inject(Router);

  cliente: any = {
    idCliente: '',
    estado: '1',
    nombres: '',
    apellidos: '',
    dni: '',
    telefono: '',
    correo: '',
    password: '',
    sexo: 'M',
    fechaNacimiento: '',
    direccion: '',
    rol: 'CLIENTE'
  };

  guardarUsuario() {
    console.log('Guardando usuario:', this.cliente);
  }

  goListaUsuarios() {
    this.router.navigate(['/admin/lista-usuarios']);
  }
}