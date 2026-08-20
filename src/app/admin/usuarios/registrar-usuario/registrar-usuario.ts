import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Cliente } from '../../../model/Cliente';
import { UsuarioService } from '../../../service/usuarioservice';

@Component({
  selector: 'app-registrar-usuario',
  imports: [FormsModule],
  templateUrl: './registrar-usuario.html',
  styleUrl: './registrar-usuario.css'
})
export class RegistrarUsuario implements OnInit {

  private router = inject(Router);
  private usuarioService = inject(UsuarioService);

  cliente: Cliente = {
    nombres: '',
    apellidos: '',
    dni: '',
    telefono: '',
    direccion: '',
    fechanacimiento: '',
    sexo: 'M',
    correo: '',
    password: '',
    estado: '1',
    roleIds: []
  };

    rolSeleccionado: number = 1;
    
  ngOnInit(): void {
  }

  guardarUsuario() {

    console.log('Guardando usuario:', this.cliente);

    this.usuarioService.registrarCliente(this.cliente).subscribe({

      next: (res) => {
        console.log('Usuario registrado correctamente:', res);
        this.goListaUsuarios();
      },

      error: (err) => {
        console.error('Error al registrar usuario:', err);
      }

    });
  }

  goListaUsuarios() {
    this.router.navigate(['/admin/lista-usuarios']);
  }
}