import { ChangeDetectorRef,Component, inject, OnInit } from '@angular/core';
import { MensajeService } from '../../service/mensajeservice';
import { Mensaje } from '../../model/Mensaje';
import { DatePipe } from '@angular/common';
import { Paginador } from '../../fragments/paginador/paginador';


@Component({
  selector: 'app-mensajes',
  imports: [DatePipe, Paginador],
  templateUrl: './mensajes.html',
  styleUrl: './mensajes.css'
})
export class Mensajes implements OnInit {
  private mensajeService = inject(MensajeService);
  private cdr = inject(ChangeDetectorRef);

  mensajes: Mensaje[] = [];
  paginaActual: number = 1;
  elementosPorPagina: number = 10;

  ngOnInit(): void {
    console.log('ngOnInit');
    this.listarMensajes();
  }

  listarMensajes(): void {
    this.mensajeService.getMensajes().subscribe({
      next: (data) => {

        console.log('DATA:', data);
        this.mensajes = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error al obtener los mensajes: ', err);
        }
      })
    }
    get mensajesPaginados(): any[] {
    const inicio = (this.paginaActual - 1) * this.elementosPorPagina;
    return this.mensajes.slice(inicio, inicio + this.elementosPorPagina);
  }

  get totalPaginas(): number {
    return Math.ceil(this.mensajes.length / this.elementosPorPagina);
  }

  setPagina(pagina: number) {
    this.paginaActual = pagina;
  }

  }
