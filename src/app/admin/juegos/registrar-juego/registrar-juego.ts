import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CategoriaService } from '../../../service/categoriaservice';
import { JuegoService } from '../../../dashboard/juego/juegoservice';
import { ImagenService} from '../../../service/imagenservice';

@Component({
  selector: 'app-registrar-juego',
  imports: [FormsModule],
  templateUrl: './registrar-juego.html',
  styleUrl: './registrar-juego.css'
})
export class RegistrarJuego {
  private router = inject(Router);
  private juegoService = inject(JuegoService);
  private categoriaService = inject(CategoriaService);
  private imagenService = inject(ImagenService);
  private cdr = inject(ChangeDetectorRef);

  lstCategorias: any[] = [];
  selectedFile: File | null = null;

  juego: any = {
    descripcion: '',
    precio: 0,
    categoria: '',
    activo: true
  };

  ngOnInit() {
    this.categoriaService.getCategorias().subscribe({
      next: (res) => {
        this.lstCategorias = res;
        this.cdr.detectChanges();
      },
      error: (err) => console.error("Error al cargar categorías:", err.message)
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

   guardarJuego() {
    if (!this.selectedFile) {
      console.error("Debe seleccionar una imagen");
      return;
    }


    this.imagenService.subirImagenJuego(this.selectedFile).subscribe({
      next: (res) => {
       
        this.juego.imagen = res.nombreArchivo;
        
       
        this.juegoService.createJuego(this.juego).subscribe({
          next: () => {
            console.log("Juego registrado correctamente");
            this.goListaJuegos();
          },
          error: (err) => console.error("Error al registrar el juego:", err.message)
        });
      },
      error: (err) => console.error("Error al subir la imagen:", err.message)
    });
  }

  goListaJuegos() {
    this.router.navigate(['/admin/lista-juegos']);
  }
}