import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { Cliente } from '../../../model/Cliente';
import { UsuarioService } from '../../../service/usuarioservice';
import { Paginador } from "../../../fragments/paginador/paginador";


@Component({
  selector: 'app-lista-usuarios',
  imports: [Paginador],
  templateUrl: './lista-usuarios.html',
  styleUrl: './lista-usuarios.css'
})
export class ListaUsuarios implements OnInit {
  usuarioList : Cliente[] = []
  paginaActual: number = 1;
  elementosPorPagina: number = 5;

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

  get usuariosPaginados(): any[] {
    const inicio = (this.paginaActual - 1) * this.elementosPorPagina;
    return this.usuarioList.slice(inicio, inicio + this.elementosPorPagina);
  }

  get totalPaginas(): number {
    return Math.ceil(this.usuarioList.length / this.elementosPorPagina);
  }

  setPagina(pagina: number) {
    this.paginaActual = pagina;
  }
}