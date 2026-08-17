import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modificar-juego',
  imports: [FormsModule],
  templateUrl: './modificar-juego.html',
  styleUrl: './modificar-juego.css'
})
export class ModificarJuego {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  lstCategorias: any[] = [];
  selectedFile: File | null = null;

  juego: any = {
    idJuegos: 0,
    descripcion: '',
    precio: 0,
    imagen: '',
    categoria: { idCategoria: '' }
  };

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  actualizarJuego() {
    console.log('Actualizando juego:', this.juego);
  }

  goListaJuegos() {
    this.router.navigate(['/admin/lista-juegos']);
  }
}