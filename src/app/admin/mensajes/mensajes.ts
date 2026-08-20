import { ChangeDetectorRef,Component, inject, OnInit } from '@angular/core';
import { MensajeService } from '../../service/mensajeservice';
import { Mensaje } from '../../model/Mensaje';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-mensajes',
  imports: [DatePipe],
  templateUrl: './mensajes.html',
  styleUrl: './mensajes.css'
})
export class Mensajes implements OnInit {
  private mensajeService = inject(MensajeService);
  private cdr = inject(ChangeDetectorRef);

  mensajes: Mensaje[] = [];

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

  }
