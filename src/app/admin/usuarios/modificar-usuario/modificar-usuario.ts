import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modificar-usuario',
  imports: [FormsModule],
  templateUrl: './modificar-usuario.html',
  styleUrl: './modificar-usuario.css'
})
export class ModificarUsuario {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

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

  actualizarUsuario() {
    console.log('Actualizando usuario:', this.cliente);
  }

  goListaUsuarios() {
    this.router.navigate(['/admin/lista-usuarios']);
  }
}