import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginador',
  imports: [],
  template: `
    @if (totalPaginas > 1) {
      <nav class="d-flex justify-content-center mt-4">
        <ul class="pagination pagination-sm m-0">
          <li class="page-item" [class.disabled]="paginaActual === 1">
            <button class="page-link" (click)="cambiarPagina(paginaActual - 1)">«</button>
          </li>
          @for (p of paginasArray; track p) {
            <li class="page-item" [class.active]="p === paginaActual">
              <button class="page-link" (click)="cambiarPagina(p)">{{ p }}</button>
            </li>
          }
          <li class="page-item" [class.disabled]="paginaActual === totalPaginas">
            <button class="page-link" (click)="cambiarPagina(paginaActual + 1)">»</button>
          </li>
        </ul>
      </nav>
    }
  `,
  styles: [`
    .page-link {
      background-color: #212529;
      border-color: #343a40;
      color: #fff;
      cursor: pointer;
    }
    .page-item.active .page-link {
      background-color: #f2405d;
      border-color: #f2405d;
      color: #fff;
    }
    .page-item.disabled .page-link {
      background-color: #1a1e21;
      border-color: #343a40;
      color: #6c757d;
    }
  `]
})
export class Paginador {
  @Input() paginaActual: number = 1;
  @Input() totalPaginas: number = 1;
  @Output() onCambioPagina = new EventEmitter<number>();

  get paginasArray(): number[] {
    return Array.from({ length: this.totalPaginas }, (_, i) => i + 1);
  }

  cambiarPagina(pagina: number) {
    if (pagina >= 1 && pagina <= this.totalPaginas && pagina !== this.paginaActual) {
      this.onCambioPagina.emit(pagina);
    }
  }
}