import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Cliente } from '../../../model/Cliente';
import { UsuarioService } from '../../../service/usuarioservice';

@Component({
  selector: 'app-modificar-usuario',
  imports: [FormsModule],
  templateUrl: './modificar-usuario.html',
  styleUrl: './modificar-usuario.css'
})
export class ModificarUsuario {

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private usuarioService = inject(UsuarioService);
  private cdr = inject(ChangeDetectorRef);

  cliente: Cliente = {
    idcliente: 0,
    nombres: '',
    apellidos: '',
    dni: '',
    telefono: '',
    direccion: '',
    fechanacimiento: '',
    sexo: '',
    correo: '',
    password: '',
    estado: '1',
    roleIds: []
  };

  rolSeleccionado: number = 1;

  ngOnInit() {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.usuarioService.getClienteById(id).subscribe({
      next: (res) => {

        this.cliente = res;

        if(this.cliente.roleIds && this.cliente.roleIds.length> 0){
          this.rolSeleccionado = this.cliente.roleIds[0];
        }

        this.cdr.detectChanges();
      },

      error: (err) => {
        console.error(
          'Error al cargar el usuario:',
          err.message
        );
      }
    });
  }

  actualizarUsuario() {

    this.cliente.roleIds = [this.rolSeleccionado]

    console.log('Datos que se enviaran', this.cliente)

    if(this.cliente.idcliente === undefined){
      console.error('No se puede actualizar: el cliente no tiene ID');
      return;
    }

    this.usuarioService
      .actualizarUsuario(this.cliente.idcliente, this.cliente)
      .subscribe({

        next: () => {

          console.log('Usuario actualizado correctamente');

          this.goListaUsuarios();
        },

        error: (err) => {

          console.error(
            'Error al actualizar el usuario:',
            err.message
          );

        }

      });
  }

  goListaUsuarios() {
    this.router.navigate(['/admin/lista-usuarios']);
  }
}