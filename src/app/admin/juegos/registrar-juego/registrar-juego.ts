import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registrar-juego',
  imports: [FormsModule],
  templateUrl: './registrar-juego.html',
  styleUrl: './registrar-juego.css'
})
export class RegistrarJuego {
  private router = inject(Router);

  lstCategorias: any[] = [];
  selectedFile: File | null = null;

  juego: any = {
    descripcion: '',
    precio: 0,
    categoria: { idCategoria: '' }
  };

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  guardarJuego() {
    console.log('Guardando juego:', this.juego, this.selectedFile);
  }

  goListaJuegos() {
    this.router.navigate(['/admin/lista-juegos']);
  }
}