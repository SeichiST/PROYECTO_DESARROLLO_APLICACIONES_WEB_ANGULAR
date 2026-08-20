import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { Cliente } from '../../../model/Cliente';
import { UsuarioService } from '../../../service/usuarioservice';


@Component({
  selector: 'app-lista-usuarios',
  imports: [],
  templateUrl: './lista-usuarios.html',
  styleUrl: './lista-usuarios.css'
})
export class ListaUsuarios implements OnInit {
  usuarioList : Cliente[] = []

  constructor(
    private usuarioService : UsuarioService,
    private router : Router,
    private route : ActivatedRoute,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit() {
    this.usuarioService.getCliente().subscribe({
      next: (res) => {
        this.usuarioList = res;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error:', err.message);
      }
    });
  }



  goRegistrarUsuario() {
    this.router.navigate(['/admin/registrar-usuario']);
  }

  goModificarUsuario(id: number | undefined) {
    if(id === undefined){
      console.log('El cliente no tiene un ID valido')
      return;
    }
    this.router.navigate(['/admin/modificar-usuario', id]);
  }
}